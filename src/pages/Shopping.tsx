
import { useShoppingList } from '../context/ShoppingContext';
import { CheckCircle2, Circle, Trash2 } from 'lucide-react';

const Shopping: React.FC = () => {
  const { items, toggleItem, clearChecked, clearAll } = useShoppingList();

  // Group by category
  const grouped = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof items>);

  return (
    <div className="p-4" style={{ paddingBottom: '100px' }}>
      <div className="flex justify-between items-center mb-4">
        <h2 style={{ fontSize: '1.2rem', color: 'var(--primary-dark)' }}>🛒 一括買い物リスト</h2>
        {items.length > 0 && (
          <button onClick={clearChecked} style={{ background: 'none', border: 'none', color: '#888', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Trash2 size={16} /> 済を削除
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="card text-center text-muted" style={{ padding: '32px 16px' }}>
          リストは空です。<br/>レシピを探して「買い物リストに追加」ボタンを押すと、ここに追加されます。
        </div>
      ) : (
        <div className="flex-col gap-4">
          {Object.keys(grouped).map(category => (
            <div key={category} className="card" style={{ padding: '12px' }}>
              <h3 style={{ fontSize: '1rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '4px', marginBottom: '8px' }}>
                {category}
              </h3>
              <div>
                {grouped[category].map(item => (
                  <div 
                    key={item.id} 
                    className="flex justify-between items-center" 
                    style={{ padding: '8px 0', borderBottom: '1px dashed #eee', cursor: 'pointer', opacity: item.checked ? 0.5 : 1 }}
                    onClick={() => toggleItem(item.id)}
                  >
                    <div className="flex items-center gap-2">
                      {item.checked ? <CheckCircle2 size={20} color="var(--primary)" /> : <Circle size={20} color="#ccc" />}
                      <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>{item.name}</span>
                    </div>
                    <span className="text-sm text-muted">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <button onClick={clearAll} className="btn btn-secondary mt-4" style={{ width: '100%' }}>
            すべてのリストをクリア
          </button>
        </div>
      )}
    </div>
  );
};

export default Shopping;
