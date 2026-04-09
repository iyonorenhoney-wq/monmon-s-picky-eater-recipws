import type { Recipe } from './recipes';

export const recipes3: Recipe[] = [
  // --- 食感NGタイプ (46-50) ---
  {
    id: "tex-m-9",
    title: "シャキ感ゼロ！すりおろし玉ねぎの生姜焼き風",
    pickyTypes: ["texture"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "豚こま肉（細かく切る）", amount: "40g" },
      { name: "すりおろし玉ねぎ", amount: "大さじ1" },
      { name: "すりおろし生姜（少量）", amount: "少々" },
      { name: "しょうゆ", amount: "小さじ1/2" },
      { name: "みりん", amount: "小さじ1/2" }
    ],
    ingredientsAdult: [],
    steps: [
      "フライパンに油をひき、細かくした豚肉を炒めます。",
      "すりおろした玉ねぎと生姜、調味料を入れ、お肉にしっかり絡めます。",
      "汁気がなくなるまで炒めて、お肉を柔らかく仕上げます。"
    ],
    nutritionPoint: "豚肉のビタミンB群と玉ねぎのアリシンが結びつき、疲労を回復させます。",
    pickyPoint: "玉ねぎの「シャキシャキ」を完全に消し、お肉の旨みソースとして使います。"
  },
  {
    id: "tex-s-10",
    title: "とろーりカニカマと絹ごし豆腐の白だしあんかけ",
    pickyTypes: ["texture"],
    dishType: "side",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "絹ごし豆腐", amount: "40g" },
      { name: "カニカマ", amount: "1/2本" },
      { name: "白だし", amount: "小さじ1" },
      { name: "水", amount: "大さじ2" },
      { name: "水溶き片栗粉", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "耐熱皿に豆腐を入れ、その上に手で細かく割いたカニカマを乗せます。",
      "白だしと水をかけ、レンジ(600W)で1分加熱します。",
      "熱いうちに水溶き片栗粉を加え、素早く混ぜてとろみをつけます。"
    ],
    nutritionPoint: "豆腐の良質な植物性タンパク質。カニカマで風味と彩りを加えます。",
    pickyPoint: "噛まずに飲めるレベルの「とろとろ・ツルン」とした食感。引っかかりが一切ありません。"
  },
  {
    id: "tex-m-11",
    title: "パサつき防止！さわらの野菜あんかけ",
    pickyTypes: ["texture", "protein_veg_reject"],
    dishType: "main",
    time: 15,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "さわら（骨なし）", amount: "1/2切れ" },
      { name: "にんじん（極小みじん切り）", amount: "少々" },
      { name: "だし汁", amount: "大さじ2" },
      { name: "しょうゆ", amount: "1滴" },
      { name: "片栗粉", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "にんじんはレンジで2分加熱して極限まで柔らかくします。",
      "さわらを耐熱皿に乗せ、だし汁、しょうゆ、にんじんを加えてレンジ(600W)で2分加熱します。",
      "最後に片栗粉でとろみをつけ、魚の身をほぐしながらあんかけと絡めます。"
    ],
    nutritionPoint: "さわらのDHA・EPAを摂取。あんかけに極小野菜を潜ませています。",
    pickyPoint: "魚のパサパサ感をとろみで完全カバー。野菜の粒感もあんかけの「とろみ」でごまかせます。"
  },
  {
    id: "tex-s-12",
    title: "なめらかマッシュポテト",
    pickyTypes: ["texture"],
    dishType: "side",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "じゃがいも", amount: "1/4個" },
      { name: "牛乳", amount: "大さじ1" },
      { name: "バター", amount: "少々" },
      { name: "塩", amount: "ごく少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "じゃがいもの皮をむき、小さく切ってレンジ(600W)で2分半加熱します。",
      "熱いうちにマッシャーやフォークで完全にダマがなくなるまで潰します。",
      "牛乳とバターを加え、なめらかになるまでよく練ります。"
    ],
    nutritionPoint: "じゃがいものビタミンCは熱に強く、しっかり摂取できます。",
    pickyPoint: "芋類の「ホクホク」「モサモサ」が苦手な子も、牛乳とバターでクリーミーにすれば食べやすくなります。"
  },
  {
    id: "tex-m-13",
    title: "コロコロ柔らか！高野豆腐のそぼろ煮",
    pickyTypes: ["texture"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "粉末高野豆腐（またはすりおろしたもの）", amount: "大さじ1" },
      { name: "鶏ひき肉", amount: "10g" },
      { name: "だし汁", amount: "大さじ3" },
      { name: "砂糖・しょうゆ", amount: "各少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "耐熱ボウルに全ての材料を入れ、かき混ぜます。",
      "ラップをしてレンジ(600W)で2分加熱します。",
      "全体をよく混ぜ合わせ、高野豆腐にしっかりだし汁を吸わせます。"
    ],
    nutritionPoint: "高野豆腐は鉄分とカルシウムの宝庫！隠れたスーパーフードです。",
    pickyPoint: "スポンジ状の食感を粉末にすることで消し、お出汁を吸った美味しいそぼろに変身させます。"
  },

  // --- 見た目NGタイプ (51-55) ---
  {
    id: "vis-m-9",
    title: "見た目はただの卵焼き！実はほうれん草入り",
    pickyTypes: ["visual", "protein_veg_reject"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "卵", amount: "1個" },
      { name: "ほうれん草ペースト（ベビーフード）", amount: "小さじ1" },
      { name: "砂糖または白だし", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "卵を割り、ほうれん草ペーストを完全に溶けるまでよく混ぜ合わせます。",
      "卵焼き器で、普通の卵焼きと同じように巻いて焼きます。"
    ],
    nutritionPoint: "卵のタンパク質に、ほうれん草の鉄分をプラス。",
    pickyPoint: "緑の粒々が見えないように「ペースト」を使うのがコツ。緑色の卵焼きになりますが、「抹茶味の卵だよ」などと伝えると意外と食べます、あるいはケチャップで赤く隠します。"
  },
  {
    id: "vis-s-10",
    title: "完全に隠れる！のり塩ポテトフライ",
    pickyTypes: ["visual"],
    dishType: "side",
    time: 10,
    isMicrowaveOnly: false,
    isNoKnife: false,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "じゃがいも", amount: "1/4個" },
      { name: "青のり", amount: "多め" },
      { name: "塩", amount: "少々" },
      { name: "油", amount: "大さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "じゃがいもをフライドポテト用に細長く切り、レンジで1分加熱します。",
      "フライパンに油をひき、じゃがいもをカリッと焼きます。",
      "全体が緑色になるくらい、たっぷりの青のりと塩を絡めます。"
    ],
    nutritionPoint: "じゃがいもエネルギーと、青のりのミネラル成分を摂取。",
    pickyPoint: "「焼き色」や「焦げ目」を警戒する子向け。青のりで全体をコーティングして見えなくしてしまいます。"
  },
  {
    id: "vis-m-11",
    title: "ケチャップで真っ赤！チキンマカロニ",
    pickyTypes: ["visual", "taste"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "サラダマカロニ（茹で済）", amount: "30g" },
      { name: "サラダチキン（無添加ほぐし）", amount: "10g" },
      { name: "ケチャップ", amount: "大さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "耐熱皿に茹でたマカロニと、細かくほぐしたサラダチキンを入れます。",
      "ケチャップをたっぷり絡め、レンジで30秒加熱します。（酸味を飛ばす）"
    ],
    nutritionPoint: "脂肪分の少ない鶏胸肉と、炭水化物を一度に摂れるエネルギー食です。",
    pickyPoint: "全体の色を「赤（ケチャップ）」に統一。チキンもマカロニと同化して見分けがつかなくなります。"
  },
  {
    id: "vis-s-12",
    title: "可愛い型抜き！にんじんグラッセ",
    pickyTypes: ["visual"],
    dishType: "side",
    time: 15,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "にんじん", amount: "20g" },
      { name: "バター", amount: "少々" },
      { name: "砂糖", amount: "小さじ1/2" }
    ],
    ingredientsAdult: [],
    steps: [
      "にんじんを輪切りにし、可愛いクッキー型（お花や星など）で抜きます。",
      "耐熱容器ににんじん、かぶるくらいの水、砂糖、バターを入れます。",
      "ラップをしてレンジ(600W)で3分〜4分、指で潰せるほど柔らかく加熱します。"
    ],
    nutritionPoint: "にんじんのβカロテン。油（バター）と一緒に摂ることで吸収率が上がります。",
    pickyPoint: "見た目の可愛さを極限まで高めるアプローチ。型抜きを手伝わせるとさらに食べる確率が上がります。"
  },
  {
    id: "vis-m-13",
    title: "お肉を隠せ！餃子の皮ピザ",
    pickyTypes: ["visual", "protein_veg_reject"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "餃子の皮", amount: "2〜3枚" },
      { name: "ケチャップ", amount: "少々" },
      { name: "ツナまたは豚ひき肉", amount: "10g" },
      { name: "とろけるチーズ", amount: "たっぷり" }
    ],
    ingredientsAdult: [],
    steps: [
      "餃子の皮にケチャップを塗ります。",
      "お肉やツナを薄く平らに乗せます。",
      "その上から、具材が一切見えなくなるまでチーズを乗せます。",
      "トースターまたはフライパンでチーズが溶けるまで焼きます。"
    ],
    nutritionPoint: "チーズのカルシウムとお肉のタンパク質を一緒に摂れます。",
    pickyPoint: "下にある具材をチーズで完全に見えなくする作戦。「ただのチーズピザだ」と油断させます。"
  },

  // --- 味覚敏感タイプ (56-60) ---
  {
    id: "tas-m-9",
    title: "苦くない！ピーマンとツナの塩こんぶ炒め",
    pickyTypes: ["taste", "protein_veg_reject"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "ピーマン", amount: "1/4個" },
      { name: "ツナ缶", amount: "大さじ1" },
      { name: "塩こんぶ", amount: "少々" },
      { name: "ごま油", amount: "数滴" }
    ],
    ingredientsAdult: [],
    steps: [
      "ピーマンは千切りにして、レンジで1分加熱して完全にくたくたにします。",
      "耐熱ボウルに水気を切ったピーマン、ツナ、刻んだ塩こんぶ、ごま油を入れ混ぜます。",
      "味がなじむまで数分置きます。"
    ],
    nutritionPoint: "ツナのDHA、塩昆布のミネラル、ピーマンのビタミン。",
    pickyPoint: "「塩こんぶの旨み」と「ごま油の香り」がピーマンの苦味を完全に上書きします。"
  },
  {
    id: "tas-s-10",
    title: "酸っぱくない！トマトのハチミツ（※1歳半〜）マリネ風",
    pickyTypes: ["taste"],
    dishType: "side",
    time: 5,
    isMicrowaveOnly: false,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "ミニトマト", amount: "2個" },
      { name: "はちみつ（又はオリゴ糖・砂糖）", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "ミニトマトは1/4に切り、種とドロッとした部分を取り除きます。（酸味の元）",
      "はちみつ（またはシロップ）をほんの少し混ぜて甘くします。"
    ],
    nutritionPoint: "トマトのリコピン。1歳未満には絶対にはちみつを与えず、砂糖やオリゴ糖を使用してください。",
    pickyPoint: "トマトの酸味の大半は「タネとその周りのゼリー状」の部分にあります。これを取り除き、甘みを足すことで克服させます。"
  },
  {
    id: "tas-m-11",
    title: "鮭の匂い消し！コーンフレーク焼き",
    pickyTypes: ["taste", "texture"],
    dishType: "main",
    time: 15,
    isMicrowaveOnly: false,
    isNoKnife: false,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "生鮭", amount: "1/2切れ" },
      { name: "プレーンコーンフレーク（砂糖なし）", amount: "大さじ2" },
      { name: "マヨネーズ", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "鮭を一口大に切り、表面にマヨネーズを薄く塗ります。",
      "細かく砕いたコーンフレークを衣のようにつけます。",
      "トースターまたはオーブンで、中まで火が通り衣がカリッとするまで焼きます。"
    ],
    nutritionPoint: "鮭のアスタキサンチンとタンパク質。揚げずに衣をつけるヘルシー調理です。",
    pickyPoint: "魚の生臭さをマヨネーズで消し、スナックのようなコーンフレークの香ばしさで味覚を誤魔化します。"
  },
  {
    id: "tas-s-12",
    title: "甘くて食べやすい！にんじんとリンゴのサラダ",
    pickyTypes: ["taste"],
    dishType: "side",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "にんじん", amount: "10g" },
      { name: "リンゴ", amount: "10g" },
      { name: "プレーンヨーグルト", amount: "小さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "にんじんは千切りにしてレンジで1分加熱し、柔らかくします。",
      "リンゴも千切りにします。",
      "にんじんとリンゴをヨーグルトで和えます。"
    ],
    nutritionPoint: "リンゴの食物繊維とビタミンC、ヨーグルトの乳酸菌でお腹スッキリ。",
    pickyPoint: "にんじん特有の土臭さを、リンゴの爽やかな甘さで完全に消臭。デザートのように食べられます。"
  },
  {
    id: "tas-m-13",
    title: "苦くない白身魚！タラのバター醤油焼き",
    pickyTypes: ["taste"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: false,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "タラ（骨なし）", amount: "1/2切れ" },
      { name: "小麦粉", amount: "少々" },
      { name: "バター", amount: "少々" },
      { name: "しょうゆ", amount: "数滴" }
    ],
    ingredientsAdult: [],
    steps: [
      "タラに薄く小麦粉をまぶします。",
      "フライパンでバターを溶かし、タラを両面しっかり焼きます。",
      "火が通ったら、しょうゆを数滴垂らして香りをつけます。"
    ],
    nutritionPoint: "脂肪分が少なく消化に良い白身魚の良質なタンパク質。",
    pickyPoint: "白身魚の「味のなさ・水っぽさ」をバターのコクと醤油の香ばしさでしっかりカバーします。"
  },

  // --- 白ごはん・炭水化物偏食タイプ (61-65) ---
  {
    id: "car-m-8",
    title: "うどんでグラタン！？",
    pickyTypes: ["carb_only", "protein_veg_reject"],
    dishType: "main",
    time: 15,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "ゆでうどん", amount: "半玉" },
      { name: "市販のホワイトソース（ベビー用可）", amount: "大さじ2" },
      { name: "ツナ", amount: "小さじ1" },
      { name: "ピザ用チーズ", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "うどんは短く切り、耐熱皿に入れます。",
      "ツナとホワイトソースをうどんに絡めます。",
      "チーズを乗せ、トースターで焦げ目がつくまで焼きます。"
    ],
    nutritionPoint: "乳製品を使ったホワイトソースでカルシウムと脂質エネルギーを確保。",
    pickyPoint: "マカロニの代わりに「絶対に食べる」大好きなうどんを使用。洋風の味付けでも抵抗なく食べます。"
  },
  {
    id: "car-s-9",
    title: "じゃがいもと青のりのおやき",
    pickyTypes: ["carb_only"],
    dishType: "side",
    time: 15,
    isMicrowaveOnly: false,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "じゃがいも", amount: "1/2個" },
      { name: "片栗粉", amount: "大さじ1" },
      { name: "青のり", amount: "少々" },
      { name: "塩", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "じゃがいもはレンジで柔らかくして潰します。",
      "片栗粉、青のり、塩を混ぜてこねます。",
      "小さく丸めて平らにし、フライパンで両面を焼きます。"
    ],
    nutritionPoint: "じゃがいもは炭水化物とビタミンCが同時に摂れる主食代わりの野菜です。",
    pickyPoint: "もちもちした炭水化物（芋＋片栗粉）の食感がご飯好きにはたまりません。"
  },
  {
    id: "car-m-10",
    title: "ご飯がすすむ！ひき肉の甘辛そぼろ",
    pickyTypes: ["carb_only", "taste"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "豚ひき肉", amount: "40g" },
      { name: "砂糖", amount: "小さじ1" },
      { name: "しょうゆ", amount: "小さじ1" },
      { name: "水", amount: "大さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "耐熱ボウルに全ての材料をいれて軽く混ぜます。",
      "レンジ(600W)で1分加熱し、取り出してよくかき混ぜて肉をほぐします。",
      "さらに1分加熱し、汁気が少なくなるまで混ぜます。",
      "白ごはんの上にたっぷりかけます。"
    ],
    nutritionPoint: "白ご飯への「タンパク質の乗せ技」。豚肉のビタミンB群が摂取できます。",
    pickyPoint: "「白ごはん」の魅力を最大限に引き立てる、子供が大好きな甘辛味です。"
  },
  {
    id: "car-s-11",
    title: "きなこトースト",
    pickyTypes: ["carb_only"],
    dishType: "side",
    time: 5,
    isMicrowaveOnly: false,
    isNoKnife: false,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "食パン", amount: "1枚" },
      { name: "バター", amount: "少々" },
      { name: "きなこ", amount: "大さじ1" },
      { name: "砂糖", amount: "小さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "食パンにバターを塗り、トースターで焼きます。",
      "きなこと砂糖を混ぜたものを、焼き上がったパンの上にたっぷりかけます。",
      "スティック状に食べやすく切ります。"
    ],
    nutritionPoint: "パンの糖質に、大豆のタンパク質・鉄分・食物繊維がプラスされます。",
    pickyPoint: "パンしか食べない子への栄養ちょい足し。「甘くて美味しいおやつ」として認識させます。"
  },
  {
    id: "car-m-12",
    title: "もちもち！納豆チーズ焼き",
    pickyTypes: ["carb_only", "protein_veg_reject"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "ひきわり納豆", amount: "1パック" },
      { name: "片栗粉", amount: "大さじ1" },
      { name: "ピザ用チーズ", amount: "大さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "納豆、付属のタレ、片栗粉、チーズをボウルに入れてよく混ぜます。",
      "フライパンに油をひき、スプーンで落として平らに焼きます。",
      "両面がカリッとするまで焼きます。"
    ],
    nutritionPoint: "納豆（大豆）とチーズ（乳）による超優秀なタンパク質補給メニューです。",
    pickyPoint: "片栗粉を入れて焼くことで、ご飯やパンのような「モチモチ・カリカリ食感」になり、炭水化物好きの子の好みに近づきます。"
  },

  // --- 野菜・タンパク質拒否タイプ (66-70) ---
  {
    id: "pro-m-8",
    title: "見えない！しらす入りだし巻き卵",
    pickyTypes: ["protein_veg_reject", "visual"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "卵", amount: "1個" },
      { name: "しらす（極細かく刻む）", amount: "小さじ1" },
      { name: "白だし", amount: "小さじ1" },
      { name: "水", amount: "大さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "卵を溶き、水、白だし、完全に粉々にしたしらすを混ぜます。",
      "卵焼き器でふんわりと巻いていきます。"
    ],
    nutritionPoint: "卵の完全栄養食にカルシウムを追加。",
    pickyPoint: "魚の形が見えると拒否する子のため、しらすを跡形もなく刻んで「ただのだし巻きたまご」として提供します。"
  },
  {
    id: "pro-s-9",
    title: "ツナとコーンのカレーマヨ和え",
    pickyTypes: ["protein_veg_reject", "taste"],
    dishType: "side",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "コーン缶", amount: "大さじ2" },
      { name: "水煮ツナ", amount: "小さじ1" },
      { name: "マヨネーズ", amount: "小さじ1" },
      { name: "カレー粉", amount: "ごく微量（ひとつまみ）" }
    ],
    ingredientsAdult: [],
    steps: [
      "水分を切ったコーンとツナを耐熱皿に入れ、レンジで20秒ほど軽く温めます。",
      "マヨネーズとごくわずかなカレー粉を混ぜます。"
    ],
    nutritionPoint: "DHAと食物繊維。ツナのパサパサ感はマヨネーズで解消されます。",
    pickyPoint: "肉や魚の臭みに敏感な子も、カレー粉のスパイシーな香りで魚っぽさを完全に消します。"
  },
  {
    id: "pro-m-10",
    title: "甘ーい！かぼちゃのそぼろあんかけ",
    pickyTypes: ["protein_veg_reject", "taste"],
    dishType: "main",
    time: 15,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "かぼちゃ", amount: "40g" },
      { name: "鶏ひき肉", amount: "10g" },
      { name: "めんつゆ", amount: "小さじ1" },
      { name: "水溶き片栗粉", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "かぼちゃはレンジで2分加熱して柔らかくしておきます。",
      "耐熱容器にひき肉、めんつゆ、かぶるくらいの水を入れ、レンジで1分加熱します。",
      "水溶き片栗粉でとろみをつけ、柔らかいかぼちゃにかけます。"
    ],
    nutritionPoint: "かぼちゃのビタミンEと、鶏肉のタンパク質で風邪予防。",
    pickyPoint: "お肉を嫌がる子には「美味しい野菜（甘いかぼちゃ）」のタレとしてお肉を忍ばせます。"
  },
  {
    id: "pro-s-11",
    title: "みじん切り野菜のコンソメスープ",
    pickyTypes: ["protein_veg_reject", "texture"],
    dishType: "side",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "にんじん、たまねぎ（極小みじん切り）", amount: "各小さじ1" },
      { name: "水", amount: "100ml" },
      { name: "顆粒コンソメ", amount: "ひとつまみ" }
    ],
    ingredientsAdult: [],
    steps: [
      "マグカップに野菜と水を入れ、ラップをしてレンジで3分しっかり加熱します。",
      "野菜が完全にクタクタになったらコンソメを入れて混ぜます。"
    ],
    nutritionPoint: "スープに溶け出した水溶性ビタミンを逃さず摂取できます。",
    pickyPoint: "「噛む」のが嫌いな野菜拒否タイプに。スープと一緒に飲み込めるよう、極小サイズで徹底的に柔らかくします。"
  },
  {
    id: "pro-m-12",
    title: "チーズがとろける！豆腐のミニグラタン",
    pickyTypes: ["protein_veg_reject"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "絹ごし豆腐", amount: "50g" },
      { name: "マヨネーズ", amount: "小さじ1" },
      { name: "ピザ用チーズ", amount: "たっぷり" }
    ],
    ingredientsAdult: [],
    steps: [
      "耐熱皿に豆腐をスプーンですくって入れます。",
      "豆腐の上にマヨネーズを少し塗り、チーズをたっぷりのせます。",
      "トースターでチーズに焼き目がつくまで焼きます。"
    ],
    nutritionPoint: "大豆タンパク質と乳タンパク質のダブルパンチ。調理も一瞬です。",
    pickyPoint: "お肉や魚を嫌がっても大丈夫。豆腐とチーズという「食べやすい」タンパク質でしっかりカバーできます。"
  }
];
