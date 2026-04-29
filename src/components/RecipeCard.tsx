import React, { useState } from 'react';
import { Clock, PlusCircle, ChevronDown, ChevronUp, Heart, Package, Users } from 'lucide-react';
import type { Recipe, PickyType } from '../data/recipes';
import { useFavorites } from '../context/FavoriteContext';
import { textureTagLabels, textureTagEmojis, textureTagColors } from '../data/textureData';

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

const typeArrangeColors: Record<PickyType, string> = {
  texture: '#ff7043',
  visual: '#7e57c2',
  taste: '#ec407a',
  carb_only: '#ffa726',
  protein_veg_reject: '#26a69a',
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

      <div className="flex gap-2 items-center mb-3 text-sm text-muted" style={{ flexWrap: 'wrap' }}>
        <div className="flex items-center gap-1">
          <Clock size={16} />
          <span>{recipe.time}分</span>
        </div>
        {recipe.isMicrowaveOnly && <span className="badge" style={{ backgroundColor: '#e3f2fd', color: '#1976d2', borderColor: '#bbdefb', padding: '2px 8px' }}>レンジのみ</span>}
        {recipe.isNoKnife && <span className="badge" style={{ backgroundColor: '#f1f8e9', color: '#388e3c', borderColor: '#c8e6c9', padding: '2px 8px' }}>包丁不要</span>}
        {recipe.isMakeAhead && <span className="badge" style={{ backgroundColor: '#ede7f6', color: '#6a1b9a', borderColor: '#ce93d8', padding: '2px 8px' }}>🥘 作り置きOK</span>}
        {recipe.dishCategory === 'ultraquick' && <span className="badge" style={{ backgroundColor: '#ffebee', color: '#e53935', borderColor: '#ef9a9a', padding: '2px 8px' }}>⚡ 超時短</span>}
        {recipe.dishCategory === 'family' && <span className="badge" style={{ backgroundColor: '#e0f2f1', color: '#00897b', borderColor: '#80cbc4', padding: '2px 8px' }}>👨‍👩‍👧 家族対応</span>}
      </div>

      {/* 形状タグ（機能⑮） */}
      {recipe.textureTags && recipe.textureTags.length > 0 && (
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
          {recipe.textureTags.map(tag => (
            <span key={tag} style={{
              backgroundColor: textureTagColors[tag] + '18',
              color: textureTagColors[tag],
              border: `1px solid ${textureTagColors[tag]}60`,
              borderRadius: '12px', padding: '2px 9px',
              fontSize: '0.75rem', fontWeight: 'bold'
            }}>
              {textureTagEmojis[tag]} {textureTagLabels[tag]}
            </span>
          ))}
        </div>
      )}

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

          {/* 作り置き保存情報 */}
          {recipe.storageInfo && (
            <div style={{ backgroundColor: '#f3e5f5', padding: '12px', borderRadius: '8px', borderLeft: '4px solid #9c27b0', marginBottom: '12px' }}>
              <p className="text-sm" style={{ fontWeight: 'bold', color: '#6a1b9a', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Package size={14} /> 保存情報
              </p>
              <div className="text-sm" style={{ lineHeight: '1.8' }}>
                <div>💾 保存方法：{recipe.storageInfo.method}</div>
                <div>📅 保存期間：{recipe.storageInfo.days}</div>
                <div>🔥 温め直し：{recipe.storageInfo.reheating}</div>
              </div>
            </div>
          )}

          {/* 家族対応アレンジヒント */}
          {recipe.familyArrangeHints && Object.keys(recipe.familyArrangeHints).length > 0 && (
            <div style={{ backgroundColor: '#e0f2f1', padding: '12px', borderRadius: '8px', borderLeft: '4px solid #00897b', marginBottom: '12px' }}>
              <p className="text-sm" style={{ fontWeight: 'bold', color: '#00695c', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Users size={14} /> タイプ別アレンジヒント
              </p>
              {(Object.entries(recipe.familyArrangeHints) as [PickyType, string][]).map(([type, hint]) => (
                <div key={type} style={{
                  backgroundColor: typeArrangeColors[type] + '18',
                  borderLeft: `3px solid ${typeArrangeColors[type]}`,
                  borderRadius: '0 6px 6px 0',
                  padding: '4px 8px',
                  marginBottom: '4px',
                  fontSize: '0.82rem'
                }}>
                  <strong style={{ color: typeArrangeColors[type] }}>{typeLabels[type]}：</strong>{hint}
                </div>
              ))}
            </div>
          )}
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
