export type PickyType = 'texture' | 'visual' | 'taste' | 'carb_only' | 'protein_veg_reject';
export type DishType = 'main' | 'side';

// 食べられる形状タグ
export type TextureTag =
  | 'paste'      // ペースト状（なめらか・ドロドロ）
  | 'thickened'  // とろみ系（あんかけ・クリーム系）
  | 'soft'       // やわらかい（ふわふわ・しっとり）
  | 'solid'      // 固形（しっかり噛める）
  | 'crunchy'    // サクサク（軽い食感）
  | 'carbs';     // 麺・ごはん系（主食タイプ）

export interface RecipeIngredient {
  name: string;
  amount: string;
}

export interface Recipe {
  id: string;
  title: string;
  pickyTypes: PickyType[];
  dishType: DishType;
  time: number; // in minutes
  isMicrowaveOnly: boolean;
  isNoKnife: boolean;
  isMakeAhead: boolean;
  ingredientsChild: RecipeIngredient[];
  ingredientsAdult: RecipeIngredient[]; // Empty if same as child or not separated
  steps: string[];
  nutritionPoint: string;
  pickyPoint: string;
  // 食べられる形状タグ
  textureTags?: TextureTag[];
  // 作り置き用
  storageInfo?: { method: string; days: string; reheating: string };
  // カテゴリタグ: 'ultraquick'=超時短, 'family'=家族対応
  dishCategory?: 'normal' | 'ultraquick' | 'family';
  // 家族対応レシピのアレンジヒント
  familyArrangeHints?: Partial<Record<PickyType, string>>;
}

