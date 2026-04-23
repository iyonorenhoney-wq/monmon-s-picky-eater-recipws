import type { PickyType } from './recipes';

export interface ChildProfile {
  id: string;
  name: string; // 例: 長女、次男、はなちゃん
  mainType: PickyType;
  subType: PickyType | null;
  diagnosedAt: string; // ISO date string
}

export const typeLabels: Record<PickyType, string> = {
  texture: '食感NGタイプ',
  visual: '見た目NGタイプ',
  taste: '味覚敏感タイプ',
  carb_only: '炭水化物偏食タイプ',
  protein_veg_reject: '野菜・タンパク質拒否タイプ',
};

export const typeEmojis: Record<PickyType, string> = {
  texture: '👅',
  visual: '👀',
  taste: '👄',
  carb_only: '🍚',
  protein_veg_reject: '🥦',
};

export const typeColors: Record<PickyType, string> = {
  texture: '#ff7043',
  visual: '#7e57c2',
  taste: '#ec407a',
  carb_only: '#ffa726',
  protein_veg_reject: '#26a69a',
};

export const typeDescriptions: Record<PickyType, string> = {
  texture: 'シャキシャキ・ドロドロなど食感に敏感。とろみをつけたり、食感を均一にする工夫が◎',
  visual: '初めて見るもの・混ざった見た目に不安を感じる。色を統一して隠す工夫が有効。',
  taste: '苦味・酸味を強く感じる。甘みやコクでマスキングすると食べやすくなる。',
  carb_only: '白ごはん・麺類が大好き！炭水化物にこっそり栄養を混ぜ込む技が使えます。',
  protein_veg_reject: '野菜・お肉そのものを拒否。好きな味付けや可愛い見た目で「好き」を増やそう。',
};

// 兄弟対応: タイプが違っても共通で食べやすい料理のアレンジヒント
export const typeArrangeHints: Record<PickyType, string> = {
  texture: 'なめらか・やわらか仕上げに',
  visual: '色を統一・混ぜ込んで見えなく',
  taste: '甘み・コクをプラスして苦味をカバー',
  carb_only: 'ご飯やパンに乗せる・混ぜる丼風に',
  protein_veg_reject: '小さく切る・ソース味で包む',
};
