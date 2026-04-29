import type { Recipe } from './recipes';

export const recipes2: Recipe[] = [
  // --- 食感NGタイプ (21-25) ---
  {
    id: "tex-m-4",
    title: "とろける！大根と豚バラのトロトロうま煮",
    pickyTypes: ["texture"],
    dishType: "main",
    time: 15,
    isMicrowaveOnly: false,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "大根", amount: "30g" },
      { name: "豚バラ薄切り肉", amount: "30g" },
      { name: "水", amount: "50ml" },
      { name: "めんつゆ", amount: "小さじ1" },
      { name: "水溶き片栗粉", amount: "少々" }
    ],
    ingredientsAdult: [
      { name: "大根", amount: "100g" },
      { name: "豚バラ薄切り肉", amount: "70g" },
      { name: "水", amount: "150ml" },
      { name: "めんつゆ", amount: "大さじ1" },
      { name: "水溶き片栗粉", amount: "少々" }
    ],
    steps: [
      "大根は薄めのいちょう切りにし、レンジ(600W)で3分加熱して柔らかくしておきます。",
      "鍋で豚肉を炒め、色が変わったら大根と水、めんつゆを入れます。",
      "5分ほど煮込み、最後に水溶き片栗粉で強めのとろみをつけます。"
    ],
    nutritionPoint: "豚肉のコクが大根に染み込み、効率よくエネルギー補給ができます。",
    pickyPoint: "硬いものが苦手な子向け。片栗粉で「とろみ」をつけることで、口の中で引っかからずツルンと飲み込めます。",
    textureTags: ['soft', 'thickened']
  },
  {
    id: "tex-s-5",
    title: "ふわふわしらすボール",
    pickyTypes: ["texture"],
    dishType: "side",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "はんぺん", amount: "1/4枚" },
      { name: "しらす", amount: "小さじ1" },
      { name: "片栗粉", amount: "小さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "ポリ袋にはんぺんを入れ、外から揉んで完全になめらかに潰します。",
      "しらすと片栗粉を加えてさらに揉み込みます。",
      "小さく丸めて耐熱皿に並べ、ふんわりラップをしてレンジ(600W)で1分半加熱します。"
    ],
    nutritionPoint: "はんぺんの白身魚のタンパク質としらすのカルシウムが摂れます。",
    pickyPoint: "はんぺんのふわふわ食感だけを残しました。ザラザラ感がなく、噛む力が弱くても食べられます。",
    textureTags: ['soft']
  },
  {
    id: "tex-m-6",
    title: "シャキシャキゼロ！お好み焼き風キャベツ焼き",
    pickyTypes: ["texture", "protein_veg_reject"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "キャベツ（みじん切り・市販の千切りでも可）", amount: "ひとつかみ" },
      { name: "卵", amount: "1個" },
      { name: "小麦粉", amount: "大さじ1" },
      { name: "かつおぶし", amount: "少々" },
      { name: "お好みソース", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "キャベツは耐熱皿に入れ、ラップをしてレンジ(600W)で2分加熱し、完全にクタクタにします。",
      "ボウルでキャベツ、卵、小麦粉、かつおぶしを混ぜます。",
      "フライパンに油をひき、両面をしっかり焼きます。",
      "お好みソースを少し塗って完成です。"
    ],
    nutritionPoint: "キャベツのビタミンCや食物繊維と、卵の完全栄養食がこれ一枚で摂れます。",
    pickyPoint: "キャベツは先にレンチンして「シャキシャキ感」を完全に破壊します。ふんわり生地とソース味でペロリと食べられます。",
    textureTags: ['soft']
  },
  {
    id: "tex-s-7",
    title: "つるつる！オクラのだし浸し",
    pickyTypes: ["texture"],
    dishType: "side",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "オクラ", amount: "2本" },
      { name: "白だし（希釈済）", amount: "大さじ1" }
    ],
    ingredientsAdult: [
      { name: "オクラ", amount: "4本" },
      { name: "白だし（希釈済）", amount: "大さじ2" }
    ],
    steps: [
      "オクラは板ずりしてうぶ毛を取り、斜め薄切りにします。",
      "耐熱容器にオクラと少しの水を入れ、ラップをしてレンジ(600W)で1分加熱します。",
      "湯切りをして、白だしに浸して少し置きます。"
    ],
    nutritionPoint: "オクラのネバネバ成分（ペクチンなど）が胃腸の働きをサポートします。",
    pickyPoint: "繊維っぽい野菜が苦手でも、ネバネバの「つるん」とした食感なら飲み込みやすい子に最適です。",
    textureTags: ['thickened', 'soft']
  },
  {
    id: "tex-m-8",
    title: "パサパサしない！鮭とコーンの豆乳クリーム煮",
    pickyTypes: ["texture", "taste"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "生鮭（骨抜き）", amount: "1/2切れ" },
      { name: "コーン缶", amount: "大さじ1" },
      { name: "豆乳", amount: "50ml" },
      { name: "コンソメ", amount: "少々" },
      { name: "片栗粉", amount: "小さじ1/2" }
    ],
    ingredientsAdult: [],
    steps: [
      "骨抜きの鮭を小さく切ります。",
      "耐熱ボウルに鮭、コーン、豆乳、コンソメ、片栗粉を入れてよく混ぜます。",
      "ラップをしてレンジ(600W)で2分加熱し、すぐに全体をよくかき混ぜてとろみをなじませます。"
    ],
    nutritionPoint: "鮭のDHA・EPAと、豆乳の良質なタンパク質が脳と体の成長を助けます。",
    pickyPoint: "魚特有のパサパサ感を豆乳のクリーミーなとろみでカバーし、喉越しをよくしています。",
    textureTags: ['thickened', 'soft']
  },

  // --- 見た目NGタイプ (26-30) ---
  {
    id: "vis-m-4",
    title: "茶色で安心！ひき肉と細か〜い野菜のそぼろ丼",
    pickyTypes: ["visual", "protein_veg_reject"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: false,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "豚ひき肉または合い挽き肉", amount: "40g" },
      { name: "人参（みじん切り）", amount: "10g" },
      { name: "玉ねぎ（みじん切り）", amount: "10g" },
      { name: "しょうゆ", amount: "小さじ1" },
      { name: "砂糖", amount: "小さじ1" },
      { name: "ご飯", amount: "子供茶碗1杯" }
    ],
    ingredientsAdult: [],
    steps: [
      "人参と玉ねぎはブンブンチョッパー等で極限まで細かくします。",
      "フライパン（油なし）でひき肉と野菜を一緒に炒めます。",
      "火が通ったらしょうゆと砂糖で甘辛く味付けし、完全にお肉の色（茶色）に染めます。",
      "ご飯の上に乗せます。"
    ],
    nutritionPoint: "お肉と一緒に複数種類の野菜の栄養をご飯と一緒に摂取できます。",
    pickyPoint: "野菜の「色（赤や緑）」を醤油の色で完全に染め上げ、「ただの茶色いお肉」に見せかけます。",
    textureTags: ['carbs']
  },
  {
    id: "vis-s-5",
    title: "見た目はポテト？かぼちゃとチーズのスティック焼き",
    pickyTypes: ["visual", "taste"],
    dishType: "side",
    time: 10,
    isMicrowaveOnly: false,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "かぼちゃ", amount: "30g" },
      { name: "粉チーズ", amount: "小さじ1" },
      { name: "片栗粉", amount: "小さじ1" },
      { name: "サラダ油", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "かぼちゃは皮を切り落とし、レンジ(600W)で2分加熱して潰します。",
      "潰したかぼちゃに片栗粉と粉チーズを混ぜ、フライドポテトのような細長い形に整えます。",
      "フライパンに油をひき、表面がカリッとするまで焼きます。"
    ],
    nutritionPoint: "かぼちゃのカロテンで免疫力アップ。チーズでカルシウムも補給。",
    pickyPoint: "緑の皮を取り除き、子供が大好きな「フライドポテト」に似た形にすることで、初見の抵抗感をなくします。",
    textureTags: ['soft', 'solid']
  },
  {
    id: "vis-m-6",
    title: "真っ赤なトマトソースの「見えない」ミートボール",
    pickyTypes: ["visual", "protein_veg_reject"],
    dishType: "main",
    time: 15,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "市販のミートボール（無添加推奨）", amount: "1袋" },
      { name: "トマトピューレ", amount: "大さじ2" },
      { name: "すりおろし野菜（ベビーフード可）", amount: "大さじ1" },
      { name: "ケチャップ", amount: "小さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "小鍋またはフライパンにトマトピューレ、すりおろし野菜、ケチャップを入れて火にかけます。",
      "市販のミートボールを入れてソースとよく絡めます。",
      "ソースが赤く均一になるまで煮詰めます。"
    ],
    nutritionPoint: "手軽な市販品を活用しつつ、ソースに隠した野菜で栄養価を底上げします。",
    pickyPoint: "「混ざっているのが嫌」な子向け。ソースを真っ赤に統一して野菜の粒感を隠蔽しています。",
    textureTags: ['thickened', 'solid']
  },
  {
    id: "vis-s-7",
    title: "可愛い星形！とうもろこしのチーズおやき",
    pickyTypes: ["visual"],
    dishType: "side",
    time: 10,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "コーン缶", amount: "大さじ2" },
      { name: "ピザ用チーズ", amount: "大さじ1" },
      { name: "片栗粉", amount: "大さじ1" },
      { name: "水", amount: "大さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "ボウルにすべての材料を入れてよく混ぜます。",
      "フライパンに少し油をひき、小さな丸（または星型のクッキー型を使って）に広げて焼きます。",
      "両面がカリッとチーズが溶けるまで焼きます。"
    ],
    nutritionPoint: "とうもろこしの自然な甘みと食物繊維が摂れます。",
    pickyPoint: "「見た目の可愛さ・親しみやすさ」は重要です。色も黄色で明るく、おやつ感覚でつまめます。",
    textureTags: ['soft', 'crunchy']
  },
  {
    id: "vis-m-8",
    title: "いつものパンで！ロールサンドイッチ",
    pickyTypes: ["visual", "carb_only"],
    dishType: "main",
    time: 5,
    isMicrowaveOnly: false,
    isNoKnife: false,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "食パン（サンドイッチ用または耳を切ったもの）", amount: "1枚" },
      { name: "スライスチーズ", amount: "1枚" },
      { name: "ハムまたは薄焼き卵", amount: "1枚" }
    ],
    ingredientsAdult: [],
    steps: [
      "食パンの表面を麺棒などで少し潰して薄くします。",
      "パンの上にチーズとハム（または邪魔にならない具材）を乗せます。",
      "手前からくるくるとキャンディのように丸め、ラップでしっかり包んで少し置きます。",
      "ラップごと包丁で一口サイズに切ってからラップを外します。"
    ],
    nutritionPoint: "主食（パン）と一緒にタンパク質（チーズ・ハム）をセットで食べられます。",
    pickyPoint: "見慣れた「パン」の仲間だと認識させます。具が外から見えにくいため、噛んだら具が入っていたという作戦です。",
    textureTags: ['carbs', 'soft']
  },

  // --- 味覚敏感タイプ (31-35) ---
  {
    id: "tas-m-4",
    title: "酸味なし！鮭とほうれん草の豆乳マカロニグラタン風",
    pickyTypes: ["taste", "protein_veg_reject"],
    dishType: "main",
    time: 15,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "マカロニ（茹でたもの）", amount: "30g" },
      { name: "生鮭", amount: "1/4切れ" },
      { name: "ほうれん草（茹でて刻んだもの）", amount: "10g" },
      { name: "豆乳", amount: "大さじ3" },
      { name: "粉チーズ", amount: "小さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "耐熱皿に茹でたマカロニ、小さく切った鮭、細かく刻んだほうれん草を入れます。",
      "豆乳と粉チーズをかけます。",
      "ラップをしてレンジ(600W)で2〜3分加熱します。（鮭に火を通す）"
    ],
    nutritionPoint: "ほうれん草の鉄分と鮭のタンパク質が補給できる一皿です。",
    pickyPoint: "ほうれん草のエグみ（シュウ酸）や魚の臭みは、豆乳とチーズの「コク」でマスキングされ全く気にならなくなります。",
    textureTags: ['thickened', 'carbs']
  },
  {
    id: "tas-s-5",
    title: "苦くない！ブロッコリーの粉チーズおかか和え",
    pickyTypes: ["taste", "protein_veg_reject"],
    dishType: "side",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "冷凍ブロッコリー", amount: "2〜3房" },
      { name: "粉チーズ", amount: "小さじ1" },
      { name: "かつおぶし", amount: "少々" },
      { name: "しょうゆ", amount: "1滴" }
    ],
    ingredientsAdult: [],
    steps: [
      "冷凍ブロッコリーをレンジで規定通り加熱し、少し柔らかめに解凍します。",
      "穂先の柔らかい部分を中心に細かく刻みます。（ハサミ可）",
      "粉チーズ、かつおぶし、しょうゆ1滴をかけてよく和えます。"
    ],
    nutritionPoint: "ブロッコリーは野菜の中でも栄養価トップクラス。タンパク質と葉酸が豊富です。",
    pickyPoint: "アブラナ科特有の苦味や香りを、かつおぶしの「うま味」とチーズの「コク」のダブルパンチで打ち消します。",
    textureTags: ['soft']
  },
  {
    id: "tas-m-6",
    title: "甘口！さつまいもと鶏肉のコロコロマヨ炒め",
    pickyTypes: ["taste"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: false,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "鶏もも肉またはむね肉", amount: "30g" },
      { name: "さつまいも", amount: "30g" },
      { name: "マヨネーズ", amount: "小さじ1" },
      { name: "しょうゆ", amount: "少々" }
    ],
    ingredientsAdult: [
      { name: "鶏肉", amount: "100g" },
      { name: "さつまいも", amount: "100g" },
      { name: "マヨネーズ", amount: "大さじ1" },
      { name: "しょうゆ", amount: "小さじ1" }
    ],
    steps: [
      "さつまいもは1cm角のサイコロ状に切り、レンジで1分半加熱して柔らかくしておきます。",
      "鶏肉も同じくらいの小ささに切ります。",
      "フライパンに油の代わりにマヨネーズをひき、鶏肉とさつまいもを炒めます。",
      "火が通ったらしょうゆを少しだけ回し入れます。"
    ],
    nutritionPoint: "さつまいものビタミンCと食物繊維でお腹の調子を整えます。",
    pickyPoint: "「酸味」や「苦味」がない、さつまいもの絶対的な「甘み」を利用。マヨネーズ炒めにすることでコク増し＆マイルドになります。",
    textureTags: ['solid']
  },
  {
    id: "tas-s-7",
    title: "ヨーグルトの酸味消し！バナナきなこヨーグルト",
    pickyTypes: ["taste"],
    dishType: "side",
    time: 5,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "プレーンヨーグルト", amount: "大さじ2" },
      { name: "バナナ", amount: "1/4本" },
      { name: "きなこ", amount: "小さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "器にヨーグルトを入れます。",
      "バナナをスプーンの背などで細かく潰してヨーグルトに混ぜ込みます。",
      "上からきなこをかけます。"
    ],
    nutritionPoint: "乳酸菌、オリゴ糖（バナナ）、食物繊維が揃った最強の腸活副菜（デザート）です。",
    pickyPoint: "プレーンヨーグルトの酸っぱさが苦手な子向け。バナナの甘みときなこの香ばしさで酸味を完全に中和します。",
    textureTags: ['paste', 'soft']
  },
  {
    id: "tas-m-8",
    title: "甘くて美味しい！かぼちゃのそぼろ煮",
    pickyTypes: ["taste", "protein_veg_reject"],
    dishType: "main",
    time: 15,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "かぼちゃ", amount: "40g" },
      { name: "鶏ひき肉", amount: "20g" },
      { name: "水", amount: "大さじ2" },
      { name: "砂糖", amount: "小さじ1/2" },
      { name: "しょうゆ", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "かぼちゃは皮をなるべく削ぎ落とし、小さく切ります。",
      "耐熱ボウルにかぼちゃ、ひき肉、水、砂糖、しょうゆを入れます。",
      "ふんわりラップをしてレンジ(600W)で3分加熱します。",
      "ひき肉が固まらないように取り出してすぐ混ぜ、余熱で味を染み込ませます。"
    ],
    nutritionPoint: "かぼちゃのビタミンEと鶏肉のタンパク質で、免疫力の高い体を作ります。",
    pickyPoint: "味覚に敏感な子は「甘じょっぱい」王道の和食味が大好きです。かぼちゃの甘みに助けてもらいます。",
    textureTags: ['soft']
  },

  // --- 白ごはん・炭水化物偏食タイプ (36-40) ---
  {
    id: "car-m-3",
    title: "納豆チャーハン風！ごま油香るレンチン混ぜご飯",
    pickyTypes: ["carb_only", "protein_veg_reject"],
    dishType: "main",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "ご飯", amount: "子供茶碗1杯" },
      { name: "ひきわり納豆", amount: "半パック" },
      { name: "ごま油", amount: "少々" },
      { name: "白ごま", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "温かいご飯に、タレを混ぜていない納豆を乗せます。",
      "付属のタレの半分とごま油、白ごまをかけます。",
      "全体をよく混ぜてから、レンジ(600W)で20秒ほど加熱します。"
    ],
    nutritionPoint: "納豆は言わずと知れた健康食材。ごまとごま油で脂質エネルギーもちょい足し。",
    pickyPoint: "納豆をあえて少し加熱することで、特有の匂いやネバつきが減り、チャーハンのような香ばしさが出てご飯が進みます。",
    textureTags: ['carbs']
  },
  {
    id: "car-s-4",
    title: "マカロニきなこ",
    pickyTypes: ["carb_only"],
    dishType: "side",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "サラダマカロニ（茹でたもの）", amount: "10本" },
      { name: "きなこ", amount: "小さじ1" },
      { name: "砂糖", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "マカロニをパッケージ通りに柔らかく茹でます（多めに茹でて冷凍しておくと便利）。",
      "温かいマカロニに、きなこと砂糖を混ぜたものをまぶします。"
    ],
    nutritionPoint: "「炭水化物」に「大豆タンパク（きなこ）」をプラスする最強の手抜きテクニックです。",
    pickyPoint: "パスタやうどんなど「麺類・小麦」しか食べない子向け。きなこ餅のような感覚でペロリと食べてくれます。",
    textureTags: ['carbs', 'soft']
  },
  {
    id: "car-m-5",
    title: "おにぎり感覚！ツナとコーンの炊き込み風ご飯",
    pickyTypes: ["carb_only"],
    dishType: "main",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "ご飯", amount: "子供茶碗1杯" },
      { name: "ツナ缶", amount: "小さじ1" },
      { name: "コーン缶", amount: "小さじ1" },
      { name: "めんつゆ", amount: "数滴" },
      { name: "バター", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "温かいご飯に、水気を切ったツナとコーン、バター、めんつゆを入れます。",
      "バターが溶けるまでしっかり混ぜ合わせます。",
      "小さくおにぎりにするか、そのまま器に入れます。"
    ],
    nutritionPoint: "ご飯だけでは不足するタンパク質（ツナ）を美味しく補えます。",
    pickyPoint: "白いご飯に大好きなコーンとツナを混ぜ、バター醤油風味にすることで「美味しい炭水化物」に格上げします。",
    textureTags: ['carbs']
  },
  {
    id: "car-m-6",
    title: "栄養隠蔽！豆腐のパンケーキ",
    pickyTypes: ["carb_only", "protein_veg_reject"],
    dishType: "main",
    time: 15,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "ホットケーキミックス", amount: "大さじ3" },
      { name: "絹ごし豆腐", amount: "30g" },
      { name: "牛乳", amount: "大さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "ボウルに豆腐を入れ、泡立て器でクリーム状になるまで滑らかに混ぜます。",
      "ホットケーキミックスと牛乳を加えて粉気がなくなるまで混ぜます。",
      "フライパンで両面をきつね色になるまで焼きます。"
    ],
    nutritionPoint: "豆腐のタンパク質・カルシウム・イソフラボンを丸ごとパンケーキで摂取できます。",
    pickyPoint: "「パンしか食べない」子に絶対の威力を発揮。豆腐が入っているとは全く気づかず、モチモチ食感になります。",
    textureTags: ['soft', 'carbs']
  },
  {
    id: "car-m-7",
    title: "とろーりチーズのおかか醤油おにぎり",
    pickyTypes: ["carb_only"],
    dishType: "main",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "ご飯", amount: "子供茶碗1杯" },
      { name: "かつおぶし", amount: "少々" },
      { name: "しょうゆ", amount: "少々" },
      { name: "ピザ用チーズ", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "ご飯にかつおぶしとしょうゆを混ぜて「おかかご飯」を作ります。",
      "真ん中にチーズを入れて小さくおにぎりにします。",
      "レンジ(600W)で15〜20秒加熱し、中のチーズを溶かします。"
    ],
    nutritionPoint: "乳製品のカルシウムと良質なタンパク質がおにぎりで完結します。",
    pickyPoint: "炭水化物の中に、「チーズがビヨーンと伸びる」というエンタメ要素を入れて食べやすくします。",
    textureTags: ['carbs', 'thickened']
  },

  // --- 野菜・タンパク質拒否タイプ (41-45) ---
  {
    id: "pro-m-3",
    title: "絶対食べる！甘〜いサツマイモのとりそぼろ",
    pickyTypes: ["protein_veg_reject"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "鶏ももひき肉", amount: "30g" },
      { name: "さつまいも", amount: "20g" },
      { name: "砂糖", amount: "小さじ1" },
      { name: "しょうゆ", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "さつまいもは皮をむき、極小のサイコロ状またはみじん切りにしてレンジで1分加熱します。",
      "耐熱容器にひき肉、柔らかくなったさつまいも、砂糖、しょうゆを入れます。",
      "ラップをしてレンジ(600W)で2分加熱し、すぐにほぐして余熱で味を馴染ませます。"
    ],
    nutritionPoint: "さつまいもの自然な甘みで、お肉のパサパサ感や臭みを消し、栄養価を高めます。",
    pickyPoint: "お肉を嫌がるときは、とことん「甘口の設定」にするのがコツ。さつまいもが混ざることでホクホクのおかずになります。",
    textureTags: ['soft']
  },
  {
    id: "pro-s-4",
    title: "ジュースみたい！りんごと人参のすりおろしゼリー",
    pickyTypes: ["protein_veg_reject", "visual"],
    dishType: "side",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "100%りんごジュース", amount: "50ml" },
      { name: "すりおろし人参", amount: "小さじ1" },
      { name: "粉ゼラチン", amount: "1g" },
      { name: "お湯", amount: "大さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "お湯に粉ゼラチンをしっかり溶かします。",
      "りんごジュースにすりおろした人参を混ぜます。（気になるならレンジで少し加熱してもOK）",
      "ゼラチン液をジュースに混ぜて、冷蔵庫で冷やし固めます。"
    ],
    nutritionPoint: "緑黄色野菜（人参）のβカロテンをおやつ感覚で補給できます。",
    pickyPoint: "野菜を全く食べない子は、まずは「フルーツの味」に混ぜてしまうのが鉄則。ゼリーにすれば喜んで食べます。",
    textureTags: ['soft', 'paste']
  },
  {
    id: "pro-m-5",
    title: "隠れ身の術！ツナマヨインのだし巻き卵",
    pickyTypes: ["protein_veg_reject"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "卵", amount: "1個" },
      { name: "白だし（希釈済）", amount: "大さじ1" },
      { name: "ツナ缶", amount: "小さじ1" },
      { name: "マヨネーズ", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "ツナの水気をしっかり切り、マヨネーズと和えてツナマヨを作ります。",
      "卵を白だしとよく混ぜます。",
      "卵焼き器に卵を一重焼き、真ん中にツナマヨを乗せて巻いていきます。"
    ],
    nutritionPoint: "卵の完全栄養に、DHAとEPAが含まれるツナをプラス。最強のタンパク質源です。",
    pickyPoint: "肉や魚の食感を嫌がる子も、好きな「卵焼き」の真ん中ならツルンと食べてくれます。"
  },
  {
    id: "pro-s-6",
    title: "おにぎりに混ぜるだけ！のり塩ごまブロッコリー",
    pickyTypes: ["protein_veg_reject"],
    dishType: "side",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "冷凍ブロッコリー", amount: "1房" },
      { name: "青のり", amount: "少々" },
      { name: "白ごま", amount: "少々" },
      { name: "塩", amount: "少々" },
      { name: "ごま油", amount: "1滴" }
    ],
    ingredientsAdult: [],
    steps: [
      "ブロッコリーをレンジで解凍し、柔らかい穂先の部分だけをみじん切りにします。",
      "青のり、白ごま、塩、ごま油を少しだけ混ぜて味をしっかりつけます。",
      "ご飯に混ぜて小さなおにぎりにしてもOK。"
    ],
    nutritionPoint: "ブロッコリーは少しでも入ればビタミン類が効率よく摂れる優秀食材です。",
    pickyPoint: "「塩・ごま油・青のり」のポテトチップスのような鉄板の味付けで野菜のクセを消臭します。",
    textureTags: ['soft']
  },
  {
    id: "pro-m-7",
    title: "カリッとジューシー！鶏ひき肉のチーズ焼き",
    pickyTypes: ["protein_veg_reject", "texture"],
    dishType: "main",
    time: 15,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "鶏ひき肉", amount: "40g" },
      { name: "ピザ用チーズ", amount: "大さじ1" },
      { name: "片栗粉", amount: "小さじ1" },
      { name: "マヨネーズ", amount: "小さじ1/2" }
    ],
    ingredientsAdult: [],
    steps: [
      "ポリ袋に全ての材料を入れてよく揉み合わせます。",
      "フライパンに油を少しひき、一口大に絞り出して両面をカリッと焼きます。"
    ],
    nutritionPoint: "チーズでカルシウムを、鶏肉で良質なタンパク質を同時に摂取できます。",
    pickyPoint: "チーズの塩気とカリッとした食感で、ハンバーグよりもお肉の臭みを感じにくく食べやすいです。",
    textureTags: ['crunchy', 'solid']
  }
];
