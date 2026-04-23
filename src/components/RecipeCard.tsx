import React, { useState } from 'react';
import { Clock, PlusCircle, ChevronDown, ChevronUp, Heart } from 'lucide-react';
import type { Recipe } from '../data/recipes';
import { useFavorites } from '../context/FavoriteContext';

interface RecipeCardProps {
  recipe: Recipe;
  onAddToList?: (recipe: Recipe) => void;
}

const typeLabels: Record<string, string> = {
  texture: '食感NG',
  visual: '見た目NG',
  taste: '味覚敏感',
  carb_only: '炭水化物のみ',
  protein_veg_reject: '野菜・肉拒否'
};

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onAddToList }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isSaved, toggleSave } = useFavorites();
  const saved = isSaved(recipe.id);

  return (
    <div className="card">
      <div 
        className="flex justify-between items-start mb-2" 
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ cursor: 'pointer' }}
      >
        <div>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '4px' }}>{recipe.title}</h3>
          <div className="flex gap-2 mb-2 flex-wrap">
            {recipe.pickyTypes.map(type => (
              <span key={type} className="badge">{typeLabels[type]}</span>
            ))}
          </div>
        </div>
        <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)' }}>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      <div className="flex gap-4 items-center mb-3 text-sm text-muted">
        <div className="flex items-center gap-1">
          <Clock size={16} />
          <span>{recipe.time}分</span>
        </div>
        {recipe.isMicrowaveOnly && <span className="badge" style={{ backgroundColor: '#e3f2fd', color: '#1976d2', borderColor: '#bbdefb', padding: '2px 8px' }}>レンジのみ</span>}
        {recipe.isNoKnife && <span className="badge" style={{ backgroundColor: '#f1f8e9', color: '#388e3c', borderColor: '#c8e6c9', padding: '2px 8px' }}>包丁不要</span>}
        {recipe.isMakeAhead && <span className="badge" style={{ backgroundColor: '#ede7f6', color: '#6a1b9a', borderColor: '#ce93d8', padding: '2px 8px' }}>🥘 作り置きOK</span>}
      </div>

      <div style={{ backgroundColor: '#fff8e1', padding: '12px', borderRadius: '8px', marginBottom: '12px' }}>
        <p className="text-sm"><strong>💡 偏食対策:</strong> {recipe.pickyPoint}</p>
      </div>

      {isExpanded && (
        <div style={{ borderTop: '1px dashed var(--border-color)', paddingTop: '12px', marginBottom: '12px', animation: 'fadeIn 0.3s' }}>
          <h4 style={{ fontSize: '1rem', color: 'var(--primary-dark)', marginBottom: '8px' }}>🛒 材料（1人分）</h4>
          <div style={{ paddingLeft: '8px', marginBottom: '12px' }}>
            <p className="text-sm" style={{ fontWeight: 'bold', color: '#555' }}>【子ども用】</p>
            <ul style={{ margin: '4px 0 8px 0', paddingLeft: '20px', fontSize: '0.9rem' }}>
              {recipe.ingredientsChild.map((ing, idx) => (
                <li key={idx}>{ing.name}：{ing.amount}</li>
              ))}
            </ul>
            
            {recipe.ingredientsAdult && recipe.ingredientsAdult.length > 0 && (
              <>
                <p className="text-sm" style={{ fontWeight: 'bold', color: '#555' }}>【大人用取り分け】</p>
                <ul style={{ margin: '4px 0 8px 0', paddingLeft: '20px', fontSize: '0.9rem' }}>
                  {recipe.ingredientsAdult.map((ing, idx) => (
                    <li key={idx}>{ing.name}：{ing.amount}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <h4 style={{ fontSize: '1rem', color: 'var(--primary-dark)', marginBottom: '8px' }}>🍳 作り方</h4>
          <ol style={{ margin: '4px 0 12px 0', paddingLeft: '20px', fontSize: '0.9rem' }}>
            {recipe.steps.map((step, idx) => (
              <li key={idx} style={{ marginBottom: '8px' }}>{step}</li>
            ))}
          </ol>

          <div style={{ backgroundColor: '#f9fbe7', padding: '12px', borderRadius: '8px', borderLeft: '4px solid #cddc39', marginBottom: '12px' }}>
            <p className="text-sm"><strong>🌟 栄養士ポイント:</strong><br />{recipe.nutritionPoint}</p>
          </div>
        </div>
      )}

      <div className="flex gap-2">
        <button 
          className={`btn ${saved ? '' : 'btn-secondary'}`} 
          style={{ flex: 1, padding: '10px 0' }} 
          onClick={(e) => {
            e.stopPropagation();
            toggleSave(recipe.id);
          }}
        >
          <Heart size={18} fill={saved ? 'currentColor' : 'none'} color={saved ? '#fff' : 'var(--primary)'} />
          {saved ? '保存済み' : '保存する'}
        </button>

        <button 
          className="btn" 
          style={{ flex: 2, padding: '10px 0' }} 
          onClick={(e) => {
            e.stopPropagation();
            onAddToList && onAddToList(recipe);
            alert('買い物リストに追加しました！');
          }}
        >
          <PlusCircle size={18} />
          買い物リストに追加
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
