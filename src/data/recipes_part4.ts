import type { Recipe } from './recipes';

export const recipes4: Recipe[] = [
  // --- 食感NGタイプ (71-75) ---
  {
    id: "tex-m-14",
    title: "ふわふわ！はんぺんとお肉のハンバーグ",
    pickyTypes: ["texture", "protein_veg_reject"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "合い挽き肉", amount: "30g" },
      { name: "はんぺん", amount: "1/4枚" },
      { name: "ケチャップ", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "ポリ袋にはんぺんとお肉を入れ、はんぺんの粒がなくなるまでしっかり揉み潰します。",
      "丸く平たく形を整え、フライパンで両面を焼きます。（油不要）",
      "ケチャップを添えます。"
    ],
    nutritionPoint: "はんぺんに含まれる魚のタンパク質とお肉のタンパク質が両方摂れます。",
    pickyPoint: "お肉のゴツゴツ・パサパサした食感を、はんぺんの力でマシュマロのようにフワフワにします。"
  },
  {
    id: "tex-s-15",
    title: "つるんと完食！トマトのすりおろしゼリー",
    pickyTypes: ["texture", "taste"],
    dishType: "side",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "トマトピューレ（または無塩トマトジュース）", amount: "50ml" },
      { name: "りんごジュース", amount: "20ml" },
      { name: "粉ゼラチン", amount: "1g" },
      { name: "お湯", amount: "大さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "お湯に粉ゼラチンを入れて完全に溶かします。",
      "トマトピューレとりんごジュースを混ぜます。",
      "ゼラチン液を混ぜ、冷蔵庫で冷やし固めます。"
    ],
    nutritionPoint: "トマトのリコピンと水分補給が同時にできます。",
    pickyPoint: "トマトの皮の「口に残る感じ」や「種のドロッと感」を嫌がる子向け。ツルンとしたゼリーで解決します。"
  },
  {
    id: "tex-m-16",
    title: "とろみで包む！白菜と豚肉のクタクタ煮",
    pickyTypes: ["texture", "protein_veg_reject"],
    dishType: "main",
    time: 15,
    isMicrowaveOnly: false,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "白菜（葉の柔らかい部分）", amount: "1/2枚" },
      { name: "豚こま肉", amount: "20g" },
      { name: "だし汁", amount: "50ml" },
      { name: "水溶き片栗粉", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "白菜とお肉は極力細かく（1センチ以下）切ります。",
      "鍋でだし汁と一緒に白菜とお肉をしっかり煮込みます。（約10分）",
      "全体がクタクタになったら、水溶き片栗粉でとろみをつけます。"
    ],
    nutritionPoint: "白菜のカリウムとビタミンC、豚肉のビタミンB群がスープに溶け出します。",
    pickyPoint: "葉物野菜の繊維の引っかかりを、長時間の煮込み＋強いとろみで完全にリカバリーします。"
  },
  {
    id: "tex-s-17",
    title: "口で溶ける！卵ボーロ風片栗粉クッキー",
    pickyTypes: ["texture"],
    dishType: "side",
    time: 15,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "片栗粉", amount: "大さじ3" },
      { name: "砂糖", amount: "大さじ1" },
      { name: "牛乳", amount: "小さじ2" }
    ],
    ingredientsAdult: [],
    steps: [
      "全ての材料をボウルに入れ、耳たぶくらいの硬さになるまでこねます。",
      "小さく丸めてクッキングシートに並べます。",
      "トースターまたはオーブンで軽く焼き目がつくまで焼きます。"
    ],
    nutritionPoint: "片栗粉（炭水化物）のエネルギー補給源。乳製品のカルシウムも少し摂れます。",
    pickyPoint: "硬いおかずが食べられない子の補食。口の中に入れると唾液の水分でフワリと溶ける食感です。"
  },
  {
    id: "tex-m-18",
    title: "ねっとり美味しい！里芋のごま味噌和え",
    pickyTypes: ["texture", "taste"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "冷凍里芋", amount: "2〜3個" },
      { name: "すりごま", amount: "小さじ1" },
      { name: "味噌・砂糖", amount: "各少々" },
      { name: "お湯", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "冷凍里芋はレンジで規定の時間加熱し、柔らかくします。",
      "大きければ一口大に切り、ねっとりするようフォークなどで少し表面を崩します。",
      "味噌、砂糖、すりごまをお湯で溶いてソースを作り、里芋に絡めます。"
    ],
    nutritionPoint: "里芋のネバネバ成分（ガラクタンなど）が免疫力を高め、消化を助けます。",
    pickyPoint: "芋類特有の「パサパサ感」がなく、自然な「ねっとり食感」のおかげで飲み込みやすいメニューです。"
  },

  // --- 見た目NGタイプ (76-80) ---
  {
    id: "vis-m-14",
    title: "真っ黒に偽装！のり巻きウインナー",
    pickyTypes: ["visual"],
    dishType: "main",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "無塩せきウインナー", amount: "1〜2本" },
      { name: "焼き海苔", amount: "ウインナーが巻けるサイズ" }
    ],
    ingredientsAdult: [],
    steps: [
      "ウインナーをレンジで軽く加熱するか、茹でます。",
      "ウインナーが見えなくなるように、焼き海苔でぐるっと一周巻きます。"
    ],
    nutritionPoint: "タンパク質と、海苔のミネラル（鉄分・カルシウム）が摂れます。",
    pickyPoint: "「焼き目」や「お肉の色」を嫌がる時でも、海苔で真っ黒に隠すことで海苔巻き感覚で口に入れます。"
  },
  {
    id: "vis-s-15",
    title: "見えない緑！ブロッコリーのチーズ焼き",
    pickyTypes: ["visual", "protein_veg_reject"],
    dishType: "side",
    time: 10,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "冷凍ブロッコリー", amount: "1房" },
      { name: "スライスチーズ", amount: "1枚" }
    ],
    ingredientsAdult: [],
    steps: [
      "ブロッコリーをレンジで解凍し、耐熱容器に入れます。",
      "その上から、ブロッコリーの形（緑色）が完全に見えなくなるようにスライスチーズをかぶせます。",
      "トースターでチーズが溶けるまで焼きます。"
    ],
    nutritionPoint: "ブロッコリーの栄養素（ビタミンC、葉酸など）を逃さず摂取。",
    pickyPoint: "子供が警戒する「緑色のツブツブ」を、大好きなとろけるチーズの毛布で完全に覆い隠します。"
  },
  {
    id: "vis-m-16",
    title: "コロッケ風！ポテトボールのツナ隠し",
    pickyTypes: ["visual", "protein_veg_reject"],
    dishType: "main",
    time: 15,
    isMicrowaveOnly: false,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "じゃがいも", amount: "1/2個" },
      { name: "ツナ（水煮）", amount: "小さじ1" },
      { name: "パン粉", amount: "少々" },
      { name: "油", amount: "小さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "じゃがいもをレンジで柔らかくして潰します。",
      "潰したじゃがいもの中心にツナを入れて、丸いボール状に包みます。",
      "フライパンでパン粉をきつね色になるまでカラ煎りし、じゃがいもボールにまぶします。"
    ],
    nutritionPoint: "炭水化物を主軸に、内側にタンパク質（ツナ）を隠し持っています。",
    pickyPoint: "揚げていない疑似コロッケです。外側と内側で中身が違う「サプライズ型」の見た目偽装です。"
  },
  {
    id: "vis-s-17",
    title: "きなこでコーティング！さつまいも茶巾",
    pickyTypes: ["visual"],
    dishType: "side",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "さつまいも", amount: "30g" },
      { name: "きなこ", amount: "大さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "さつまいもは皮をむき、レンジで柔らかくして潰します。",
      "一口大に丸め、きなこを全体にしっかりまぶします。"
    ],
    nutritionPoint: "食物繊維とビタミンC（さつまいも）、タンパク質（きなこ）。",
    pickyPoint: "皮の紫や芋の黄色を、きなこの茶色で完全に消し、一口サイズの和菓子の見た目にします。"
  },
  {
    id: "vis-m-18",
    title: "白で統一！鶏肉と大根のクリームシチュー風",
    pickyTypes: ["visual", "taste"],
    dishType: "main",
    time: 15,
    isMicrowaveOnly: false,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "鶏もも肉（細かく切る）", amount: "30g" },
      { name: "大根", amount: "20g" },
      { name: "牛乳", amount: "50ml" },
      { name: "バター、小麦粉", amount: "各小さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "大根は細かく切りレンジで2分加熱。鍋でバターと鶏肉を炒めます。",
      "肉の色が変わったら小麦粉を振ってなじませ、牛乳と大根を加えます。",
      "とろみがつくまで弱火で煮込みます。"
    ],
    nutritionPoint: "大根の消化酵素と鶏肉のタンパク質で胃腸に優しいメニューです。",
    pickyPoint: "食材の色を「白」で統一。大根も鶏肉もクリームと同化して目立たなくなります。"
  },

  // --- 味覚敏感タイプ (81-85) ---
  {
    id: "tas-m-14",
    title: "ツナと玉ねぎのマイルドコーンクリームリゾット",
    pickyTypes: ["taste", "carb_only"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "ご飯", amount: "子供茶碗1杯" },
      { name: "コーンクリーム缶", amount: "大さじ2" },
      { name: "ツナ", amount: "少々" },
      { name: "玉ねぎ（みじん切り）", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "玉ねぎはレンジで1分加熱して辛味をしっかり飛ばします。",
      "耐熱皿にご飯、ツナ、玉ねぎ、コーンクリームを入れます。",
      "全体を混ぜてレンジで1分加熱します。"
    ],
    nutritionPoint: "ツナ（タンパク質）とコーン（食物繊維）をご飯と一緒に摂取できます。",
    pickyPoint: "玉ねぎの辛味やツナの香りを、絶対王者の「コーンクリーム」の甘さで完全に包み込みます。"
  },
  {
    id: "tas-s-15",
    title: "酸味なしヨーグルト！きなこりんご",
    pickyTypes: ["taste"],
    dishType: "side",
    time: 5,
    isMicrowaveOnly: false,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "プレーンヨーグルト", amount: "大さじ2" },
      { name: "すりおろしりんご", amount: "大さじ1" },
      { name: "きなこ", amount: "小さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "ヨーグルトにすりおろしりんごを混ぜて甘くします。",
      "上からきなこをかけ、食べる時によく混ぜます。"
    ],
    nutritionPoint: "りんごのペクチンとヨーグルトの乳酸菌の相乗効果で腸内環境を整えます。",
    pickyPoint: "ヨーグルトのいやな「すっぱさ」をりんごの甘みときなこの香ばしさでダブルコーティング。"
  },
  {
    id: "tas-m-16",
    title: "苦くない！ほうれん草のツナマヨたまご炒め",
    pickyTypes: ["taste", "protein_veg_reject"],
    dishType: "main",
    time: 10,
    isMicrowaveOnly: false,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "ほうれん草（茹でて細かく刻む）", amount: "10g" },
      { name: "卵", amount: "1個" },
      { name: "ツナ", amount: "大さじ1" },
      { name: "マヨネーズ", amount: "小さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "ボウルに卵、ツナ、ほうれん草、マヨネーズを入れてよく混ぜます。",
      "フライパンでスクランブルエッグにするように炒めます。"
    ],
    nutritionPoint: "卵＋ツナで最高クラスのタンパク質と、ほうれん草の鉄分を補給。",
    pickyPoint: "ほうれん草特有の「エグみ」を、マヨネーズの油分と卵のまろやかさでかき消します。"
  },
  {
    id: "tas-s-17",
    title: "にんじんのリンゴジュース煮",
    pickyTypes: ["taste", "protein_veg_reject"],
    dishType: "side",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "にんじん", amount: "20g" },
      { name: "100%リンゴジュース", amount: "大さじ3" }
    ],
    ingredientsAdult: [],
    steps: [
      "にんじんを薄い輪切り、または千切りにします。",
      "耐熱容器ににんじんとリンゴジュースを入れます。",
      "ラップをしてレンジ(600W)で3分加熱し、ジュースが染み込むまで少し冷まします。"
    ],
    nutritionPoint: "にんじんのカロテンを摂取。フルーツの甘みで糖分補給も兼ねます。",
    pickyPoint: "にんじんの「土臭さ・野菜臭さ」をリンゴジュースの香りで上書きし、デザートのようにします。"
  },
  {
    id: "tas-m-18",
    title: "マイルド！鮭のコーンフレーク焼き",
    pickyTypes: ["taste"],
    dishType: "main",
    time: 15,
    isMicrowaveOnly: false,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "生鮭（細かくする）", amount: "1/2切れ" },
      { name: "バター", amount: "少々" },
      { name: "しょうゆ", amount: "数滴" }
    ],
    ingredientsAdult: [],
    steps: [
      "フライパンにバターを溶かし、鮭を焼きます。",
      "火が通ったらしょうゆを数滴垂らし、香ばしく仕上げます。"
    ],
    nutritionPoint: "鮭から良質なDHA/EPAが摂れ、脳の発達を助けます。",
    pickyPoint: "魚の「クセ・臭み」をバター醤油の王道コンビで消し去ります。"
  },

  // --- 白ごはん・炭水化物偏食タイプ (86-90) ---
  {
    id: "car-m-13",
    title: "完全カモフラージュ！豆腐パンケーキミニ",
    pickyTypes: ["carb_only", "protein_veg_reject"],
    dishType: "main",
    time: 15,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "ホットケーキミックス", amount: "大さじ3" },
      { name: "絹ごし豆腐", amount: "30g" }
    ],
    ingredientsAdult: [],
    steps: [
      "豆腐をボウルに入れ、泡立て器でクリーム状にすり潰します。",
      "ホットケーキミックスを混ぜ、水なしでこねます。（硬ければ少量の水）",
      "丸めてフライパンで両面焼きます。"
    ],
    nutritionPoint: "パンしか食べない子に、大豆のタンパク質・カルシウムを密輸します。",
    pickyPoint: "見た目も味も「もちもちのパンケーキ」。豆腐が入っているとは気づけません。"
  },
  {
    id: "car-s-14",
    title: "ごはんのお供！しらすふりかけ",
    pickyTypes: ["carb_only"],
    dishType: "side",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "しらす", amount: "大さじ1" },
      { name: "青のり", amount: "少々" },
      { name: "ごま", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "クッキングシートにしらすを広げ、レンジで30秒〜加熱して水分を飛ばします。",
      "カリッとしたら青のりとごまを混ぜて出来上がり。"
    ],
    nutritionPoint: "ご飯だけでは不足するカルシウムとミネラルを補います。",
    pickyPoint: "「ふりかけご飯なら食べる」特性を利用して、市販のふりかけ代わりの栄養満点アイテムを作ります。"
  },
  {
    id: "car-m-15",
    title: "うどん焼き！お好み焼き風",
    pickyTypes: ["carb_only", "protein_veg_reject"],
    dishType: "main",
    time: 15,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "ゆでうどん（細かく刻む）", amount: "半玉" },
      { name: "卵", amount: "1個" },
      { name: "お好みソース", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "うどんと卵をボウルで混ぜます。",
      "フライパンに油をひき、丸く広げて両面をこんがり焼きます。",
      "ソースを塗って完成。"
    ],
    nutritionPoint: "うどんのエナジーに卵のタンパク質をコーティング。",
    pickyPoint: "麺が好きな子のためのアレンジ。カリッと焼くことで新しい炭水化物の一面を引き出します。"
  },
  {
    id: "car-s-16",
    title: "きなこマカロニ",
    pickyTypes: ["carb_only"],
    dishType: "side",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "マカロニ（茹で済）", amount: "10本" },
      { name: "きなこ", amount: "大さじ1" },
      { name: "砂糖", amount: "小さじ1/2" }
    ],
    ingredientsAdult: [],
    steps: [
      "茹でたマカロニに、砂糖ときなこを混ぜ合わせたものをまぶします。"
    ],
    nutritionPoint: "炭水化物＋大豆タンパクで立派などっしり補食になります。",
    pickyPoint: "「小麦粉しか食べない」子へのウラワザ。きなこ餅感覚でペロリと食べてくれます。"
  },
  {
    id: "car-m-17",
    title: "混ぜるだけ！バター醤油コーンご飯",
    pickyTypes: ["carb_only"],
    dishType: "main",
    time: 5,
    isMicrowaveOnly: true,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "温かいご飯", amount: "子供茶碗1杯" },
      { name: "コーン缶", amount: "大さじ1" },
      { name: "バター", amount: "少々" },
      { name: "しょうゆ", amount: "数滴" }
    ],
    ingredientsAdult: [],
    steps: [
      "温かいご飯にコーン、バター、しょうゆを入れます。",
      "バターが溶けるまでしっかりかき混ぜます。"
    ],
    nutritionPoint: "脂質（バター）を加えることで、腹持ちが良くエネルギー密度が高まります。",
    pickyPoint: "白いご飯に子供が大好きなコーンと魅惑のバター醤油を追加し、飽きさせません。"
  },

  // --- 野菜・タンパク質拒否タイプ (91-95) ---
  {
    id: "pro-m-13",
    title: "ツナとコーンのナゲット",
    pickyTypes: ["protein_veg_reject"],
    dishType: "main",
    time: 15,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "ツナ缶", amount: "1/2缶" },
      { name: "コーン缶", amount: "大さじ1" },
      { name: "片栗粉", amount: "大さじ1" },
      { name: "マヨネーズ", amount: "小さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "ボウルにしっかり水気を切ったツナ、コーン、片栗粉、マヨネーズを入れて混ぜます。",
      "平たく丸めて、フライパンで両面を焼きます。"
    ],
    nutritionPoint: "DHAとタンパク質。片栗粉で炭水化物もチャージできます。",
    pickyPoint: "お肉や魚の見た目を消し去り、「マックのナゲット」や「ハッシュドポテト」のようなジャンキーな外見で提供します。"
  },
  {
    id: "pro-s-14",
    title: "見えない！野菜のポタージュ",
    pickyTypes: ["protein_veg_reject", "visual"],
    dishType: "side",
    time: 10,
    isMicrowaveOnly: true,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "お好きな野菜（にんじん、かぼちゃ等）", amount: "20g" },
      { name: "牛乳", amount: "50ml" },
      { name: "コンソメ", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "野菜をレンジでクタクタになるまで加熱し、フォークで完全に潰します。",
      "牛乳とコンソメを混ぜ、再度レンジで少し温めます。"
    ],
    nutritionPoint: "緑黄色野菜のビタミンと牛乳のカルシウムのコンビネーションです。",
    pickyPoint: "野菜の形をゼロにします。「コップで飲む」スープの形にすることで警戒心が解けます。"
  },
  {
    id: "pro-m-15",
    title: "ひき肉と豆腐のココア風ハンバーグ",
    pickyTypes: ["protein_veg_reject"],
    dishType: "main",
    time: 15,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "合い挽き肉", amount: "20g" },
      { name: "絹ごし豆腐", amount: "20g" },
      { name: "お好みソース", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "ビニール袋で肉と豆腐を揉み込みます。",
      "丸めてフライパンで焼き、ソースを絡めます。"
    ],
    nutritionPoint: "豆腐の力でかさ増し＆タンパク質をプラス。",
    pickyPoint: "肉の食感が苦手な子も、豆腐の柔らかさでクリア。ソースの色と香りで肉の存在をごまかします。"
  },
  {
    id: "pro-s-16",
    title: "すりおろしにんじんのホットケーキ",
    pickyTypes: ["protein_veg_reject", "visual"],
    dishType: "side",
    time: 15,
    isMicrowaveOnly: false,
    isNoKnife: false,
    isMakeAhead: true,
    ingredientsChild: [
      { name: "ホットケーキミックス", amount: "大さじ3" },
      { name: "すりおろしにんじん", amount: "大さじ1" },
      { name: "牛乳", amount: "大さじ1" }
    ],
    ingredientsAdult: [],
    steps: [
      "材料をすべて混ぜ、フライパンで丸く焼きます。"
    ],
    nutritionPoint: "おやつ感覚で緑黄色野菜をチャージできます。",
    pickyPoint: "にんじんをすりおろすことで、生地に美しいオレンジ色がついて「オレンジ味のパンケーキ」と認識させやすいです。"
  },
  {
    id: "pro-m-17",
    title: "卵だけ！プレーンオムレツのケチャップ星",
    pickyTypes: ["protein_veg_reject"],
    dishType: "main",
    time: 5,
    isMicrowaveOnly: false,
    isNoKnife: true,
    isMakeAhead: false,
    ingredientsChild: [
      { name: "卵", amount: "1個" },
      { name: "牛乳", amount: "小さじ1" },
      { name: "ケチャップ", amount: "少々" }
    ],
    ingredientsAdult: [],
    steps: [
      "卵と牛乳を混ぜ、フライパンでバターまたは油を使ってふんわり焼きます。",
      "ケチャップで星やニコちゃんマークを描きます。"
    ],
    nutritionPoint: "最低限の完全栄養食（卵）を確実に摂取させます。",
    pickyPoint: "「野菜や肉が入っていない安心感」を提供し、ケチャップの絵柄でエンタメ性を付与します。"
  }
];
