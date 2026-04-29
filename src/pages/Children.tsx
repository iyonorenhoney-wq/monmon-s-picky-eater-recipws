import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Plus, Trash2, ClipboardCheck, Utensils, Clock, Star,
  RefreshCw, Users, Edit2, Check, X
} from 'lucide-react';
import { useChildren } from '../context/ChildrenContext';
import type { PickyType } from '../data/recipes';
import { recipes } from '../data/recipes';
import { makeAheadRecipes } from '../data/makeAheadRecipes';
import {
  typeLabels, typeEmojis, typeColors, typeArrangeHints
} from '../data/childrenData';
import type { ChildProfile } from '../data/childrenData';

const ALL_TYPES: PickyType[] = ['texture', 'visual', 'taste', 'carb_only', 'protein_veg_reject'];

// 子どものactiveTypesを取得（後方互換）
function getActiveTypes(child: ChildProfile): PickyType[] {
  if (child.activeTypes && child.activeTypes.length > 0) return child.activeTypes;
  return child.subType ? [child.mainType, child.subType] : [child.mainType];
}

// ─────────────────────────────────────────────
// 献立提案ロジック（⑫）
// ─────────────────────────────────────────────
function getDailyMenu(types: PickyType[], offset = 0) {
  const mains = recipes.filter(r => r.dishType === 'main' && types.some(t => r.pickyTypes.includes(t)));
  const sides = recipes.filter(r => r.dishType === 'side' && types.some(t => r.pickyTypes.includes(t)));

  const idx = Math.floor(Date.now() / 86400000) + offset;
  const mainList = mains.length > 0 ? mains : recipes.filter(r => r.dishType === 'main');
  const sideList = sides.length > 0 ? sides : recipes.filter(r => r.dishType === 'side');

  return {
    main: mainList[idx % mainList.length],
    side: sideList[(idx + 1) % sideList.length],
  };
}

// ─────────────────────────────────────────────
// 兄弟対応ロジック（⑬）
// ─────────────────────────────────────────────
function getSiblingMenu(selectedChildren: ChildProfile[]) {
  const allTypes = selectedChildren.flatMap(c =>
    c.subType ? [c.mainType, c.subType] : [c.mainType]
  );
  const uniqueTypes = [...new Set(allTypes)] as PickyType[];

  // 共通で食べやすいメイン（複数タイプ対応レシピを優先）
  const commonMains = recipes.filter(r =>
    r.dishType === 'main' &&
    uniqueTypes.every(t => r.pickyTypes.includes(t))
  );
  const fallbackMains = recipes.filter(r =>
    r.dishType === 'main' &&
    uniqueTypes.some(t => r.pickyTypes.includes(t))
  ).sort((a, b) => b.pickyTypes.length - a.pickyTypes.length); // tapered by coverage

  const mains = commonMains.length > 0 ? commonMains : fallbackMains;

  const commonSides = recipes.filter(r =>
    r.dishType === 'side' &&
    uniqueTypes.some(t => r.pickyTypes.includes(t))
  );
  const sides = commonSides.length > 0 ? commonSides : recipes.filter(r => r.dishType === 'side');

  const idx = Math.floor(Date.now() / 86400000);
  return {
    main: mains[idx % mains.length],
    side: sides[(idx + 1) % sides.length],
    isFullyCommon: commonMains.length > 0,
  };
}

// ─────────────────────────────────────────────
// 作り置きレシピ取得
// ─────────────────────────────────────────────
function getMakeAheadForType(type: PickyType, limit = 3) {
  return makeAheadRecipes.filter(r => r.pickyTypes.includes(type)).slice(0, limit);
}

