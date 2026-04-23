import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ChildProfile } from '../data/childrenData';

interface ChildrenContextType {
  children: ChildProfile[];
  addChild: (child: Omit<ChildProfile, 'id'>) => ChildProfile;
  removeChild: (id: string) => void;
  updateChild: (id: string, updates: Partial<ChildProfile>) => void;
}

const ChildrenContext = createContext<ChildrenContextType | undefined>(undefined);

const STORAGE_KEY = 'picky_children';

export const ChildrenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profiles, setProfiles] = useState<ChildProfile[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
  }, [profiles]);

  const addChild = (child: Omit<ChildProfile, 'id'>): ChildProfile => {
    const newChild: ChildProfile = { ...child, id: `child_${Date.now()}` };
    setProfiles(prev => [...prev, newChild]);
    return newChild;
  };

  const removeChild = (id: string) => {
    setProfiles(prev => prev.filter(c => c.id !== id));
  };

  const updateChild = (id: string, updates: Partial<ChildProfile>) => {
    setProfiles(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
  };

  return (
    <ChildrenContext.Provider value={{ children: profiles, addChild, removeChild, updateChild }}>
      {children}
    </ChildrenContext.Provider>
  );
};

export const useChildren = () => {
  const ctx = useContext(ChildrenContext);
  if (!ctx) throw new Error('useChildren must be used inside ChildrenProvider');
  return ctx;
};
