import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { RecipeIngredient, Recipe } from '../data/recipes';

// --- Types ---
export interface ShoppingItem extends RecipeIngredient {
  id: string; // unique string for check state
  checked: boolean;
  category: string; // '野菜', '肉・魚', '調味料', 'その他'
}

interface ShoppingContextType {
  items: ShoppingItem[];
  addRecipeIngredients: (recipe: Recipe) => void;
  toggleItem: (id: string) => void;
  clearChecked: () => void;
  clearAll: () => void;
}

const CATEGORY_MAP: Record<string, string[]> = {
  '野菜': ['人参', 'かぼちゃ', 'ピーマン', '玉ねぎ', 'トマト'],
  '肉・魚': ['ひき肉', '豚肉', '鶏', 'しらす', 'ツナ', 'ウインナー', '合い挽き'],
  '調味料': ['バター', '砂糖', 'しょうゆ', 'みりん', 'ケチャップ', 'コンソメ', 'めんつゆ', 'ごま油', '塩', 'サラダ油', 'マヨネーズ'],
  '主食類': ['ご飯', 'うどん', 'パン粉', '焼き麩'],
  '乳・卵・その他': ['チーズ', '牛乳', 'きなこ', '青のり', 'かつおぶし', '豆腐', '片栗粉']
};

function guessCategory(name: string): string {
  for (const [cat, keywords] of Object.entries(CATEGORY_MAP)) {
    if (keywords.some(k => name.includes(k))) return cat;
  }
  return 'その他';
}

const ShoppingContext = createContext<ShoppingContextType | undefined>(undefined);

export const ShoppingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<ShoppingItem[]>([]);

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem('picky_shopping_list');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('picky_shopping_list', JSON.stringify(items));
  }, [items]);

  const addRecipeIngredients = (recipe: Recipe) => {
    const newItems: ShoppingItem[] = [];
    const processIngredients = (ings: RecipeIngredient[]) => {
      ings.forEach(ing => {
        newItems.push({
          id: `${Date.now()}-${Math.random()}`,
          name: ing.name,
          amount: ing.amount,
          checked: false,
          category: guessCategory(ing.name)
        });
      });
    };
    
    processIngredients(recipe.ingredientsChild);
    if (recipe.ingredientsAdult) {
      processIngredients(recipe.ingredientsAdult);
    }

    setItems(prev => [...prev, ...newItems]);
  };

  const toggleItem = (id: string) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const clearChecked = () => {
    setItems(prev => prev.filter(item => !item.checked));
  };

  const clearAll = () => {
    // window.confirmがモバイルブラウザ等でブロックされ消えないケースがあるため外します
    setItems([]);
  };

  return (
    <ShoppingContext.Provider value={{ items, addRecipeIngredients, toggleItem, clearChecked, clearAll }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export const useShoppingList = () => {
  const context = useContext(ShoppingContext);
  if (!context) throw new Error('useShoppingList must be used within ShoppingProvider');
  return context;
};
