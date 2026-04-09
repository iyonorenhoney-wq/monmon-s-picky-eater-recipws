import type { Recipe } from './recipes';

export const recipes5: Recipe[] = [
  // --- 食感NGタイプ (91-92) ---
  {
    id: "tex-m-19",
    title: "トロトロ！なすの白だし煮",
    pickyTypes: ["texture"],
    dishType: "side",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "なす", amount: "1/2本" },
      { name: "白だし", amount: "小さじ1" },
      { name: "水", amount: "大さじ2" }
    ],
    ingredientsAdult: [],
    steps: [
      "なすは皮をすべてむき、小さめの乱切りにします。",
      "耐熱容器になすと水、白だしを入れ、ふんわりラップをします。",
      "レンジ(600W)で3分加熱し、そのまま少し置いてとろみがつくまで冷まします。"
    ],
    nutritionPoint: "なすの食物繊維が胃腸を整えます。皮を剥くことで灰汁と硬さを除去します。",
    pickyPoint: "皮の「キュッ」とした食感を消すため、あえて皮を全部むき、とろとろになるまで煮込みます。"
  },
  {
    id: "tex-m-20",
    title: "つるつるうどんの野菜あんかけ",
    pickyTypes: ["texture", "protein_veg_reject"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "冷凍うどん", amount: "1/2玉" },
      { name: "ベビーフードの野菜あんかけ", amount: "1袋" }
    ],
    ingredientsAdult: [],
    steps: [
      "うどんをレンジで解凍し、キッチンバサミで1cm程度に細かく刻みます。",
      "温めたあんかけをたっぷりかけて、うどんとよく馴染ませます。"
    ],
    nutritionPoint: "手軽に多種類の野菜（あんかけ）を摂取できます。",
    pickyPoint: "うどんを小さく刻んで、あんかけの「とろみ」と一体化させることで、噛まずにツルンと食べられるようにします。"
  },

  // --- 見た目NGタイプ (93-94) ---
  {
    id: "vis-m-19",
    title: "赤い色が安心！トマトパスタ",
    pickyTypes: ["visual", "carb_only"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "早ゆでパスタ", amount: "30g" },
      { name: "トマトピューレ", amount: "大さじ2" },
      { name: "粉チーズ", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "パスタを半分に折って、柔らかめに茹でます。",
      "フライパン（または耐熱ボウル）でトマトピューレと和えます。",
      "粉チーズをかけて、全体を「赤」で統一します。"
    ],
    nutritionPoint: "トマトのリコピンと糖質エネルギーの補給に。",
    pickyPoint: "具材を一切入れず、色を「赤」だけにすることで、お子様の視覚的な不安を取り除きます。"
  },
  {
    id: "vis-m-20",
    title: "まっくろのりたまおにぎり",
    pickyTypes: ["visual", "carb_only"],
    dishType: "main",
    time: 5,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "ご飯", amount: "子供茶碗1杯" },
      { name: "のりたまふりかけ", amount: "少々" },
      { name: "大きめの海苔", amount: "1枚" }
    ],
    ingredientsAdult: [],
    steps: [
      "ご飯にふりかけを混ぜます。",
      "小さなおにぎりを作り、全体を海苔で完全に包みます。"
    ],
    nutritionPoint: "ふりかけに含まれる卵や海苔、ごまの栄養をプラス。",
    pickyPoint: "中身に何が入っていても、外側を海苔で真っ黒に包んでしまえば「いつもの海苔おにぎり」として安心して食べられます。"
  },

  // --- 味覚敏感タイプ (95-96) ---
  {
    id: "tas-m-19",
    title: "苦くない！ピーマンの甘口肉味噌和え",
    pickyTypes: ["taste", "protein_veg_reject"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "ピーマン", amount: "1/2個" },
      { name: "豚ひき肉", amount: "20g" },
      { name: "砂糖・味噌", amount: "各少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "ピーマンは細かく刻み、レンジで1分半加熱して完全に柔らかくします。",
      "ひき肉、砂糖、味噌、少しの水を混ぜてレンジで1分加熱し、肉味噌を作ります。",
      "ピーマンと肉味噌をよく和えます。"
    ],
    nutritionPoint: "豚肉のタンパク質とピーマンのビタミンを同時に。",
    pickyPoint: "濃厚な「甘辛い味噌」の味がピーマンの苦味を完全に隠してくれます。"
  },
  {
    id: "tas-m-20",
    title: "酸っぱくない！トマトのコンソメ煮",
    pickyTypes: ["taste"],
    dishType: "side",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "ミニトマト", amount: "3個" },
      { name: "コンソメスープ（希釈したもの）", amount: "50ml" }
    ],
    ingredientsAdult: [],
    steps: [
      "ミニトマトは皮を湯むき（またはレンチンむき）し、タネを取り除きます。",
      "コンソメスープでトマトを3分ほど弱火（またはレンジ）でコトコト煮ます。"
    ],
    nutritionPoint: "トマトの栄養がスープに溶け出し、全部飲み干せます。",
    pickyPoint: "トマトの酸っぱいタネを除去し、コンソメの「旨み」で煮込むことで、驚くほどまろやかになります。"
  },

  // --- 白ごはん・炭水化物偏食タイプ (97-98) ---
  {
    id: "car-m-18",
    title: "もちもち！豆腐のみたらし団子風",
    pickyTypes: ["carb_only"],
    dishType: "side",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "白玉粉", amount: "20g" },
      { name: "絹ごし豆腐", amount: "20g" },
      { name: "しょうゆ・砂糖（タレ用）", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "白玉粉と豆腐を耳たぶの硬さになるまで混ぜて丸めます。",
      "お湯で茹でて、浮き上がってきたら冷水に取ります。",
      "甘辛いタレをかけて出します。"
    ],
    nutritionPoint: "豆腐のタンパク質をスイーツ感覚で摂取できます。",
    pickyPoint: "お子様が大好きな「もちもち食感」を活かし、ご飯以外の炭水化物源を広げます。"
  },
  {
    id: "car-m-19",
    title: "きなこ＆バターのおにぎり",
    pickyTypes: ["carb_only"],
    dishType: "main",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "ご飯", amount: "子供茶碗1杯" },
      { name: "溶かしバター", amount: "少々" },
      { name: "きなこ", amount: "小さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "温かいご飯に溶かしバターときなこを混ぜます。",
      "ラップで小さくおにぎりにします。"
    ],
    nutritionPoint: "きなこのタンパク質とバターの良質な脂質を補給。",
    pickyPoint: "きなことバターの香ばしい匂いで、いつもの白ごはんがワンランク上の満足感になります。"
  },

  // --- 野菜・タンパク質拒否タイプ (99-101) ---
  {
    id: "pro-m-18",
    title: "カリカリ！ちりめんじゃことチーズの香ばし焼き",
    pickyTypes: ["protein_veg_reject"],
    dishType: "side",
    time: 5,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "ちりめんじゃこ", amount: "大さじ1" },
      { name: "ピザ用チーズ", amount: "大さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "フライパンにチーズを広げ、その上にちりめんじゃこを散らします。",
      "チーズが溶けてカリカリになるまで焼きます。"
    ],
    nutritionPoint: "カルシウムとタンパク質の塊です。",
    pickyPoint: "魚の形を「カリカリのスナック」として提供することで、抵抗感をなくします。"
  },
  {
    id: "pro-m-19",
    title: "甘ーい！とうもろこしの豆腐パンケーキ",
    pickyTypes: ["protein_veg_reject", "carb_only"],
    dishType: "main",
    time: 15,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "ホットケーキミックス", amount: "大さじ3" },
      { name: "豆腐ペースト", amount: "大さじ1" },
      { name: "コーンペースト（ベビーフード可）", amount: "大さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "材料をすべてダマがなくなるまで混ぜ合わせます。",
      "フライパンで小さく丸く焼きます。"
    ],
    nutritionPoint: "豆腐の栄養とコーンのビタミンを、大好きなパンケーキに込めて。",
    pickyPoint: "全体が黄色くなるので、コーンの存在に気づかれず、自然な甘みで食べやすくなります。"
  },
  {
    id: "pro-m-20",
    title: "隠し味！カレー風味の鶏そぼろ",
    pickyTypes: ["protein_veg_reject", "taste"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "鶏ひき肉", amount: "30g" },
      { name: "カレー粉", amount: "ごく微量" },
      { name: "砂糖・しょうゆ", amount: "各少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "耐熱容器にひき肉、調味料、水を入れ、かき混ぜます。",
      "レンジで2分加熱し、取り出してすぐによく混ぜてほぐします。"
    ],
    nutritionPoint: "鶏肉の良質なタンパク質を、スパイスの力で美味しく。",
    pickyPoint: "微量のカレー粉を使うことで、肉特有の臭みを完全に消し去ります。"
  }
];
