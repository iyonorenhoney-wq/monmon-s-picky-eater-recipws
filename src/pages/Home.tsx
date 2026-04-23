import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Clock, CheckCircle, ClipboardCheck } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/recipes';
import type { PickyType } from '../data/recipes';
import { useShoppingList } from '../context/ShoppingContext';
import { useFavorites } from '../context/FavoriteContext';

const Home: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [activeTimeFilter, setActiveTimeFilter] = useState<string | null>(null);
  const [activeTypeFilter, setActiveTypeFilter] = useState<PickyType | null>(null);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { addRecipeIngredients } = useShoppingList();
  const { savedRecipeIds } = useFavorites();

  // Handle initial filter from URL params (for diagnosis results)
  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam) {
      setActiveTypeFilter(typeParam as PickyType);
    }
  }, [searchParams]);

  // Filter recipes based on state
  const filteredRecipes = recipes.filter(recipe => {
    let timeMatch = true;
    if (activeTimeFilter === '5min') timeMatch = recipe.time <= 5;
    if (activeTimeFilter === '10min') timeMatch = recipe.time <= 10;
    if (activeTimeFilter === 'microwave') timeMatch = recipe.isMicrowaveOnly;
    if (activeTimeFilter === 'noknife') timeMatch = recipe.isNoKnife;
    if (activeTimeFilter === 'makeahead') timeMatch = recipe.isMakeAhead;

    let typeMatch = true;
    if (activeTypeFilter) {
      typeMatch = recipe.pickyTypes.includes(activeTypeFilter);
    }

    let favoriteMatch = true;
    if (showFavoritesOnly) {
      favoriteMatch = savedRecipeIds.includes(recipe.id);
    }

    return timeMatch && typeMatch && favoriteMatch;
  });

  const toggleTimeFilter = (filter: string) => {
    setActiveTimeFilter(prev => prev === filter ? null : filter);
  };

  const toggleTypeFilter = (filter: PickyType) => {
    setActiveTypeFilter(prev => prev === filter ? null : filter);
  };

  return (
    <div className="p-4" style={{ paddingBottom: '100px' }}>
      
      {/* Introduction Section */}
      <div className="card mb-4" style={{ backgroundColor: '#fff', border: '2px solid var(--primary-light)' }}>
        <div className="flex gap-4 items-center">
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0, border: '2px solid var(--primary)' }}>
            <img src="/profile.jpg" alt="monmon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.05rem', color: 'var(--primary-dark)', marginBottom: '4px' }}>偏食や癇癪に悩むママたちへ</h2>
            <p className="text-sm" style={{ lineHeight: '1.5', color: 'var(--text-main)' }}>
              栄養士の視点と実体験をもとに寄り添ったアドバイスをしています。「食べてくれない…」という毎日の悩みに、栄養士ならではのレシピと工夫で応えます。一緒に、食事タイムを楽しい時間に変えましょう！
            </p>
            <div className="flex-col gap-2 mt-3">
              <Link to="/diagnosis" className="btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none', fontWeight: 'bold', padding: '12px 0', fontSize: '0.95rem' }}>
                <ClipboardCheck size={20} />
                うちの子の偏食タイプ診断
              </Link>
              <a href="https://lin.ee/So0sSpI" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: '#06C755', display: 'block', textAlign: 'center', textDecoration: 'none', fontWeight: 'bold', padding: '10px 0', fontSize: '0.9rem', color: 'white' }}>
                個別相談はこちら（公式LINE）
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h2 style={{ fontSize: '1.2rem', color: 'var(--primary-dark)' }}>🔍 レシピを探す</h2>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: showFavoritesOnly ? 'var(--primary)' : '#666', cursor: 'pointer', fontWeight: 'bold' }}>
          <input type="checkbox" checked={showFavoritesOnly} onChange={(e) => setShowFavoritesOnly(e.target.checked)} style={{ transform: 'scale(1.2)' }} />
          ⭐ 保存済のみ
        </label>
      </div>

      {/* Filters */}
      <div className="card mb-4" style={{ backgroundColor: '#fff8e1' }}>
        <div style={{ marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Clock size={16} color="var(--primary)" />
            <span className="text-sm font-bold">時短・条件</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <button className={`btn ${activeTimeFilter === null ? '' : 'btn-secondary'}`} style={{ padding: '6px 12px', fontSize: '0.85rem' }} onClick={() => setActiveTimeFilter(null)}>すべて</button>
            <button className={`btn ${activeTimeFilter === '5min' ? '' : 'btn-secondary'}`} style={{ padding: '6px 12px', fontSize: '0.85rem' }} onClick={() => toggleTimeFilter('5min')}>5分以内</button>
            <button className={`btn ${activeTimeFilter === '10min' ? '' : 'btn-secondary'}`} style={{ padding: '6px 12px', fontSize: '0.85rem' }} onClick={() => toggleTimeFilter('10min')}>10分以内</button>
            <button className={`btn ${activeTimeFilter === 'microwave' ? '' : 'btn-secondary'}`} style={{ padding: '6px 12px', fontSize: '0.85rem' }} onClick={() => toggleTimeFilter('microwave')}>レンチンのみ</button>
            <button className={`btn ${activeTimeFilter === 'noknife' ? '' : 'btn-secondary'}`} style={{ padding: '6px 12px', fontSize: '0.85rem' }} onClick={() => toggleTimeFilter('noknife')}>包丁いらず</button>
            <button className={`btn ${activeTimeFilter === 'makeahead' ? '' : 'btn-secondary'}`} style={{ padding: '6px 12px', fontSize: '0.85rem', ...(activeTimeFilter === 'makeahead' ? { backgroundColor: '#6a1b9a', boxShadow: '0 4px 6px rgba(106,27,154,0.3)' } : { color: '#6a1b9a', borderColor: '#ce93d8' }) }} onClick={() => toggleTimeFilter('makeahead')}>🥘 作り置き</button>
          </div>
        </div>
        
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <CheckCircle size={16} color="var(--primary)" />
            <span className="text-sm font-bold">偏食タイプ</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <button className={`btn ${activeTypeFilter === null ? '' : 'btn-secondary'}`} style={{ padding: '6px 12px', fontSize: '0.85rem' }} onClick={() => setActiveTypeFilter(null)}>すべて</button>
            <button className={`btn ${activeTypeFilter === 'texture' ? '' : 'btn-secondary'}`} style={{ padding: '6px 12px', fontSize: '0.85rem' }} onClick={() => toggleTypeFilter('texture')}>食感NG</button>
            <button className={`btn ${activeTypeFilter === 'visual' ? '' : 'btn-secondary'}`} style={{ padding: '6px 12px', fontSize: '0.85rem' }} onClick={() => toggleTypeFilter('visual')}>見た目NG</button>
            <button className={`btn ${activeTypeFilter === 'taste' ? '' : 'btn-secondary'}`} style={{ padding: '6px 12px', fontSize: '0.85rem' }} onClick={() => toggleTypeFilter('taste')}>味覚敏感</button>
            <button className={`btn ${activeTypeFilter === 'carb_only' ? '' : 'btn-secondary'}`} style={{ padding: '6px 12px', fontSize: '0.85rem' }} onClick={() => toggleTypeFilter('carb_only')}>炭水化物のみ</button>
            <button className={`btn ${activeTypeFilter === 'protein_veg_reject' ? '' : 'btn-secondary'}`} style={{ padding: '6px 12px', fontSize: '0.85rem' }} onClick={() => toggleTypeFilter('protein_veg_reject')}>野菜・肉拒否</button>
          </div>
        </div>
      </div>

      <div className="mb-4 flex justify-between items-center">
        <h2 style={{ fontSize: '1.2rem' }}>🍳 見つかったレシピ ({filteredRecipes.length}件)</h2>
      </div>

      {filteredRecipes.length > 0 ? (
        <div className="flex-col gap-4">
          {filteredRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} onAddToList={addRecipeIngredients} />
          ))}
        </div>
      ) : (
        <div className="text-center p-4 text-muted card">
          条件に合うレシピが見つかりませんでした。<br/>別の条件をお試しください。
        </div>
      )}
    </div>
  );
};

export default Home;
