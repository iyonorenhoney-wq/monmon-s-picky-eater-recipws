import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, RefreshCw, CheckSquare, Square, Save, ArrowLeft, ArrowRight, Utensils, Clock, Star } from 'lucide-react';
import type { PickyType } from '../data/recipes';
import { recipes } from '../data/recipes';
import { typeLabels, typeEmojis, typeColors, typeDescriptions } from '../data/childrenData';
import { useChildren } from '../context/ChildrenContext';

// ─────────────────────────────────────────────
// 質問データ
// ─────────────────────────────────────────────
interface Choice {
  label: string;
  scores: Partial<Record<PickyType, number>>;
}
interface Question {
  id: number;
  text: string;
  emoji: string;
  choices: Choice[];
}

const questions: Question[] = [
  {
    id: 1,
    text: 'どんなとき食べないことが多い？',
    emoji: '🤔',
    choices: [
      { label: '初めて見る食べ物のとき', scores: { visual: 2 } },
      { label: '見た目が混ざっているとき', scores: { visual: 2 } },
      { label: '野菜が入っているとき', scores: { protein_veg_reject: 2 } },
      { label: '食感がいつもと違うとき', scores: { texture: 2 } },
    ],
  },
  {
    id: 2,
    text: 'よく食べるものは？',
    emoji: '🍽',
    choices: [
      { label: '白ごはん・パン', scores: { carb_only: 2 } },
      { label: '麺類（うどん・パスタなど）', scores: { carb_only: 1 } },
      { label: 'お肉系', scores: { protein_veg_reject: -1, texture: -1 } },
      { label: '甘いもの・スイーツ', scores: { taste: 1 } },
    ],
  },
  {
    id: 3,
    text: '苦手そうな特徴は？',
    emoji: '😣',
    choices: [
      { label: 'シャキシャキ・シャリシャリ食感', scores: { texture: 2 } },
      { label: 'ドロドロ・ぐにゃっとした食感', scores: { texture: 2 } },
      { label: '苦味（ゴーヤ・春菊など）', scores: { taste: 2 } },
      { label: '酸味（トマト・レモンなど）', scores: { taste: 2 } },
      { label: '色が濃い・緑・赤のもの', scores: { visual: 2, protein_veg_reject: 1 } },
    ],
  },
  {
    id: 4,
    text: '食べるときの様子は？',
    emoji: '👀',
    choices: [
      { label: '最初から「イヤ！」と拒否する', scores: { visual: 1, protein_veg_reject: 1 } },
      { label: '一口は食べるけど続かない', scores: { texture: 1, taste: 1 } },
      { label: '気分によって食べたり食べなかったり', scores: { visual: 1 } },
      { label: '特定のものしか絶対食べない', scores: { carb_only: 2 } },
    ],
  },
];

// ─────────────────────────────────────────────
// 診断ロジック
// ─────────────────────────────────────────────
function calcTypes(answers: Record<number, string[]>): { main: PickyType; sub: PickyType | null } {
  const totals: Record<PickyType, number> = {
    texture: 0,
    visual: 0,
    taste: 0,
    carb_only: 0,
    protein_veg_reject: 0,
  };

  questions.forEach(q => {
    const selected = answers[q.id] || [];
    q.choices.forEach(c => {
      if (selected.includes(c.label)) {
        (Object.entries(c.scores) as [PickyType, number][]).forEach(([type, val]) => {
          totals[type] = (totals[type] || 0) + val;
        });
      }
    });
  });

  const sorted = (Object.entries(totals) as [PickyType, number][])
    .sort((a, b) => b[1] - a[1])
    .filter(([, v]) => v > 0);

  const main = sorted[0]?.[0] ?? 'visual';
  const sub = sorted[1] && sorted[1][1] >= 2 ? sorted[1][0] : null;
  return { main, sub };
}

// ─────────────────────────────────────────────
// 献立提案ロジック（⑨）
// ─────────────────────────────────────────────
function getRecommendedMenu(main: PickyType, sub: PickyType | null) {
  const types: PickyType[] = sub ? [main, sub] : [main];

  // まずメインをピック（指定タイプに対応、時短優先）
  const mains = recipes.filter(r => r.dishType === 'main' && types.some(t => r.pickyTypes.includes(t)));
  const sides = recipes.filter(r => r.dishType === 'side' && types.some(t => r.pickyTypes.includes(t)));

  const sortByTime = (arr: typeof recipes) => [...arr].sort((a, b) => a.time - b.time);

  const today = Math.floor(Date.now() / 86400000);
  const mainList = sortByTime(mains.length > 0 ? mains : recipes.filter(r => r.dishType === 'main'));
  const sideList = sortByTime(sides.length > 0 ? sides : recipes.filter(r => r.dishType === 'side'));

  const mainRecipe = mainList[today % mainList.length];
  const sideRecipe = sideList[(today + 1) % sideList.length];

  return { mainRecipe, sideRecipe };
}

