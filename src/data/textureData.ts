import type { TextureTag } from './recipes';

export const textureTagLabels: Record<TextureTag, string> = {
  paste: 'ペースト状',
  thickened: 'とろみ系',
  soft: 'やわらかい',
  solid: '固形',
  crunchy: 'サクサク',
  carbs: '麺・ごはん系',
};

export const textureTagEmojis: Record<TextureTag, string> = {
  paste: '🌀',
  thickened: '💧',
  soft: '☁️',
  solid: '🍖',
  crunchy: '🥐',
  carbs: '🍜',
};

export const textureTagDescriptions: Record<TextureTag, string> = {
  paste: 'なめらか・ドロドロで、噛まなくても飲み込みやすい形状',
  thickened: 'あんかけやクリーム状のとろみで、口の中でまとまりやすい',
  soft: 'ふわふわ・しっとりした食感で、噛む力が弱くても食べやすい',
  solid: 'しっかり噛める固さ。食感を楽しみながら食べられる',
  crunchy: 'サクサク・パリパリの軽い食感。スナック感覚で食べられる',
  carbs: 'ご飯・うどん・パンなど主食タイプ。炭水化物が好きな子向け',
};

// 「この形状なら食べやすい」説明文
export const textureTagEasyToEatReasons: Record<TextureTag, string> = {
  paste: 'なめらか・ドロドロだから口の中でバラけず、飲み込みやすい',
  thickened: 'とろみがついていると食材がまとまって口の中で動かず、飲み込みやすい',
  soft: 'やわらかいから噛む力が弱くても大丈夫。ふわっと口でほぐれる',
  solid: 'しっかりした食感で噛みごたえがある。口に残る感触が少ない',
  crunchy: 'サクッと砕ける軽い食感。ねちゃっとならないから食べやすい',
  carbs: '慣れ親しんだご飯・麺の形なら食べやすい。主食でしっかりエネルギー補給',
};

export const textureTagColors: Record<TextureTag, string> = {
  paste: '#7b68ee',
  thickened: '#29b6f6',
  soft: '#66bb6a',
  solid: '#ff7043',
  crunchy: '#ffa726',
  carbs: '#8d6e63',
};

// 全テクスチャータグの配列（順序付き）
export const allTextureTags: TextureTag[] = [
  'paste',
  'thickened',
  'soft',
  'solid',
  'crunchy',
  'carbs',
];
