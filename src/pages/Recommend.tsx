import React, { useState, useEffect, useMemo } from 'react';
import { recipes } from '../data/recipes';
import type { PickyType } from '../data/recipes';
import RecipeCard from '../components/RecipeCard';
import { useShoppingList } from '../context/ShoppingContext';
import { RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';

const Recommend: React.FC = () => {
  const { addRecipeIngredients } = useShoppingList();
  const [activeTab, setActiveTab] = useState<'today' | 'weekly'>('today');
  const [weekType, setWeekType] = useState<PickyType | 'all'>('all');
  const [weekOffset, setWeekOffset] = useState<number>(0); // 0 = current, 1 = next
  const [overrides, setOverrides] = useState<Record<string, { mainId: string; sideId: string }>>(() => {
    const saved = localStorage.getItem('picky_weekly_overrides');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return {};
  });

  // Save overrides to localStorage
  useEffect(() => {
    localStorage.setItem('picky_weekly_overrides', JSON.stringify(overrides));
  }, [overrides]);

  // Helper to get week seed
  const getWeekSeed = (offset: number) => {
    const d = new Date();
    d.setDate(d.getDate() + offset * 7);
    const firstDayOfYear = new Date(d.getFullYear(), 0, 1);
    const pastDaysOfYear = (d.getTime() - firstDayOfYear.getTime()) / 86400000;
    const weekNum = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    return `${d.getFullYear()}-W${weekNum}`;
  };

  const viewingWeekId = useMemo(() => getWeekSeed(weekOffset), [weekOffset]);

  const mains = useMemo(() => recipes.filter(r => r.dishType === 'main'), []);
  const sides = useMemo(() => recipes.filter(r => r.dishType === 'side'), []);

  // Today's logic
  const todayIndex = Math.floor(Date.now() / 86400000); 
  const todayMain = mains[todayIndex % mains.length];
  const todaySide = sides[todayIndex % sides.length];

  const days = ['月', '火', '水', '木', '金', '土', '日'];

  const getDayPlan = (dayIdx: number) => {
    const key = `${viewingWeekId}_${dayIdx}_${weekType}`;
    const override = overrides[key];

    let poolMains = mains;
    let poolSides = sides;

    if (weekType !== 'all') {
      poolMains = poolMains.filter(r => r.pickyTypes.includes(weekType as PickyType));
      poolSides = poolSides.filter(r => r.pickyTypes.includes(weekType as PickyType));
      if (poolMains.length === 0) poolMains = mains;
      if (poolSides.length === 0) poolSides = sides;
    }

    if (override) {
      const m = recipes.find(r => r.id === override.mainId);
      const s = recipes.find(r => r.id === override.sideId);
      if (m && s) return { main: m, side: s };
    }

    // Default determined logic (changes weekly)
    // Add offset and dayIdx to change the starting point each day/week
    const weekSeedInt = parseInt(viewingWeekId.replace(/\D/g, ''));
    const mIdx = (weekSeedInt * 7 + dayIdx * 3) % poolMains.length;
    const sIdx = (weekSeedInt * 3 + dayIdx * 5) % poolSides.length;

    return {
      main: poolMains[mIdx],
      side: poolSides[sIdx]
    };
  };

  const reshuffle = (dayIdx: number) => {
    const key = `${viewingWeekId}_${dayIdx}_${weekType}`;
    
    let poolMains = mains;
    let poolSides = sides;
    if (weekType !== 'all') {
      poolMains = poolMains.filter(r => r.pickyTypes.includes(weekType as PickyType));
      poolSides = poolSides.filter(r => r.pickyTypes.includes(weekType as PickyType));
      if (poolMains.length === 0) poolMains = mains;
      if (poolSides.length === 0) poolSides = sides;
    }

    // Pick random
    const randMain = poolMains[Math.floor(Math.random() * poolMains.length)];
    const randSide = poolSides[Math.floor(Math.random() * poolSides.length)];

    setOverrides(prev => ({
      ...prev,
      [key]: { mainId: randMain.id, sideId: randSide.id }
    }));
  };

  return (
    <div className="p-4" style={{ paddingBottom: '100px' }}>
      <div style={{ display: 'flex', borderBottom: '2px solid var(--border-color)', marginBottom: '16px' }}>
        <button 
          style={{ flex: 1, background: 'none', border: 'none', padding: '12px', fontWeight: 'bold', color: activeTab === 'today' ? 'var(--primary-dark)' : '#aaa', borderBottom: activeTab === 'today' ? '3px solid var(--primary)' : 'none' }}
          onClick={() => setActiveTab('today')}
        >
          今日のおすすめ
        </button>
        <button 
          style={{ flex: 1, background: 'none', border: 'none', padding: '12px', fontWeight: 'bold', color: activeTab === 'weekly' ? 'var(--primary-dark)' : '#aaa', borderBottom: activeTab === 'weekly' ? '3px solid var(--primary)' : 'none' }}
          onClick={() => setActiveTab('weekly')}
        >
          1週間献立
        </button>
      </div>

      {activeTab === 'today' && (
        <div>
          <div className="card" style={{ backgroundColor: '#fff3e0' }}>
            <h2 style={{ fontSize: '1.2rem', color: '#e65100', marginBottom: '8px' }}>✨ 今日のイチオシ献立</h2>
            <p className="text-sm mb-4">合計{todayMain.time + todaySide.time}分！<br/>偏食対策バッチリの組み合わせです。</p>
            
            <div className="mb-4">
              <span className="badge" style={{ backgroundColor: '#ffcc80', color: '#e65100', marginBottom: '8px' }}>メイン料理</span>
              <RecipeCard recipe={todayMain} onAddToList={addRecipeIngredients} />
            </div>
            <div>
              <span className="badge" style={{ backgroundColor: '#a5d6a7', color: '#1b5e20', marginBottom: '8px' }}>副菜</span>
              <RecipeCard recipe={todaySide} onAddToList={addRecipeIngredients} />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'weekly' && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', backgroundColor: '#fff8e1', padding: '8px', borderRadius: '8px' }}>
            <button className="btn btn-secondary" style={{ padding: '4px 8px' }} onClick={() => setWeekOffset(prev => prev - 1)}>
              <ChevronLeft size={20} />
            </button>
            <div style={{ textAlign: 'center' }}>
              <span className="text-sm font-bold">{weekOffset === 0 ? '今週の献立' : weekOffset === 1 ? '来週の献立' : `${weekOffset}週後の献立`}</span>
              <div style={{ fontSize: '0.75rem', color: '#666' }}>({viewingWeekId})</div>
            </div>
            <button className="btn btn-secondary" style={{ padding: '4px 8px' }} onClick={() => setWeekOffset(prev => prev + 1)}>
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-bold">タイプ:</span>
            <select 
              value={weekType} 
              onChange={e => setWeekType(e.target.value as any)}
              style={{ padding: '6px', borderRadius: '4px', border: '1px solid #ccc' }}
            >
              <option value="all">すべて</option>
              <option value="texture">食感NG</option>
              <option value="visual">見た目NG</option>
              <option value="taste">味覚敏感</option>
              <option value="carb_only">炭水化物のみ</option>
              <option value="protein_veg_reject">野菜・肉拒否</option>
            </select>
            <p className="text-sm text-muted" style={{ marginLeft: 'auto' }}>※自動生成</p>
          </div>

          <div className="flex-col gap-4">
            {days.map((day, idx) => {
              const { main, side } = getDayPlan(idx);
              return (
                <div key={day} className="card" style={{ position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-dark)', borderBottom: '2px solid var(--primary)', display: 'inline-block' }}>{day}曜日</h3>
                    <button 
                      onClick={() => reshuffle(idx)}
                      style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem' }}
                    >
                      <RefreshCw size={14} /> 再抽選
                    </button>
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ marginBottom: '4px' }}>
                      <span className="text-sm font-bold" style={{ color: '#e65100' }}>主菜：</span> {main.title}
                    </div>
                    <div>
                      <span className="text-sm font-bold" style={{ color: '#2e7d32' }}>副菜：</span> {side.title}
                    </div>
                  </div>
                  <button 
                    className="btn btn-secondary" 
                    style={{ width: '100%', fontSize: '0.9rem', padding: '8px' }}
                    onClick={() => {
                      addRecipeIngredients(main);
                      addRecipeIngredients(side);
                      alert(`${day}曜日の材料を買い物リストに追加しました！`);
                    }}
                  >
                    🛒 この日の材料をリストに追加
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommend;