// ─────────────────────────────────────────────
// コンポーネント
// ─────────────────────────────────────────────
const Diagnosis: React.FC = () => {
  const navigate = useNavigate();
  const { addChild } = useChildren();

  const [step, setStep] = useState<number>(0); // 0 = start, 1-4 = questions, 5 = result
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [result, setResult] = useState<{ main: PickyType; sub: PickyType | null } | null>(null);

  // 保存モーダル
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [childName, setChildName] = useState('');
  const [saved, setSaved] = useState(false);

  const currentQ = questions[step - 1];

  const toggleChoice = (choice: string) => {
    const cur = answers[step] || [];
    setAnswers(prev => ({
      ...prev,
      [step]: cur.includes(choice) ? cur.filter(c => c !== choice) : [...cur, choice],
    }));
  };

  const goNext = () => {
    if (step === questions.length) {
      const res = calcTypes(answers);
      setResult(res);
      setStep(5);
    } else {
      setStep(s => s + 1);
    }
  };

  const goBack = () => {
    if (step > 1) setStep(s => s - 1);
    else setStep(0);
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
    setSaved(false);
    setShowSaveModal(false);
    setChildName('');
  };

  const handleSave = () => {
    if (!result || !childName.trim()) return;
    addChild({
      name: childName.trim(),
      mainType: result.main,
      subType: result.sub,
      diagnosedAt: new Date().toISOString(),
    });
    setSaved(true);
    setShowSaveModal(false);
  };

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // START SCREEN
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  if (step === 0) {
    return (
      <div className="p-4" style={{ paddingBottom: '100px' }}>
        <div style={{ textAlign: 'center', padding: '24px 0 16px' }}>
          <div style={{ fontSize: '4rem', marginBottom: '12px' }}>🔍</div>
          <h1 style={{ fontSize: '1.6rem', color: 'var(--primary-dark)', marginBottom: '8px' }}>
            偏食タイプ診断
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
            4つの質問に答えるだけで<br />
            お子さまの偏食タイプがわかります✨
          </p>
        </div>

        <div className="card" style={{ backgroundColor: '#fff8e1', marginBottom: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {questions.map((q, i) => (
              <div key={q.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '50%',
                  backgroundColor: 'var(--primary)', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.8rem', fontWeight: 'bold', flexShrink: 0
                }}>{i + 1}</div>
                <span style={{ fontSize: '0.9rem' }}>{q.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '10px', fontWeight: 'bold' }}>
            診断できるタイプ
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {(Object.keys(typeLabels) as PickyType[]).map(type => (
              <span key={type} style={{
                backgroundColor: typeColors[type] + '20',
                color: typeColors[type],
                border: `1px solid ${typeColors[type]}`,
                borderRadius: '20px',
                padding: '4px 12px',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                {typeEmojis[type]} {typeLabels[type]}
              </span>
            ))}
          </div>
        </div>

        <button
          className="btn"
          style={{ width: '100%', padding: '16px', fontSize: '1.1rem' }}
          onClick={() => setStep(1)}
        >
          診断スタート ✨
          <ChevronRight size={20} />
        </button>
      </div>
    );
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // QUESTION SCREEN
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  if (step >= 1 && step <= questions.length) {
    const selected = answers[step] || [];
    const progress = (step / questions.length) * 100;

    return (
      <div className="p-4" style={{ paddingBottom: '100px' }}>
        {/* プログレスバー */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              質問 {step} / {questions.length}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 'bold' }}>
              {Math.round(progress)}%
            </span>
          </div>
          <div style={{
            height: '8px', backgroundColor: '#ffe0b2', borderRadius: '4px', overflow: 'hidden'
          }}>
            <div style={{
              height: '100%', width: `${progress}%`,
              backgroundColor: 'var(--primary)',
              borderRadius: '4px',
              transition: 'width 0.4s ease'
            }} />
          </div>
        </div>

        {/* 質問カード */}
        <div className="card" style={{
          textAlign: 'center', padding: '28px 20px',
          marginBottom: '20px', backgroundColor: '#fff8e1'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '12px' }}>{currentQ.emoji}</div>
          <h2 style={{ fontSize: '1.15rem', color: 'var(--primary-dark)', lineHeight: 1.5 }}>
            {currentQ.text}
          </h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px' }}>
            ※ 複数選択OK
          </p>
        </div>

        {/* 選択肢 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
          {currentQ.choices.map(choice => {
            const isSelected = selected.includes(choice.label);
            return (
              <button
                key={choice.label}
                onClick={() => toggleChoice(choice.label)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '14px 16px',
                  borderRadius: '14px',
                  border: isSelected ? '2px solid var(--primary)' : '2px solid var(--border-color)',
                  backgroundColor: isSelected ? '#fff3e0' : 'white',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '0.95rem',
                  lineHeight: 1.4,
                  fontFamily: 'inherit',
                  fontWeight: isSelected ? 'bold' : 'normal',
                  color: 'var(--text-main)',
                  transition: 'all 0.15s',
                  boxShadow: isSelected ? '0 2px 8px rgba(255,152,0,0.2)' : '0 1px 3px rgba(0,0,0,0.04)',
                }}
              >
                {isSelected
                  ? <CheckSquare size={22} color="var(--primary)" style={{ flexShrink: 0 }} />
                  : <Square size={22} color="#ccc" style={{ flexShrink: 0 }} />
                }
                {choice.label}
              </button>
            );
          })}
        </div>

        {/* ナビボタン */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            className="btn btn-secondary"
            style={{ flex: 1, padding: '14px' }}
            onClick={goBack}
          >
            <ArrowLeft size={18} /> もどる
          </button>
          <button
            className="btn"
            style={{ flex: 2, padding: '14px' }}
            onClick={goNext}
          >
            {step === questions.length ? '結果を見る 🎉' : '次へ'}
            {step < questions.length && <ArrowRight size={18} />}
          </button>
        </div>
      </div>
    );
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // RESULT SCREEN（⑨ 献立も一緒に表示）
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  if (step === 5 && result) {
    const { main, sub } = result;
    const { mainRecipe, sideRecipe } = getRecommendedMenu(main, sub);

    return (
      <div className="p-4" style={{ paddingBottom: '120px' }}>

        {/* 診断結果ヘッダー */}
        <div style={{ textAlign: 'center', marginBottom: '20px', animation: 'fadeIn 0.4s ease' }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '8px' }}>🎉</div>
          <h1 style={{ fontSize: '1.4rem', color: 'var(--primary-dark)', marginBottom: '16px' }}>
            診断結果
          </h1>

          {/* メインタイプ */}
          <div className="card" style={{
            backgroundColor: typeColors[main] + '15',
            border: `2px solid ${typeColors[main]}`,
            marginBottom: '12px'
          }}>
            <div style={{ fontSize: '0.8rem', color: typeColors[main], fontWeight: 'bold', marginBottom: '6px' }}>
              メインタイプ
            </div>
            <div style={{ fontSize: '2rem', marginBottom: '6px' }}>{typeEmojis[main]}</div>
            <div style={{
              fontSize: '1.3rem', fontWeight: 'bold', color: typeColors[main], marginBottom: '10px'
            }}>
              {typeLabels[main]}
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--text-main)' }}>
              {typeDescriptions[main]}
            </p>
          </div>

          {/* サブタイプ */}
          {sub && (
            <div className="card" style={{
              backgroundColor: typeColors[sub] + '10',
              border: `1.5px dashed ${typeColors[sub]}`,
              marginBottom: '12px'
            }}>
              <div style={{ fontSize: '0.8rem', color: typeColors[sub], fontWeight: 'bold', marginBottom: '4px' }}>
                サブタイプ（傾向あり）
              </div>
              <div style={{ fontSize: '1.3rem', marginBottom: '4px' }}>{typeEmojis[sub]}</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: typeColors[sub] }}>
                {typeLabels[sub]}
              </div>
            </div>
          )}
        </div>

        {/* 保存ボタン */}
        {!saved ? (
          <button
            className="btn"
            style={{ width: '100%', padding: '14px', marginBottom: '20px', backgroundColor: '#4caf50' }}
            onClick={() => setShowSaveModal(true)}
          >
            <Save size={18} /> この子のタイプを保存する
          </button>
        ) : (
          <div style={{
            textAlign: 'center', padding: '12px', marginBottom: '20px',
            backgroundColor: '#e8f5e9', borderRadius: '12px',
            border: '1.5px solid #81c784', color: '#2e7d32', fontWeight: 'bold'
          }}>
            ✅ 保存しました！「こどもたち」タブで確認できます
          </div>
        )}

        {/* 今日の献立提案（⑨） */}
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.15rem', color: 'var(--primary-dark)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Utensils size={20} color="var(--primary)" />
            このタイプにおすすめ献立
          </h2>

          {/* メイン料理 */}
          <div className="card" style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span style={{
                backgroundColor: '#ffe0b2', color: '#e65100',
                padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold'
              }}>メイン料理</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Clock size={13} /> {mainRecipe.time}分
              </span>
              {mainRecipe.isMakeAhead && (
                <span style={{
                  backgroundColor: '#e3f2fd', color: '#1565c0',
                  padding: '3px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold'
                }}>作り置きOK</span>
              )}
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 'bold', marginBottom: '8px' }}>
              {mainRecipe.title}
            </div>
            <div style={{
              backgroundColor: '#f5f5f5', borderRadius: '8px', padding: '8px 10px',
              fontSize: '0.82rem', lineHeight: 1.5, color: '#555'
            }}>
              <Star size={12} style={{ display: 'inline', marginRight: '4px', color: 'var(--primary)' }} />
              {mainRecipe.pickyPoint}
            </div>
            <div style={{ marginTop: '10px' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 'bold' }}>
                使う食材：
              </div>
              <div style={{ fontSize: '0.82rem', lineHeight: 1.6 }}>
                {mainRecipe.ingredientsChild.map(i => i.name).join('・')}
              </div>
            </div>
          </div>

          {/* 副菜 */}
          <div className="card" style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span style={{
                backgroundColor: '#c8e6c9', color: '#1b5e20',
                padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold'
              }}>副菜</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Clock size={13} /> {sideRecipe.time}分
              </span>
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 'bold', marginBottom: '8px' }}>
              {sideRecipe.title}
            </div>
            <div style={{
              backgroundColor: '#f5f5f5', borderRadius: '8px', padding: '8px 10px',
              fontSize: '0.82rem', lineHeight: 1.5, color: '#555'
            }}>
              <Star size={12} style={{ display: 'inline', marginRight: '4px', color: '#66bb6a' }} />
              {sideRecipe.pickyPoint}
            </div>
          </div>

          <div style={{
            textAlign: 'center', padding: '10px',
            backgroundColor: '#fff3e0', borderRadius: '12px',
            fontSize: '0.82rem', color: '#e65100'
          }}>
            ⏱ 合計調理時間：約{mainRecipe.time + sideRecipe.time}分！
          </div>
        </div>

        {/* アクションボタン */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            className="btn"
            style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
            onClick={() => navigate(`/?type=${main}`)}
          >
            {typeEmojis[main]} このタイプのレシピを全部見る
            <ChevronRight size={18} />
          </button>
          <button
            className="btn btn-secondary"
            style={{ width: '100%', padding: '12px' }}
            onClick={reset}
          >
            <RefreshCw size={16} /> もう一度診断する
          </button>
        </div>

        {/* 保存モーダル */}
        {showSaveModal && (
          <div style={{
            position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999, padding: '20px'
          }}>
            <div style={{
              backgroundColor: 'white', borderRadius: '20px', padding: '28px 24px',
              width: '100%', maxWidth: '360px', textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>💾</div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>この子を保存する</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                名前またはニックネームを入れてください<br />
                <span style={{ fontSize: '0.78rem' }}>（例：長女、はなちゃん、2番目）</span>
              </p>
              <input
                type="text"
                value={childName}
                onChange={e => setChildName(e.target.value)}
                placeholder="ニックネームを入力"
                style={{
                  width: '100%', padding: '12px', borderRadius: '10px',
                  border: '2px solid var(--border-color)', fontSize: '1rem',
                  fontFamily: 'inherit', marginBottom: '16px', boxSizing: 'border-box'
                }}
                autoFocus
              />
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                  onClick={() => setShowSaveModal(false)}
                >
                  キャンセル
                </button>
                <button
                  className="btn"
                  style={{ flex: 1 }}
                  onClick={handleSave}
                  disabled={!childName.trim()}
                >
                  <Save size={16} /> 保存
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default Diagnosis;