const recipes1: Recipe[] = [
  // --- 食感NGタイプ (ドロドロ・シャキシャキ嫌い) ---
  {
    id: "tex-m-1",
    title: "サクッと食感！お麩のきなこラスク風味",
    pickyTypes: ["texture"],
    dishType: "side",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "焼き麩", amount: "10個" },
      { name: "バター", amount: "5g" },
      { name: "きなこ", amount: "小さじ1" },
      { name: "砂糖", amount: "小さじ1/2" }
    ],
    ingredientsAdult: [
      { name: "焼き麩", amount: "15個" },
      { name: "バター", amount: "10g" },
      { name: "きなこ", amount: "大さじ1" },
      { name: "砂糖", amount: "小さじ1" }
    ],
    steps: [
      "耐熱皿にバターを入れ、レンジ(600W)で10秒ほど加熱して溶かします。",
      "焼き麩を入れて、溶かしバターを全体にサッと絡めます。",
      "きなこと砂糖を混ぜ合わせ、麩にまぶします。",
      "ラップをせずにレンジで30秒〜40秒加熱し、少し冷ましてサクッとさせます。"
    ],
    nutritionPoint: "お麩は植物性タンパク質が豊富。きなこで鉄分とカルシウムも補えます。",
    pickyPoint: "ドロドロが苦手な子でも食べやすい、サクサクのラスク風食感です。",
    textureTags: ['crunchy']
  },
  {
    id: "tex-m-2",
    title: "ツルンと一口！豆腐と鶏ひき肉のレンチンつくね",
    pickyTypes: ["texture", "protein_veg_reject"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "鶏ひき肉", amount: "50g" },
      { name: "絹ごし豆腐", amount: "30g" },
      { name: "片栗粉", amount: "小さじ1" },
      { name: "しょうゆ", amount: "少々" },
      { name: "みりん", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "ポリ袋に鶏ひき肉、水気を切った豆腐、片栗粉を入れてよく揉みます。",
      "袋の端を少し切り、耐熱皿に一口大に絞り出します。",
      "ふんわりラップをしてレンジ(600W)で2分半〜3分加熱します。",
      "しょうゆとみりんをかけて完成です。"
    ],
    nutritionPoint: "豆腐を混ぜることでふわふわになり、タンパク質が美味しく摂れます。",
    pickyPoint: "パサパサのお肉が苦手でも、豆腐と片栗粉の効果でツルンと飲み込みやすいです。",
    textureTags: ['soft', 'thickened']
  },
  {
    id: "tex-m-3",
    title: "シャキシャキ回避！無限すりおろし人参ハンバーグ",
    pickyTypes: ["texture", "visual"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "合い挽き肉", amount: "50g" },
      { name: "人参のすりおろし", amount: "大さじ1" },
      { name: "パン粉", amount: "大さじ1" },
      { name: "牛乳", amount: "小さじ1" },
      { name: "ケチャップ", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "パン粉と牛乳を混ぜておきます。",
      "ボウルに合い挽き肉とすりおろした人参、水気を吸ったパン粉を入れてよく混ぜます。",
      "薄い丸型に整え、中火のフライパンで両面を焼きます。（油はひかなくてOK）",
      "ケチャップを少し添えて完成です。"
    ],
    nutritionPoint: "お肉だけでなく、野菜の栄養（ビタミンA）も一緒に摂れます。",
    pickyPoint: "野菜の食感（シャキシャキ）を完全に消すため、すりおろして混ぜ込んでいます。",
    textureTags: ['soft', 'solid']
  },
  {
    id: "tex-s-4",
    title: "カリカリ！チーズしらすせんべい",
    pickyTypes: ["texture"],
    dishType: "side",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "スライスチーズ（とろけないタイプ）", amount: "1枚" },
      { name: "しらす", amount: "ひとつまみ" }
    ],
    ingredientsAdult: [],
    steps: [
      "クッキングシートの上にスライスチーズを乗せます。",
      "チーズの上に細かく刻んだ（またはそのままの）しらすを散らします。",
      "レンジ(600W)でラップをせずに1分半〜2分加熱します。",
      "冷めるとカリカリになるので、一口大に割って出します。"
    ],
    nutritionPoint: "カルシウム満点でおやつ感覚で栄養補給できます。",
    pickyPoint: "ねちゃっとした食感が苦手な子も、スナック感覚のパリパリ食感なら食べられます。",
    textureTags: ['crunchy']
  },

  // --- 見た目NGタイプ (色・混ざり・初見拒否) ---
  {
    id: "vis-m-1",
    title: "隠し野菜の「黄金」コーンポタージュスープ",
    pickyTypes: ["visual", "protein_veg_reject"],
    dishType: "side",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "コーンクリーム缶", amount: "大さじ3" },
      { name: "牛乳または豆乳", amount: "50ml" },
      { name: "かぼちゃペースト（ベビーフード可）", amount: "小さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "マグカップにコーンクリームと牛乳を入れます。",
      "かぼちゃペーストを混ぜて完全に溶かします。（緑黄色野菜を隠す）",
      "レンジ(600W)で1分加熱して完成です。"
    ],
    nutritionPoint: "かぼちゃのカロテンやコーンの食物繊維が摂取できます。",
    pickyPoint: "「緑色」の警戒心を解くため、黄色（黄金色）に統一！野菜が混ざっているとは気づきません。",
    textureTags: ['paste', 'thickened']
  },
  {
    id: "vis-m-2",
    title: "絶対ばれない！まっしろシチューうどん",
    pickyTypes: ["visual", "taste", "carb_only"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "ゆでうどん", amount: "半玉" },
      { name: "牛乳", amount: "100ml" },
      { name: "顆粒コンソメ", amount: "少々" },
      { name: "粉チーズ", amount: "小さじ1" },
      { name: "ツナ缶（水煮）", amount: "小さじ2" }
    ],
    ingredientsAdult: [],
    steps: [
      "うどんは短く切ります。",
      "耐熱ボウルにうどん、牛乳、コンソメ、水気を切ったツナを入れます。",
      "レンジ(600W)で2分加熱します。",
      "粉チーズを混ぜてとろみをつけて完成です。"
    ],
    nutritionPoint: "ツナのタンパク質と牛乳のカルシウムが1皿で完結します。",
    pickyPoint: "色が混ざるのを嫌がる子向け。全体を「白」で統一し、警戒心を下げています。",
    textureTags: ['thickened', 'carbs']
  },
  {
    id: "vis-m-3",
    title: "いつものケチャップ味！ウインナーとツヤツヤご飯",
    pickyTypes: ["visual", "carb_only"],
    dishType: "main",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "ご飯", amount: "子供茶碗1杯" },
      { name: "子ども用無塩せきウインナー", amount: "1本" },
      { name: "ケチャップ", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "ウインナーは薄い輪切りにしてから、耐熱容器で20秒レンチンするか、サッと茹でます。",
      "ご飯の上にウインナーを「顔」のように可愛く並べます。",
      "ケチャップを少しだけ添えます。"
    ],
    nutritionPoint: "無塩せきウインナーを選ぶことで添加物を抑えられます。",
    pickyPoint: "「知ってるものしか食べない」子には、見慣れた食材（白ごはん＋ウインナー）で安心させます。",
    textureTags: ['carbs', 'solid']
  },

  // --- 味覚敏感タイプ (苦味・酸味NG) ---
  {
    id: "tas-m-1",
    title: "甘み引き立つ！玉ねぎと豚肉のりんごすりおろし炒め",
    pickyTypes: ["taste", "protein_veg_reject"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "豚こま切れ肉", amount: "30g" },
      { name: "玉ねぎのすりおろし", amount: "大さじ1" },
      { name: "りんごのすりおろし", amount: "大さじ1" },
      { name: "しょうゆ", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "豚肉は小さくキッチンバサミで切ります。",
      "フライパンに豚肉を入れ、すりおろした玉ねぎとりんごを乗せて火にかけます。",
      "全体に火が通ったら、しょうゆを少し垂らして味をなじませます。"
    ],
    nutritionPoint: "豚肉のビタミンB群で疲労回復。玉ねぎの血液サラサラ成分も摂れます。",
    pickyPoint: "玉ねぎの辛味や苦味を、りんごの自然な甘みで完全にコーティングし、フルーティにして食べやすくします。",
    textureTags: ['soft']
  },
  {
    id: "tas-m-2",
    title: "酸っぱくない！まろやかトマトのチーズリゾット風",
    pickyTypes: ["taste", "carb_only"],
    dishType: "main",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "ご飯", amount: "子供茶碗1杯" },
      { name: "トマトピューレ", amount: "大さじ1" },
      { name: "牛乳", amount: "大さじ2" },
      { name: "ピザ用チーズ", amount: "ひとつまみ" }
    ],
    ingredientsAdult: [],
    steps: [
      "耐熱皿にご飯、トマトピューレ、牛乳を入れて混ぜます。",
      "チーズを乗せ、ラップをしてレンジ(600W)で1分半加熱します。",
      "よく混ぜて少し冷ましてから出します。"
    ],
    nutritionPoint: "トマトのリコピンとチーズのカルシウムで風邪予防・骨の成長をサポート。",
    pickyPoint: "トマトの「酸味」が苦手な子のため、牛乳とチーズでとことんまろやかにして酸味を消しています。",
    textureTags: ['thickened', 'carbs']
  },
  {
    id: "tas-s-3",
    title: "苦くない！ピーマンのツナマヨ和え",
    pickyTypes: ["taste", "protein_veg_reject"],
    dishType: "side",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "ピーマン", amount: "1/4個" },
      { name: "水煮ツナ", amount: "小さじ1" },
      { name: "マヨネーズ", amount: "小さじ1" },
      { name: "かつおぶし", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "ピーマンは千切りにして（ハサミ可）、耐熱皿でラップをして1分加熱し完全にくたくたにします。",
      "水気をぎゅっと絞り、ツナ、マヨネーズ、かつおぶしと和えます。"
    ],
    nutritionPoint: "ピーマンのビタミンCは加熱しても壊れにくいのが特徴です。",
    pickyPoint: "ピーマンの苦味は「油脂（マヨネーズ）」「旨み（ツナ・かつおぶし）」でマスキングすると格段に食べやすくなります。",
    textureTags: ['soft']
  },

  // --- 白ごはん・炭水化物偏食タイプ ---
  {
    id: "car-m-1",
    title: "バレずに栄養満点！きなこ＆しらすのおにぎり",
    pickyTypes: ["carb_only", "visual"],
    dishType: "main",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "ご飯", amount: "子供茶碗1杯" },
      { name: "しらす", amount: "小さじ1" },
      { name: "きなこ", amount: "小さじ1/2" },
      { name: "ごま油", amount: "1滴" }
    ],
    ingredientsAdult: [],
    steps: [
      "しらすはお湯をかけて塩抜きするか、レンジで10秒加熱します。",
      "ご飯に、しらす、きなこ、ごま油を少しだけ混ぜます。",
      "ラップを使って小さく、一口サイズに握ります。"
    ],
    nutritionPoint: "タンパク質とカルシウムをご飯にこっそり追加できます。",
    pickyPoint: "ご飯しか食べない子に。きなこが意外にもご飯に合い、ほんのり甘く風味が出ます。色はごまかせます。",
    textureTags: ['carbs']
  },
  {
    id: "car-m-2",
    title: "麺好きに！大豆ミート（又はひき肉）の甘辛うどん",
    pickyTypes: ["carb_only", "protein_veg_reject"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "ゆでうどん", amount: "半玉" },
      { name: "豚ひき肉", amount: "20g" },
      { name: "水", amount: "大さじ1" },
      { name: "めんつゆ（希釈済）", amount: "小さじ1" },
      { name: "砂糖", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "うどんは短く切ります。",
      "耐熱ボウルにひき肉、水、めんつゆ、砂糖を入れてかき混ぜます。",
      "うどんを入れ、ラップをしてレンジ(600W)で2分加熱します。",
      "ひき肉が固まらないように、加熱後すぐによく混ぜてほぐします。"
    ],
    nutritionPoint: "エネルギー源（うどん）と一緒にタンパク質（ひき肉）がスムーズに摂れます。",
    pickyPoint: "「麺」なら食べる子に、甘辛い味付けのお肉を絡めてずるっと食べさせます。",
    textureTags: ['carbs']
  },

  // --- 野菜・タンパク質拒否タイプ ---
  {
    id: "pro-m-1",
    title: "魔法の粉がけ！のり塩ポテト風ささみ唐揚げ",
    pickyTypes: ["protein_veg_reject"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: false,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "鶏ささみ", amount: "1/2本" },
      { name: "片栗粉", amount: "大さじ1" },
      { name: "青のり", amount: "少々" },
      { name: "塩", amount: "少々" },
      { name: "サラダ油", amount: "大さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "ささみは筋を取り、キッチンバサミで1cm角ほどのコロコロサイズに切ります。",
      "ポリ袋にささみ、片栗粉を入れシャカシャカ振ります。",
      "フライパンに油をひき、揚げ焼きにします。",
      "仕上げに青のりと少々の塩を振ります。"
    ],
    nutritionPoint: "高タンパク・低脂質のささみで良質な筋肉を作ります。",
    pickyPoint: "お肉を嫌がる子でも、「ポテトフライかな？」と思わせるコロコロサイズ＋のり塩味でパクパク食べます。",
    textureTags: ['crunchy', 'solid']
  },
  {
    id: "pro-s-2",
    title: "まるでスイーツ！かぼちゃとクリームチーズの茶巾",
    pickyTypes: ["protein_veg_reject", "taste"],
    dishType: "side",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "かぼちゃ（皮なし）", amount: "30g" },
      { name: "クリームチーズ", amount: "小さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "かぼちゃは小さく切り、レンジ(600W)で2分ほど加熱して柔らかくします。",
      "フォークでかぼちゃを潰し、熱いうちにクリームチーズを混ぜます。",
      "ラップに包んで茶巾絞りのように丸く可愛く形を整えます。"
    ],
    nutritionPoint: "緑黄色野菜の栄養と、チーズのタンパク質が摂れる優秀なデザート風おかずです。",
    pickyPoint: "野菜の青臭さがなく、甘くてまろやかなのでスイーツ感覚で食べられます。",
    textureTags: ['paste', 'soft']
  }
];

import { recipes2 } from './recipes_part2';
import { recipes3 } from './recipes_part3';
import { recipes4 } from './recipes_part4';
import { recipes5 } from './recipes_part5';
import { recipes6 } from './recipes_part6';
import { recipes7, recipes8 } from './recipes_part7';

export const recipes: Recipe[] = [...recipes1, ...recipes2, ...recipes3, ...recipes4, ...recipes5, ...recipes6, ...recipes7, ...recipes8];
