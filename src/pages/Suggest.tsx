import React, { useState } from 'react';
import { recipes } from '../data/recipes';
import type { Recipe } from '../data/recipes';
import RecipeCard from '../components/RecipeCard';
import { useShoppingList } from '../context/ShoppingContext';

const Suggest: React.FC = () => {
  const [input, setInput] = useState('');
  const [suggestedPatterns, setSuggestedPatterns] = useState<{main: Recipe, side: Recipe}[]>([]);
  const { addRecipeIngredients } = useShoppingList();

  const handleSuggest = () => {
    if (!input.trim()) return;
    const keywords = input.split(/[,、\s]+/).filter(k => k.trim());
    
    // Score recipes based on keyword match
    const scoredRecipes = recipes.map(recipe => {
      let score = 0;
      const content = JSON.stringify(recipe).toLowerCase();
      keywords.forEach(kw => {
        if (content.includes(kw.toLowerCase())) score += 1;
      });
      return { recipe, score };
    }).filter(r => r.score > 0).sort((a, b) => b.score - a.score);

    const mains = scoredRecipes.filter(r => r.recipe.dishType === 'main');
    const sides = scoredRecipes.filter(r => r.recipe.dishType === 'side');
    
    // If no specific match, just fallback to random ones
    const fallbackMains = recipes.filter(r => r.dishType === 'main');
    const fallbackSides = recipes.filter(r => r.dishType === 'side');

    const patterns = [];
    // Pattern 1
    patterns.push({
      main: mains[0]?.recipe || fallbackMains[Math.floor(Math.random() * fallbackMains.length)],
      side: sides[0]?.recipe || fallbackSides[Math.floor(Math.random() * fallbackSides.length)]
    });
    // Pattern 2 (ensure different if possible)
    const m2 = mains[1]?.recipe || fallbackMains[Math.floor(Math.random() * fallbackMains.length)];
    const s2 = sides[1]?.recipe || fallbackSides[Math.floor(Math.random() * fallbackSides.length)];
    patterns.push({ main: m2, side: s2 });

    setSuggestedPatterns(patterns);
  };

  return (
    <div className="p-4" style={{ paddingBottom: '100px' }}>
      <h2 style={{ fontSize: '1.2rem', color: 'var(--primary-dark)', marginBottom: '12px' }}>💡 食材から献立を提案</h2>
      
      <div className="card mb-4" style={{ backgroundColor: '#fff' }}>
        <p className="text-sm mb-2 text-muted">冷蔵庫にある食材を入力してください。「偏食の子でも食べやすい献立」を提案します。</p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input 
            type="text" 
            placeholder="例：玉ねぎ、ミンチ、卵"
            value={input}
            onChange={e => setInput(e.target.value)}
            style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }}
          />
          <button className="btn" onClick={handleSuggest}>提案</button>
        </div>
      </div>

      {suggestedPatterns.length > 0 && (
        <div>
          {suggestedPatterns.map((pattern, idx) => (
            <div key={idx} className="card mb-4" style={{ border: '2px solid var(--primary-light)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--text-main)', borderBottom: '2px dashed var(--border-color)', paddingBottom: '4px' }}>
                提案パターン {idx + 1}
              </h3>
              <div className="mb-4">
                <span className="badge" style={{ backgroundColor: '#ffcc80', color: '#e65100', marginBottom: '8px' }}>メイン料理</span>
                <RecipeCard recipe={pattern.main} onAddToList={addRecipeIngredients} />
              </div>
              <div className="mb-4">
                <span className="badge" style={{ backgroundColor: '#a5d6a7', color: '#1b5e20', marginBottom: '8px' }}>副菜</span>
                <RecipeCard recipe={pattern.side} onAddToList={addRecipeIngredients} />
              </div>
              <div style={{ backgroundColor: '#fffdf7', padding: '12px', borderRadius: '8px', border: '1px solid #ffe0b2' }}>
                <strong>⏱ 時短ポイント: </strong>合計{pattern.main.time + pattern.side.time}分で完成！どちらも簡単ステップです。
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Suggest;
