import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, CheckSquare, Square, RefreshCw } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  type: string;
}

const questions: Question[] = [
  { id: 1, text: "野菜や肉が少しでも混ざっていると、除けたり食べるのを辞めてしまう", type: "visual" },
  { id: 2, text: "初めて見る料理は警戒して一口も口にしないことが多い", type: "visual" },
  { id: 3, text: "料理の盛り付けが変わったり、お皿が違うだけで警戒して食べないことがある", type: "visual" },
  { id: 4, text: "白ごはん、パン、うどんなど、特定の炭水化物ばかりを欲しがる", type: "carb_only" },
  { id: 5, text: "口の中で「シャキッ」としたり「グニュ」とする食感を嫌がって出してしまう", type: "texture" },
  { id: 6, text: "肉がパサパサしていたり、野菜の繊維が少しでも残っていると飲み込めない", type: "texture" },
  { id: 7, text: "じゃがいもやカボチャなど、口の中でモサモサする食感を嫌がる", type: "texture" },
  { id: 8, text: "ほうれん草の苦味やトマトの酸味に非常に敏感で、少量でも嫌がる", type: "taste" },
  { id: 9, text: "料理の匂い（お出汁や野菜の香り）に敏感で、食べる前から拒否することがある", type: "taste" },
  { id: 10, text: "そもそも野菜や肉が入っているおかず自体を拒否して食べようとしない", type: "protein_veg_reject" },
];

const typeDescriptions: Record<string, { title: string; desc: string }> = {
  texture: { title: "食感NGタイプ", desc: "お口の感覚が過敏で、特定の食感を「嫌なもの」として捉えています。とろみをつけたり、食感を壊す工夫で解決できます。" },
  visual: { title: "見た目NGタイプ", desc: "「何が入っているかわからない」「いつもと違う」ことに不安を感じるタイプ。色味を統一したり隠したりする工夫が有効です。" },
  taste: { title: "味覚敏感タイプ", desc: "苦味や酸味を強く感じてしまうタイプ。甘みを足したり、コクのある味付けで苦味をマスキングしましょう。" },
  carb_only: { title: "炭水化物偏食タイプ", desc: "エネルギー源である白いごはんが大好き。炭水化物に栄養（タンパク質や鉄分）をこっそり混ぜ込む技が使えます。" },
  protein_veg_reject: { title: "野菜・肉拒否タイプ", desc: "特定の食材そのものに抵抗があるタイプ。好きな味付け（甘口、ソース味）や、可愛い見た目で「好き」を増やしましょう。" },
};

const Diagnosis: React.FC = () => {
  const navigate = useNavigate();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const toggleQuestion = (id: number) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const runDiagnosis = () => {
    if (selectedIds.length === 0) {
      alert("当てはまるものを1つ以上選択してください。");
      return;
    }

    const counts: Record<string, number> = {};
    selectedIds.forEach(id => {
      const q = questions.find(q => q.id === id);
      if (q) {
        counts[q.type] = (counts[q.type] || 0) + 1;
      }
    });

    // Find the type with max count
    let maxType = "visual";
    let maxCount = -1;
    Object.entries(counts).forEach(([type, count]) => {
      if (count > maxCount) {
        maxCount = count;
        maxType = type;
      }
    });

    setResult(maxType);
    window.scrollTo(0, 0);
  };

  const reset = () => {
    setSelectedIds([]);
    setResult(null);
  };

  if (result) {
    const info = typeDescriptions[result];
    return (
      <div className="p-4" style={{ paddingBottom: '100px' }}>
        <div className="card" style={{ backgroundColor: '#fff8e1', border: '2px solid var(--primary)', textAlign: 'center', padding: '30px 20px' }}>
          <h2 style={{ color: 'var(--primary-dark)', fontSize: '1.4rem', marginBottom: '10px' }}>診断結果</h2>
          <div className="badge" style={{ fontSize: '1.2rem', padding: '8px 20px', backgroundColor: 'var(--primary)', color: 'white', marginBottom: '20px' }}>
            {info.title}
          </div>
          <p style={{ lineHeight: '1.6', marginBottom: '24px' }}>{info.desc}</p>
          
          <button 
            className="btn" 
            style={{ width: '100%', padding: '15px', fontSize: '1.1rem', marginBottom: '12px' }}
            onClick={() => navigate(`/?type=${result}`)}
          >
            このタイプのレシピを見る
            <ChevronRight size={20} />
          </button>
          
          <button 
            className="btn btn-secondary" 
            style={{ width: '100%', padding: '12px' }}
            onClick={reset}
          >
            <RefreshCw size={18} />
            もう一度診断する
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4" style={{ paddingBottom: '110px' }}>
      <div className="mb-6" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '8px' }}>偏食タイプ診断</h1>
        <p className="text-sm text-muted">お子様に当てはまる項目をすべてチェックしてください</p>
      </div>

      <div className="flex-col gap-3 mb-6">
        {questions.map(q => (
          <div 
            key={q.id}
            className="card"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              cursor: 'pointer',
              border: selectedIds.includes(q.id) ? '2px solid var(--primary)' : '1px solid var(--border-color)',
              backgroundColor: selectedIds.includes(q.id) ? '#fffde7' : 'white',
              transition: 'all 0.2s'
            }}
            onClick={() => toggleQuestion(q.id)}
          >
            {selectedIds.includes(q.id) ? (
              <CheckSquare color="var(--primary)" size={24} />
            ) : (
              <Square color="#ccc" size={24} />
            )}
            <span style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>{q.text}</span>
          </div>
        ))}
      </div>

      <button 
        className="btn" 
        style={{ width: '100%', padding: '16px', fontSize: '1.1rem', boxShadow: '0 4px 10px rgba(255, 152, 0, 0.3)' }}
        onClick={runDiagnosis}
      >
        診断結果を見る
      </button>
    </div>
  );
};

export default Diagnosis;
