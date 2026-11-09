// ========================================================
// TRANSLATIONS: English = your original text (unchanged)
//               Arabic  = faithful translation, standard science terms
// Element symbols stay in Latin letters; numbers stay Western digits.
// ========================================================
window.TRANSLATIONS = {

  ui: {
    en: {
      pageTitle: "Periodic Table",
      searchName: "SEARCH BY NAME...", searchSymbol: "SEARCH BY SYMBOL...",
      name: "NAME", symbol: "SYMBOL",
      noResults: "No results found (T_T)",
      atomicNumber: "Atomic Number",
      lblReactivity: "Reactivity", lblDensity: "Density", lblThermal: "Thermal",
      lblCategory: "Classification", lblFacts: "Top Applications & Facts",
      melts: "Melts", boils: "Boils",
      more: "MORE MATCHES BELOW"
    },
    ar: {
      pageTitle: "الجدول الدوري",
      searchName: "ابحث بالاسم...", searchSymbol: "ابحث بالرمز...",
      name: "الاسم", symbol: "الرمز",
      noResults: "لا توجد نتائج",
      atomicNumber: "العدد الذري",
      lblReactivity: "النشاط الكيميائي", lblDensity: "الكثافة", lblThermal: "الخصائص الحرارية",
      lblCategory: "التصنيف", lblFacts: "أبرز التطبيقات والحقائق",
      melts: "ينصهر", boils: "يغلي",
      more: "المزيد من النتائج بالأسفل"
    }
  },

  categories: {
    alkali: {
      en: { name: "Alkali", def: "Group 1 metal; 1 valence electron makes it react violently with water." },
      ar: { name: "الفلزات القلوية", def: "فلز من المجموعة 1؛ يجعله إلكترون التكافؤ الواحد يتفاعل بعنف مع الماء." }
    },
    alkaline: {
      en: { name: "Alkaline", def: "Group 2 metal; reactive divalent metal forming basic alkaline hydroxides." },
      ar: { name: "الفلزات القلوية الترابية", def: "فلز من المجموعة 2؛ فلز نشط ثنائي التكافؤ يكوّن هيدروكسيدات قلوية." }
    },
    transition: {
      en: { name: "Transition", def: "d-block metal with partially filled d-subshells; forms colorful compounds with multiple oxidation states." },
      ar: { name: "الفلزات الانتقالية", def: "فلز من الفئة d ذو مستويات فرعية d مملوءة جزئيًا؛ يكوّن مركبات ملونة وله أعداد تأكسد متعددة." }
    },
    "post-transition": {
      en: { name: "Post transition", def: "Soft, ductile metal with lower melting points and higher electronegativities." },
      ar: { name: "الفلزات بعد الانتقالية", def: "فلز لين وقابل للسحب، درجات انصهاره أقل وسالبيته الكهربية أعلى." }
    },
    metalloid: {
      en: { name: "Metalloid", def: "Intermediate electronic bandgap exhibiting mixed metallic and nonmetallic behavior." },
      ar: { name: "أشباه الفلزات", def: "فجوة نطاق إلكترونية متوسطة، ويُظهر سلوكًا فلزيًا ولافلزيًا معًا." }
    },
    "reactive-nonmetal": {
      en: { name: "Reactive nonmetal", def: "High electronegativity; readily gains or shares electrons to form covalent bonds." },
      ar: { name: "اللافلزات النشطة", def: "سالبية كهربية عالية؛ يكسب الإلكترونات أو يتشاركها بسهولة لتكوين روابط تساهمية." }
    },
    "noble-gas": {
      en: { name: "Noble gas", def: "Complete octet valence shell; chemically inert under standard conditions." },
      ar: { name: "الغازات النبيلة", def: "غلاف تكافؤ ثماني مكتمل؛ خامل كيميائيًا في الظروف القياسية." }
    },
    lanthanoid: {
      en: { name: "Lanthanoid", def: "f-block rare-earth metal known for strong magnetic dipoles and trivalent states." },
      ar: { name: "اللانثانيدات", def: "فلز أرضي نادر من الفئة f، معروف بثنائيات الأقطاب المغناطيسية القوية وحالات التكافؤ الثلاثية." }
    },
    actinoid: {
      en: { name: "Actinoid", def: "Dense, radioactive f-block metal with heavy, decaying nuclei." },
      ar: { name: "الأكتينيدات", def: "فلز مشع كثيف من الفئة f، نواته ثقيلة وتتحلل." }
    }
  },

  // Arabic element names (keyed by symbol)
  names: {
    "*": "اللانثانيدات", "**": "الأكتينيدات",
    H: "الهيدروجين", He: "الهيليوم", Li: "الليثيوم", Be: "البريليوم", B: "البورون", C: "الكربون", N: "النيتروجين", O: "الأكسجين", F: "الفلور", Ne: "النيون",
    Na: "الصوديوم", Mg: "المغنيسيوم", Al: "الألمنيوم", Si: "السيليكون", P: "الفوسفور", S: "الكبريت", Cl: "الكلور", Ar: "الأرغون",
    K: "البوتاسيوم", Ca: "الكالسيوم", Sc: "السكانديوم", Ti: "التيتانيوم", V: "الفاناديوم", Cr: "الكروم", Mn: "المنغنيز", Fe: "الحديد", Co: "الكوبالت", Ni: "النيكل", Cu: "النحاس", Zn: "الزنك",
    Ga: "الغاليوم", Ge: "الجرمانيوم", As: "الزرنيخ", Se: "السيلينيوم", Br: "البروم", Kr: "الكريبتون",
    Rb: "الروبيديوم", Sr: "السترونشيوم", Y: "الإتريوم", Zr: "الزركونيوم", Nb: "النيوبيوم", Mo: "الموليبدينوم", Tc: "التكنيشيوم", Ru: "الروثينيوم", Rh: "الروديوم", Pd: "البلاديوم", Ag: "الفضة", Cd: "الكادميوم",
    In: "الإنديوم", Sn: "القصدير", Sb: "الأنتيمون", Te: "التيلوريوم", I: "اليود", Xe: "الزينون",
    Cs: "السيزيوم", Ba: "الباريوم", Hf: "الهافنيوم", Ta: "التنتالوم", W: "التنغستن", Re: "الرينيوم", Os: "الأوسميوم", Ir: "الإيريديوم", Pt: "البلاتين", Au: "الذهب", Hg: "الزئبق",
    Tl: "الثاليوم", Pb: "الرصاص", Bi: "البزموث", Po: "البولونيوم", At: "الأستاتين", Rn: "الرادون",
    Fr: "الفرانسيوم", Ra: "الراديوم", Rf: "الرذرفورديوم", Db: "الدوبنيوم", Sg: "السيبورغيوم", Bh: "البوريوم", Hs: "الهاسيوم", Mt: "الميتنريوم", Ds: "الدارمشتاتيوم", Rg: "الرونتجينيوم", Cn: "الكوبرنيسيوم",
    Nh: "النيهونيوم", Fl: "الفليروفيوم", Mc: "الموسكوفيوم", Lv: "الليفرموريوم", Ts: "التينيسين", Og: "الأوغانيسون",
    La: "اللانثانوم", Ce: "السيريوم", Pr: "البراسيوديميوم", Nd: "النيوديميوم", Pm: "البروميثيوم", Sm: "السماريوم", Eu: "اليوروبيوم", Gd: "الغادولينيوم", Tb: "التربيوم", Dy: "الديسبروسيوم", Ho: "الهولميوم", Er: "الإربيوم", Tm: "الثوليوم", Yb: "الإيتربيوم", Lu: "اللوتيشيوم",
    Ac: "الأكتينيوم", Th: "الثوريوم", Pa: "البروتكتينيوم", U: "اليورانيوم", Np: "النبتونيوم", Pu: "البلوتونيوم", Am: "الأمريسيوم", Cm: "الكوريوم", Bk: "البركيليوم", Cf: "الكاليفورنيوم", Es: "الأينشتاينيوم", Fm: "الفرميوم", Md: "المندليفيوم", No: "النوبليوم", Lr: "اللورنسيوم"
  },

  // dens.v = number+unit (kept left-to-right); en/ar = your original wording in brackets
  specs: {
    Hg: { react: { en: "Low • Resists oxidation; forms liquid amalgams.", ar: "منخفض • يقاوم الأكسدة؛ يكوّن ملغمات سائلة." },
          dens: { v: "13.53 g/cm³", en: "(dense liquid)", ar: "(سائل كثيف)" }, mp: "-38.8", bp: "356.7" },
    H:  { react: { en: "Vigorous explosive combustion with O₂.", ar: "احتراق انفجاري عنيف مع O₂." },
          dens: { v: "0.08988 g/L", en: "(light gas)", ar: "(غاز خفيف)" }, mp: "-259.2", bp: "-252.9" },
    He: { react: { en: "Inert • Zero chemical reactivity (1s²).", ar: "خامل • انعدام النشاط الكيميائي (1s²)." },
          dens: { v: "0.1786 g/L", en: "(monatomic gas)", ar: "(غاز أحادي الذرة)" }, mp: "-272.2", bp: "-268.9" },
    Li: { react: { en: "Spontaneous • Releases H₂ in water.", ar: "تلقائي • يحرر H₂ في الماء." },
          dens: { v: "0.534 g/cm³", en: "(lightest solid metal)", ar: "(أخف فلز صلب)" }, mp: "180.5", bp: "1,342" },
    C:  { react: { en: "Moderate • Forms stable chains & rings.", ar: "متوسط • يكوّن سلاسل وحلقات مستقرة." },
          dens: { v: "2.26 g/cm³", en: "(graphite)", ar: "(الجرافيت)" },
          note: { en: "Sublimes at 3,550 °C", ar: "يتسامى عند 3,550 °C" } },
    O:  { react: { en: "Aggressive oxidizer; supports combustion.", ar: "عامل مؤكسد قوي؛ يدعم الاحتراق." },
          dens: { v: "1.429 g/L", en: "(diatomic gas)", ar: "(غاز ثنائي الذرة)" }, mp: "-218.8", bp: "-183.0" },
    Fe: { react: { en: "Moderate • Forms rust in moist air.", ar: "متوسط • يكوّن الصدأ في الهواء الرطب." },
          dens: { v: "7.874 g/cm³", en: "(ferromagnetic)", ar: "(فيرومغناطيسي)" }, mp: "1,538", bp: "2,862" },
    Cu: { react: { en: "Low • Forms green carbonate patina.", ar: "منخفض • يكوّن طبقة كربونات خضراء." },
          dens: { v: "8.96 g/cm³", en: "(high conductivity)", ar: "(موصلية عالية)" }, mp: "1,084.6", bp: "2,562" },
    Au: { react: { en: "Noble • Impervious to pure acids & air.", ar: "نبيل • لا يتأثر بالأحماض النقية ولا بالهواء." },
          dens: { v: "19.30 g/cm³", en: "(malleable heavy metal)", ar: "(فلز ثقيل قابل للطرق)" }, mp: "1,064.2", bp: "2,970" },
    U:  { react: { en: "Pyrophoric and radioactively unstable.", ar: "قابل للاشتعال تلقائيًا وغير مستقر إشعاعيًا." },
          dens: { v: "19.1 g/cm³", en: "(fission fuel)", ar: "(وقود الانشطار)" }, mp: "1,132.2", bp: "4,131" }
  },

  // Fallbacks (only these 3 exist; every other category uses "default")
  fallback: {
    "noble-gas": {
      react: { en: "Inert • Complete outer shell.", ar: "خامل • غلاف خارجي مكتمل." },
      dens:  { en: "Gas density at STP.", ar: "كثافة الغاز عند الظروف القياسية (STP)." },
      therm: { en: "Extremely low cryogenic points.", ar: "نقاط برودية منخفضة للغاية." }
    },
    alkali: {
      react: { en: "Violent • Spontaneous in water.", ar: "عنيف • تلقائي في الماء." },
      dens:  { en: "Low density (< 2.0 g/cm³).", ar: "كثافة منخفضة (< 2.0 g/cm³)." },
      therm: { en: "Low melting point (< 200 °C).", ar: "درجة انصهار منخفضة (< 200 °C)." }
    },
    default: {
      react: { en: "Standard metallic valence bonding.", ar: "ارتباط تكافؤ فلزي قياسي." },
      dens:  { en: "Typical solid metal density.", ar: "كثافة فلز صلب نموذجية." },
      therm: { en: "High melting & boiling points.", ar: "درجات انصهار وغليان مرتفعة." }
    }
  },

  facts: {
    Hg: {
      en: ["The only elemental metal that remains in a liquid state at room temperature.", "Historically used in barometers, manometers, and mercury-vapor lamps.", "Forms amalgams with gold and silver, making it historically central to mining."],
      ar: ["الفلز العنصري الوحيد الذي يبقى سائلًا عند درجة حرارة الغرفة.", "استُخدم تاريخيًا في البارومترات والمانومترات ومصابيح بخار الزئبق.", "يكوّن ملغمات مع الذهب والفضة، مما جعله محوريًا تاريخيًا في التعدين."]
    },
    H: {
      en: ["Key rocket fuel propellant when combined with liquid oxygen.", "Primary fuel for stellar nuclear fusion inside stars.", "Most abundant chemical substance in the universe (≈75% of normal mass)."],
      ar: ["وقود دافع رئيسي للصواريخ عند اتحاده مع الأكسجين السائل.", "الوقود الأساسي للاندماج النووي داخل النجوم.", "أكثر المواد الكيميائية وفرة في الكون (≈75% من الكتلة العادية)."]
    },
    He: {
      en: ["Coolant for superconducting magnets in hospital MRI machines.", "Used in deep-sea breathing mixes to prevent nitrogen narcosis.", "First detected in the solar spectrum during an 1868 eclipse before being found on Earth."],
      ar: ["مبرّد للمغانط فائقة التوصيل في أجهزة الرنين المغناطيسي بالمستشفيات.", "يُستخدم في خلائط التنفس للغوص العميق لمنع تخدّر النيتروجين.", "رُصد لأول مرة في الطيف الشمسي أثناء كسوف عام 1868 قبل العثور عليه على الأرض."]
    },
    Li: {
      en: ["High-density anode material in rechargeable lithium-ion batteries.", "Industrial component in high-temperature lubricating greases.", "Pharmaceutical mood stabilizer used in clinical medicine."],
      ar: ["مادة مصعد عالية الكثافة في بطاريات الليثيوم أيون القابلة للشحن.", "مكوّن صناعي في الشحوم المزلِّقة المستخدمة عند درجات الحرارة العالية.", "مثبّت دوائي للمزاج يُستخدم في الطب السريري."]
    },
    C: {
      en: ["Fundamental structural backbone for all known organic life.", "Forms diamond (hardest natural mineral) and graphite (solid lubricant).", "Basis for carbon-fiber composites used in aerospace engineering."],
      ar: ["العمود البنيوي الأساسي لجميع صور الحياة العضوية المعروفة.", "يكوّن الألماس (أصلب معدن طبيعي) والجرافيت (مزلِّق صلب).", "أساس المواد المركبة من ألياف الكربون المستخدمة في هندسة الطيران والفضاء."]
    },
    O: {
      en: ["Essential oxidant for cellular respiration in aerobic organisms.", "Liquid oxygen oxidizer for multi-stage rocket propulsion systems.", "Forms protective stratospheric ozone (O₃) filtering solar UV rays."],
      ar: ["عامل مؤكسد أساسي للتنفس الخلوي في الكائنات الهوائية.", "مؤكسد الأكسجين السائل في أنظمة دفع الصواريخ متعددة المراحل.", "يكوّن طبقة الأوزون (O₃) الواقية في الستراتوسفير التي تحجب الأشعة فوق البنفسجية الشمسية."]
    },
    Fe: {
      en: ["Central transition metal in hemoglobin binding oxygen molecules in blood.", "Primary structural alloy ingredient in global steel manufacturing.", "Dominant core component generating Earth's protective magnetic dynamo."],
      ar: ["الفلز الانتقالي المركزي في الهيموغلوبين الذي يرتبط بجزيئات الأكسجين في الدم.", "المكوّن الرئيسي لسبائك الصلب في صناعة الفولاذ عالميًا.", "المكوّن الرئيسي للب الأرض الذي يولّد دينامو المجال المغناطيسي الواقي للأرض."]
    },
    Cu: {
      en: ["Benchmark conductor for residential wiring and power grid distribution.", "High thermal conductivity making it standard for heat sinks.", "Natural antimicrobial surface that actively neutralizes bacteria."],
      ar: ["الموصل المرجعي للأسلاك المنزلية وتوزيع شبكات الكهرباء.", "موصلية حرارية عالية تجعله معيارًا في المشتتات الحرارية.", "سطح طبيعي مضاد للميكروبات يعطّل البكتيريا بفعالية."]
    },
    Au: {
      en: ["Corrosion-proof wire bonding used across aerospace electronic boards.", "Ultra-thin astronaut helmet visor coating reflecting solar infrared rays.", "High malleability: a single gram can be beaten into a 1-square-meter sheet."],
      ar: ["أسلاك ربط مقاومة للتآكل تُستخدم في لوحات الإلكترونيات الفضائية.", "طلاء فائق الرقة لواقي خوذة رائد الفضاء يعكس الأشعة تحت الحمراء الشمسية.", "قابلية عالية للطرق: يمكن طرق غرام واحد ليصبح صفيحة مساحتها متر مربع."]
    },
    U: {
      en: ["Fuel for commercial light-water nuclear fission power plants.", "Dense isotope U-238 utilized for radiation shielding in hospitals.", "Core heat-producing element sustaining mantle convection inside Earth."],
      ar: ["وقود لمحطات الانشطار النووي التجارية ذات الماء الخفيف.", "يُستخدم النظير الكثيف U-238 للحماية من الإشعاع في المستشفيات.", "العنصر الرئيسي المنتج للحرارة في باطن الأرض والذي يحافظ على الحمل الحراري في الوشاح."]
    }
  },

  fallbackFacts: {
    en: cat => [
      `Classified under the ${cat} series in modern chemical taxonomy.`,
      `Critical reference element in research laboratories studying valence orbitals and trends.`,
      `Refined or synthesized for specialized metallurgical, nuclear, or technical uses.`
    ],
    ar: cat => [
      `مصنّف ضمن سلسلة ${cat} في التصنيف الكيميائي الحديث.`,
      `عنصر مرجعي مهم في المختبرات البحثية التي تدرس مستويات التكافؤ والاتجاهات الدورية.`,
      `يُنقّى أو يُصنَّع لاستخدامات متخصصة في التعدين أو المجال النووي أو التقنية.`
    ]
  }
};