// ─────────────────────────────────────────────
// 子ども1人カードコンポーネント
// ─────────────────────────────────────────────
const ChildCard: React.FC<{
  child: ChildProfile;
  onDelete: () => void;
  onDiagnose: () => void;
  onUpdate: (updates: Partial<ChildProfile>) => void;
  menuOffset: number;
  onReshuffle: () => void;
}> = ({ child, onDelete, onDiagnose, onUpdate, menuOffset, onReshuffle }) => {
  const activeTypes = getActiveTypes(child);
  const { main: mainRecipe, side: sideRecipe } = getDailyMenu(activeTypes, menuOffset);
  const makeAhead = getMakeAheadForType(child.mainType, 2);
  const [showMakeAhead, setShowMakeAhead] = useState(false);
  const [editingTypes, setEditingTypes] = useState(false);
  const [draftTypes, setDraftTypes] = useState<PickyType[]>(activeTypes);

  const diagDate = new Date(child.diagnosedAt).toLocaleDateString('ja-JP', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  const toggleDraftType = (type: PickyType) => {
    setDraftTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const saveTypes = () => {
    if (draftTypes.length === 0) return;
    onUpdate({ activeTypes: draftTypes, mainType: draftTypes[0], subType: draftTypes[1] ?? null });
    setEditingTypes(false);
  };

  const cancelEdit = () => {
    setDraftTypes(activeTypes);
    setEditingTypes(false);
  };

  return (
    <div className="card" style={{ marginBottom: '16px' }}>
      {/* ヘッダー */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
        <div>
          <div style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '4px' }}>
            {child.name}
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {activeTypes.map(t => (
              <span key={t} style={{
                backgroundColor: typeColors[t] + '20',
                color: typeColors[t],
                border: `1px solid ${typeColors[t]}`,
                borderRadius: '20px', padding: '3px 10px',
                fontSize: '0.78rem', fontWeight: 'bold'
              }}>
                {typeEmojis[t]} {typeLabels[t]}
              </span>
            ))}
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            診断日: {diagDate}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => { setDraftTypes(activeTypes); setEditingTypes(true); }}
            title="タイプを編集"
            style={{
              background: 'none', border: '1.5px solid #ccc', borderRadius: '8px',
              padding: '6px 8px', cursor: 'pointer', color: '#888'
            }}
          >
            <Edit2 size={16} />
          </button>
          <button
            onClick={onDiagnose}
            title="再診断する"
            style={{
              background: 'none', border: '1.5px solid #ccc', borderRadius: '8px',
              padding: '6px 8px', cursor: 'pointer', color: '#888'
            }}
          >
            <ClipboardCheck size={16} />
          </button>
          <button
            onClick={onDelete}
            title="削除"
            style={{
              background: 'none', border: '1.5px solid #ffcdd2', borderRadius: '8px',
              padding: '6px 8px', cursor: 'pointer', color: 'var(--danger)'
            }}
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* ── タイプ編集パネル（機能⑭） ── */}
      {editingTypes && (
        <div style={{
          backgroundColor: '#f3e5f5', borderRadius: '12px',
          padding: '14px', marginBottom: '14px',
          border: '1.5px solid #ce93d8'
        }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#6a1b9a', marginBottom: '10px' }}>
            ✏️ 偏食タイプをON/OFFで選んでください（複数OK）
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
            {ALL_TYPES.map(type => {
              const isOn = draftTypes.includes(type);
              return (
                <button
                  key={type}
                  onClick={() => toggleDraftType(type)}
                  style={{
                    padding: '7px 14px', borderRadius: '20px', cursor: 'pointer',
                    fontFamily: 'inherit', fontSize: '0.82rem', fontWeight: 'bold',
                    border: `2px solid ${typeColors[type]}`,
                    backgroundColor: isOn ? typeColors[type] : 'white',
                    color: isOn ? 'white' : typeColors[type],
                    transition: 'all 0.15s'
                  }}
                >
                  {typeEmojis[type]} {typeLabels[type]}
                </button>
              );
            })}
          </div>
          {draftTypes.length === 0 && (
            <div style={{ fontSize: '0.78rem', color: '#c62828', marginBottom: '8px' }}>
              ⚠️ 最低1つ選んでください
            </div>
          )}
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={saveTypes}
              disabled={draftTypes.length === 0}
              style={{
                flex: 1, padding: '9px', borderRadius: '10px', cursor: 'pointer',
                backgroundColor: draftTypes.length > 0 ? '#6a1b9a' : '#ccc',
                color: 'white', border: 'none', fontFamily: 'inherit',
                fontWeight: 'bold', fontSize: '0.88rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px'
              }}
            >
              <Check size={15} /> 保存する
            </button>
            <button
              onClick={cancelEdit}
              style={{
                padding: '9px 14px', borderRadius: '10px', cursor: 'pointer',
                backgroundColor: 'white', border: '1.5px solid #ccc',
                fontFamily: 'inherit', fontSize: '0.88rem',
                display: 'flex', alignItems: 'center', gap: '4px', color: '#666'
              }}
            >
              <X size={14} /> キャンセル
            </button>
          </div>
        </div>
      )}

      {/* 今日のおすすめ献立（⑫） */}
      <div style={{
        backgroundColor: '#fff8e1', borderRadius: '12px',
        padding: '12px', marginBottom: '12px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Utensils size={14} /> 今日のおすすめ献立
          </span>
          <button
            onClick={onReshuffle}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '3px',
              fontSize: '0.75rem'
            }}
          >
            <RefreshCw size={13} /> 変える
          </button>
        </div>

        <div style={{ marginBottom: '6px' }}>
          <div style={{ fontSize: '0.75rem', color: '#e65100', fontWeight: 'bold', marginBottom: '2px' }}>
            🍖 メイン
          </div>
          <div style={{ fontSize: '0.92rem', fontWeight: 'bold' }}>{mainRecipe.title}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '3px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '3px' }}>
              <Clock size={11} /> {mainRecipe.time}分
            </span>
            {mainRecipe.isMakeAhead && (
              <span style={{ fontSize: '0.72rem', backgroundColor: '#e3f2fd', color: '#1565c0', padding: '1px 7px', borderRadius: '8px' }}>
                作り置きOK
              </span>
            )}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', color: '#2e7d32', fontWeight: 'bold', marginBottom: '2px' }}>
            🥗 副菜
          </div>
          <div style={{ fontSize: '0.92rem', fontWeight: 'bold' }}>{sideRecipe.title}</div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '3px', marginTop: '3px' }}>
            <Clock size={11} /> {sideRecipe.time}分
          </span>
        </div>

        <div style={{
          marginTop: '8px', padding: '6px 10px', backgroundColor: 'white',
          borderRadius: '8px', fontSize: '0.75rem', color: '#555', lineHeight: 1.5
        }}>
          <Star size={11} style={{ display: 'inline', marginRight: '3px', color: 'var(--primary)' }} />
          {mainRecipe.pickyPoint}
        </div>
      </div>

      {/* 作り置きレシピ（⑩） */}
      <button
        onClick={() => setShowMakeAhead(v => !v)}
        style={{
          width: '100%', background: 'none', border: '1.5px solid var(--border-color)',
          borderRadius: '10px', padding: '8px', cursor: 'pointer', fontSize: '0.82rem',
          color: 'var(--text-main)', fontFamily: 'inherit',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
        }}
      >
        🥘 作り置きレシピを見る {showMakeAhead ? '▲' : '▼'}
      </button>

      {showMakeAhead && (
        <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {makeAhead.map(r => (
            <div key={r.id} style={{
              backgroundColor: '#f8f8f8', borderRadius: '10px', padding: '10px 12px'
            }}>
              <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '4px' }}>
                {r.title}
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.72rem', backgroundColor: r.storage.includes('冷凍') ? '#e3f2fd' : '#e8f5e9', color: r.storage.includes('冷凍') ? '#1565c0' : '#2e7d32', padding: '2px 7px', borderRadius: '8px' }}>
                  💾 {r.storage}
                </span>
                <span style={{ fontSize: '0.72rem', backgroundColor: '#fff3e0', color: '#e65100', padding: '2px 7px', borderRadius: '8px' }}>
                  ⏱ {r.storageDays}
                </span>
                {r.bento && (
                  <span style={{ fontSize: '0.72rem', backgroundColor: '#fce4ec', color: '#c62828', padding: '2px 7px', borderRadius: '8px' }}>
                    🍱 お弁当OK
                  </span>
                )}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#777' }}>
                🔥 {r.reheating}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────
// メインページ
// ─────────────────────────────────────────────
const Children: React.FC = () => {
  const navigate = useNavigate();
  const { children, removeChild, updateChild } = useChildren();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [menuOffsets, setMenuOffsets] = useState<Record<string, number>>({});
  const [activeTab, setActiveTab] = useState<'list' | 'sibling'>('list');

  const toggleSelect = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const reshuffle = (id: string) => {
    setMenuOffsets(prev => ({
      ...prev,
      [id]: Math.floor(Math.random() * 100) + 1
    }));
  };


  const selectedChildren = useMemo(
    () => children.filter(c => selectedIds.includes(c.id)),
    [children, selectedIds]
  );

  const siblingResult = useMemo(() => {
    if (selectedChildren.length < 2) return null;
    return getSiblingMenu(selectedChildren);
  }, [selectedChildren]);

  return (
    <div style={{ paddingBottom: '100px' }}>
      {/* タブ */}
      <div style={{ display: 'flex', borderBottom: '2px solid var(--border-color)' }}>
        <button
          style={{
            flex: 1, background: 'none', border: 'none', padding: '13px',
            fontWeight: 'bold', fontFamily: 'inherit',
            color: activeTab === 'list' ? 'var(--primary-dark)' : '#aaa',
            borderBottom: activeTab === 'list' ? '3px solid var(--primary)' : 'none',
            cursor: 'pointer'
          }}
          onClick={() => setActiveTab('list')}
        >
          👶 こどもたち
        </button>
        <button
          style={{
            flex: 1, background: 'none', border: 'none', padding: '13px',
            fontWeight: 'bold', fontFamily: 'inherit',
            color: activeTab === 'sibling' ? 'var(--primary-dark)' : '#aaa',
            borderBottom: activeTab === 'sibling' ? '3px solid var(--primary)' : 'none',
            cursor: 'pointer'
          }}
          onClick={() => setActiveTab('sibling')}
        >
          <Users size={15} style={{ display: 'inline', marginRight: '4px' }} />
          兄弟対応
        </button>
      </div>

      {/* ── こどもたちタブ ── */}
      {activeTab === 'list' && (
        <div className="p-4">
          {/* 新規追加ボタン */}
          <button
            className="btn"
            style={{ width: '100%', padding: '14px', marginBottom: '20px' }}
            onClick={() => navigate('/diagnosis')}
          >
            <Plus size={18} /> 診断して子どもを追加
          </button>

          {children.length === 0 ? (
            <div style={{
              textAlign: 'center', padding: '60px 20px',
              backgroundColor: '#f9f9f9', borderRadius: '16px'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '12px' }}>👶</div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                まだ登録されていません<br />
                診断してお子さまを追加しましょう！
              </p>
            </div>
          ) : (
            <div>
              {children.map(child => (
                <ChildCard
                  key={child.id}
                  child={child}
                  onDelete={() => removeChild(child.id)}
                  onDiagnose={() => navigate('/diagnosis')}
                  onUpdate={(updates) => updateChild(child.id, updates)}
                  menuOffset={menuOffsets[child.id] || 0}
                  onReshuffle={() => reshuffle(child.id)}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── 兄弟対応タブ（⑬） ── */}
      {activeTab === 'sibling' && (
        <div className="p-4">
          <div style={{
            backgroundColor: '#fff8e1', borderRadius: '14px',
            padding: '14px', marginBottom: '16px'
          }}>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--text-main)' }}>
              <strong>👇 対象の子どもを選んでください</strong><br />
              2人以上選択すると、全員が食べやすい「共通献立」を提案します！
            </p>
          </div>

          {children.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <p style={{ color: 'var(--text-muted)' }}>
                こどもタブで子どもを登録してください
              </p>
              <button
                className="btn btn-secondary"
                style={{ marginTop: '12px' }}
                onClick={() => setActiveTab('list')}
              >
                こどもたちタブへ
              </button>
            </div>
          ) : (
            <>
              {/* 子ども選択 */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                {children.map(child => {
                  const isSelected = selectedIds.includes(child.id);
                  return (
                    <button
                      key={child.id}
                      onClick={() => toggleSelect(child.id)}
                      style={{
                        padding: '10px 16px', borderRadius: '20px',
                        border: isSelected
                          ? `2px solid ${typeColors[child.mainType]}`
                          : '2px solid var(--border-color)',
                        backgroundColor: isSelected ? typeColors[child.mainType] + '18' : 'white',
                        cursor: 'pointer', fontFamily: 'inherit',
                        fontSize: '0.9rem', fontWeight: isSelected ? 'bold' : 'normal',
                        color: isSelected ? typeColors[child.mainType] : 'var(--text-main)',
                        transition: 'all 0.15s'
                      }}
                    >
                      {typeEmojis[child.mainType]} {child.name}
                    </button>
                  );
                })}
              </div>

              {/* タイプ表示 */}
              {selectedChildren.length >= 1 && (
                <div className="card" style={{ marginBottom: '16px', backgroundColor: '#f9f9f9' }}>
                  {selectedChildren.map(child => (
                    <div key={child.id} style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      marginBottom: '8px', padding: '8px', backgroundColor: 'white',
                      borderRadius: '10px'
                    }}>
                      <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{child.name}：</span>
                      <span style={{
                        color: typeColors[child.mainType], fontSize: '0.85rem', fontWeight: 'bold'
                      }}>
                        {typeEmojis[child.mainType]} {typeLabels[child.mainType]}
                      </span>
                      {child.subType && (
                        <span style={{ color: typeColors[child.subType], fontSize: '0.78rem' }}>
                          ＋ {typeEmojis[child.subType]} {typeLabels[child.subType]}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* 共通献立（2人以上選択時） */}
              {siblingResult && (
                <div>
                  <div style={{
                    backgroundColor: siblingResult.isFullyCommon ? '#e8f5e9' : '#fff3e0',
                    borderRadius: '14px', padding: '14px', marginBottom: '14px',
                    border: `1.5px solid ${siblingResult.isFullyCommon ? '#a5d6a7' : '#ffcc80'}`
                  }}>
                    <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '4px' }}>
                      {siblingResult.isFullyCommon
                        ? '✅ 全員に対応できる料理が見つかりました！'
                        : '💡 ベースは同じ料理で、ちょいアレンジで対応します'}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#555' }}>
                      {siblingResult.isFullyCommon
                        ? '完全共通メニューなので調理1回でOK！'
                        : '1つの料理をベースに各自の好みに合わせた簡単アレンジを追加します'}
                    </div>
                  </div>

                  {/* 共通メイン */}
                  <div className="card" style={{ marginBottom: '12px' }}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', alignItems: 'center' }}>
                      <span style={{ backgroundColor: '#ffe0b2', color: '#e65100', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                        共通メイン
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <Clock size={12} /> {siblingResult.main.time}分
                      </span>
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 'bold', marginBottom: '10px' }}>
                      {siblingResult.main.title}
                    </div>

                    {/* 各子ども向けアレンジヒント */}
                    {!siblingResult.isFullyCommon && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '10px' }}>
                        {selectedChildren.map(child => (
                          <div key={child.id} style={{
                            backgroundColor: typeColors[child.mainType] + '12',
                            borderLeft: `3px solid ${typeColors[child.mainType]}`,
                            borderRadius: '0 8px 8px 0', padding: '6px 10px',
                            fontSize: '0.82rem'
                          }}>
                            <strong style={{ color: typeColors[child.mainType] }}>
                              {child.name}（{typeLabels[child.mainType]}）：
                            </strong>
                            {typeArrangeHints[child.mainType]}
                          </div>
                        ))}
                      </div>
                    )}

                    <div style={{
                      backgroundColor: '#f5f5f5', borderRadius: '8px', padding: '8px 10px',
                      fontSize: '0.8rem', color: '#555', lineHeight: 1.5
                    }}>
                      <Star size={11} style={{ display: 'inline', marginRight: '3px', color: 'var(--primary)' }} />
                      {siblingResult.main.pickyPoint}
                    </div>
                  </div>

                  {/* 共通副菜 */}
                  <div className="card" style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', alignItems: 'center' }}>
                      <span style={{ backgroundColor: '#c8e6c9', color: '#1b5e20', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                        副菜（共通）
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <Clock size={12} /> {siblingResult.side.time}分
                      </span>
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 'bold' }}>
                      {siblingResult.side.title}
                    </div>
                  </div>

                  <div style={{
                    textAlign: 'center', padding: '12px', backgroundColor: '#fff3e0',
                    borderRadius: '12px', fontSize: '0.85rem', color: '#e65100', fontWeight: 'bold'
                  }}>
                    ⏱ 合計 約{siblingResult.main.time + siblingResult.side.time}分で完成！<br />
                    <span style={{ fontSize: '0.78rem', fontWeight: 'normal' }}>
                      1つの料理で{selectedChildren.length}人分OK 🙌
                    </span>
                  </div>
                </div>
              )}

              {selectedChildren.length < 2 && children.length >= 1 && (
                <div style={{
                  textAlign: 'center', padding: '40px 20px',
                  color: 'var(--text-muted)', fontSize: '0.9rem'
                }}>
                  <Users size={36} color="#ccc" style={{ marginBottom: '12px', display: 'block', margin: '0 auto 12px' }} />
                  2人以上選んでください
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Children;
