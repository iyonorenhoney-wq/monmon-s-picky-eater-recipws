import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface FavoriteContextType {
  savedRecipeIds: string[];
  toggleSave: (recipeId: string) => void;
  isSaved: (recipeId: string) => boolean;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoriteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [savedRecipeIds, setSavedRecipeIds] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('picky_favorites');
    if (saved) {
      try {
        setSavedRecipeIds(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('picky_favorites', JSON.stringify(savedRecipeIds));
  }, [savedRecipeIds]);

  const toggleSave = (recipeId: string) => {
    setSavedRecipeIds(prev => 
      prev.includes(recipeId) 
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  const isSaved = (recipeId: string) => savedRecipeIds.includes(recipeId);

  return (
    <FavoriteContext.Provider value={{ savedRecipeIds, toggleSave, isSaved }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) throw new Error('useFavorites must be used within FavoriteProvider');
  return context;
};
