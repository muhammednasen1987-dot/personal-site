export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale, path = "/"): string {
  const normalized = path === "/" ? "" : path;
  return locale === "ar" ? normalized || "/" : `/en${normalized || ""}`;
}

export function switchLocale(locale: Locale, pathname: string): string {
  const stripped = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  const next = locale === "ar" ? "en" : "ar";
  return localePath(next, stripped);
}

export function currentPath(pathname: string): string {
  return pathname.replace(/^\/en(?=\/|$)/, "") || "/";
}

export const dictionary = {
  ar: {
    dir: "rtl" as const,
    htmlLang: "ar",
    meta: {
      title: "محمد نعسان — حلول تقنية، أتمتة، وذكاء اصطناعي",
      description:
        "أعمل بشكل مستقل على بناء أنظمة عملية: بوابات واتساب، أتمتة سير العمل، ووكلاء ذكاء اصطناعي قابلة للنشر.",
    },
    nav: {
      home: "الرئيسية",
      products: "المنتجات",
      services: "الخدمات",
      about: "عنّي",
      contact: "تواصل",
      language: "English",
      languageAria: "التبديل إلى الإنجليزية",
      menu: "القائمة",
      close: "إغلاق",
    },
    brand: {
      name: "محمد نعسان",
      mark: "ن",
      place: "إسطنبول · سوريا",
      field: "حلول تقنية · أتمتة · ذكاء اصطناعي",
    },
    home: {
      eyebrow: "إسطنبول · سوريا",
      headline: "حلول تقنية، أتمتة، وذكاء اصطناعي",
      lead: "أعمل بشكل مستقل على بناء أنظمة تعمل حيث يعمل العمل: بوابة واتساب محلية، أتمتة للعمليات، ووكلاء يُركَّبون على سير قائم — بلا ضجيج تسويقي.",
      primary: "تواصل للعرض",
      secondary: "تعرّف على wa-platform",
      featuredKicker: "المنتج",
      featuredTitle: "wa-platform",
      featuredSubtitle: "بوابة واتساب كلاود محلية",
      featuredBody:
        "منصة استقبال وإدارة لمحادثات واتساب كلاود: لوحة محلية، عزل للحسابات، جلسات، ووكلاء ذكاء اصطناعي قابلة للاستبدال. تُبنى وتُنشر عندك — ليست تسجيلاً عاماً.",
      featuredCta: "تفاصيل المنصة",
      servicesKicker: "ماذا أقدّم",
      servicesTitle: "عمل محدد، لا كتالوج وهمي",
      contactBandTitle: "إن كان لديك مسار تريد تشغيله",
      contactBandBody:
        "صف المشكلة كما هي. أردّ على البريد وأحدد إن كان العرض مناسباً.",
      contactBandCta: "syria4future@gmail.com",
    },
    products: {
      title: "المنتجات",
      lead: "منتج واحد ملموس اليوم. الباقي يُبنى عند الحاجة، لا كوعود على الرف.",
      kicker: "المنتج الحالي",
      name: "wa-platform",
      tagline: "بوابة واتساب كلاود محلية — أتمتة وصندوق وارد",
      intro:
        "منصة عامة تربط واتساب كلاود بوكيل قابل للاستبدال، مع جلسات وصلاحيات ولوحة إدارة محلية. مكتوبة ببايثون وFastAPI، وتُشغَّل على جهازك أو خادمك.",
      honest:
        "ليست خدمة سحابية عامة ولا صفحة تسجيل. للعرض أو النشر: تواصل.",
      cta: "تواصل للعرض",
      stack: "بايثون · FastAPI · لوحة إدارة محلية",
      specsTitle: "ما تثبّته المنصة",
      specs: [
        {
          num: "01",
          title: "استقبال واتساب كلاود",
          body: "نقطة استقبال محلية لعقد ميتا، مع نجاح دائم نحو المنصة ومنع تكرار معرّف الرسالة.",
        },
        {
          num: "02",
          title: "لوحة إدارة محلية",
          body: "الحالة، الوكلاء، التعليمات، الجلسات، الصلاحيات، واتساب، الأحداث، والإعدادات. اللوحة لا تُنشر مع النفق.",
        },
        {
          num: "03",
          title: "عزل الحسابات والجلسات",
          body: "جلسة لكل قناة ومرسل ووكيل. تعليمات بداية ومتابعة، وخمول يُغلق الجلسة بلا خلط للسياق.",
        },
        {
          num: "04",
          title: "وكلاء قابلة للاستبدال",
          body: "سجل وكلاء ومحوّل زمن تشغيل. يُضاف محوّل محلي أو واجهة برمجية دون فتح صلاحيات واسعة.",
        },
        {
          num: "05",
          title: "صلاحيات بالمنع الافتراضي",
          body: "لا يُمنح شيء ما لم يُصرَّح به: وكيل × مورد × عملية. النجمة تحتاج تأكيداً صريحاً.",
        },
        {
          num: "06",
          title: "تشغيل محلي وأسرار مقنّعة",
          body: "البيانات على القرص، الأسرار من ملف البيئة، والسجل لا يعرض القيم. النفق يعرّض الاستقبال فقط.",
        },
      ],
      outTitle: "ما ليست عليه هذه النسخة",
      outItems: [
        "قاعدة بيانات سحابية إلزامية",
        "تسجيل ذاتي أو تسعير عام",
        "منطق قطاعي جاهز (مواعيد، مدفوعات، متجر)",
        "لوحة إدارة مكشوفة على الإنترنت",
      ],
    },
    services: {
      title: "الخدمات",
      lead: "عروض عمل، لا وحدات بيع جاهزة. كل مشروع يُحدَّد بعد فهم المسار القائم.",
      items: [
        {
          num: "01",
          title: "أتمتة مخصّصة",
          body: "ربط أنظمة متفرقة، تقليل التكرار اليدوي، ومسارات يمكن تشغيلها يومياً دون الاعتماد على جداول هشّة.",
        },
        {
          num: "02",
          title: "وكلاء ذكاء اصطناعي لسير العمل",
          body: "وكيل يقرأ السياق ويجهّز الخطوة التالية أو يرد ضمن حدود. صلاحيات واضحة، لا صندوق أسود مفتوح على ملفاتك.",
        },
        {
          num: "03",
          title: "أنظمة واتساب والصندوق الوارد",
          body: "استقبال، جلسات، توجيه، ولوحة محلية — كما في wa-platform — تُضبط على أرقامك وحساباتك.",
        },
        {
          num: "04",
          title: "حلول تقنية عامة",
          body: "بناء وتشغيل الأداة التي تحتاجها: واجهة، خدمة، أو جسر بين أنظمة. بلا منصة جاهزة بمزايا مخترعة.",
        },
      ],
      howTitle: "كيف يبدأ العمل",
      how: [
        "رسالة قصيرة تصف النظام الحالي والمطلوب.",
        "إن كان مناسباً: عرض نطاق واضح، لا وعد فضفاض.",
        "البناء والنشر عندك، مع تسليم يمكن تشغيله.",
      ],
      cta: "اكتب لي",
    },
    about: {
      title: "عنّي",
      lead: "سيرة قصيرة. لا أكثر مما هو ثابت.",
      p1: "محمد نعسان. أعمل بشكل مستقل على بناء أدوات أتمتة وذكاء اصطناعي وأنظمة تقنية عملية.",
      p2: "أعمل من سياق إسطنبول وسوريا. أهتم بأن يعمل النظام محلياً، بحدود واضحة، دون ادعاء منصة عامة لا وجود لها.",
      p3: "المنتج الملموس الذي أبنيه وأعرضه اليوم هو wa-platform: بوابة واتساب كلاود محلية مع لوحة إدارة ووكلاء قابلة للاستبدال.",
      linksTitle: "روابط ثابتة",
      emailLabel: "البريد",
      githubLabel: "غيت هب",
    },
    contact: {
      title: "تواصل",
      lead: "البريد هو القناة. النموذج يفتح رسالة في برنامج البريد لديك — لا خادم وهمي خلف الصفحة.",
      emailLabel: "البريد المباشر",
      copy: "نسخ العنوان",
      copied: "نُسخ العنوان",
      formTitle: "اكتب رسالة",
      name: "الاسم",
      namePh: "اسمك",
      email: "بريدك",
      emailPh: "you@example.com",
      subject: "الموضوع",
      subjectPh: "عرض · wa-platform / أتمتة / أخرى",
      message: "الرسالة",
      messagePh: "صف النظام الحالي وما تريد تشغيله.",
      submit: "فتح الرسالة في البريد",
      opened: "فُتح برنامج البريد. إن لم يظهر شيء، راسل العنوان أعلاه مباشرة.",
      errorName: "الاسم مطلوب.",
      errorEmail: "بريد صالح مطلوب.",
      errorMessage: "الرسالة مطلوبة.",
      github: "غيت هب",
    },
    footer: {
      rights: "محمد نعسان",
      note: "عمل مستقل — لا شهادات عملاء مخترعة.",
    },
  },
  en: {
    dir: "ltr" as const,
    htmlLang: "en",
    meta: {
      title: "Muhammed Nasen — technical solutions, automation, and AI",
      description:
        "I work independently, building practical systems: WhatsApp gateways, workflow automation, and deployable AI agents.",
    },
    nav: {
      home: "Home",
      products: "Products",
      services: "Services",
      about: "About",
      contact: "Contact",
      language: "العربية",
      languageAria: "Switch to Arabic",
      menu: "Menu",
      close: "Close",
    },
    brand: {
      name: "Muhammed Nasen",
      mark: "N",
      place: "Istanbul · Syria",
      field: "Technical solutions · Automation · AI",
    },
    home: {
      eyebrow: "Istanbul · Syria",
      headline: "Technical solutions, automation, and AI",
      lead: "I work independently, building systems that run where the work happens: a local WhatsApp gateway, process automation, and agents that attach to an existing workflow — without the usual launch noise.",
      primary: "Request a walkthrough",
      secondary: "See wa-platform",
      featuredKicker: "Product",
      featuredTitle: "wa-platform",
      featuredSubtitle: "Local WhatsApp Cloud gateway",
      featuredBody:
        "A receive-and-manage platform for WhatsApp Cloud: local admin, account isolation, sessions, and pluggable AI agents. Built and deployed with you — not a public signup.",
      featuredCta: "Platform details",
      servicesKicker: "Offerings",
      servicesTitle: "Specific work, not a fake catalog",
      contactBandTitle: "If you have a path you need running",
      contactBandBody:
        "Describe the problem as it is. I reply by email and say whether a walkthrough makes sense.",
      contactBandCta: "syria4future@gmail.com",
    },
    products: {
      title: "Products",
      lead: "One concrete product today. Anything else is built when needed — not listed as inventory.",
      kicker: "Current product",
      name: "wa-platform",
      tagline: "A local WhatsApp Cloud gateway — automation and inbox",
      intro:
        "A general platform that connects WhatsApp Cloud to a swappable agent, with sessions, permissions, and a local admin dashboard. Python and FastAPI, run on your machine or server.",
      honest:
        "Not a public SaaS and not a self-serve signup. For a walkthrough or a deploy: get in touch.",
      cta: "Request a walkthrough",
      stack: "Python · FastAPI · local admin",
      specsTitle: "What the platform actually does",
      specs: [
        {
          num: "01",
          title: "WhatsApp Cloud intake",
          body: "A local webhook for Meta’s contract, always-ack to the platform, and on-disk deduplication of message IDs.",
        },
        {
          num: "02",
          title: "Local admin dashboard",
          body: "Status, agents, instructions, sessions, permissions, WhatsApp, events, and settings. The dashboard is not exposed through the tunnel.",
        },
        {
          num: "03",
          title: "Account and session isolation",
          body: "A session per channel, sender, and agent. Start and follow-up instructions; idle time closes the session so context does not bleed.",
        },
        {
          num: "04",
          title: "Pluggable agents",
          body: "An agent registry and a runtime adapter. Add a local CLI agent or an API adapter without opening wide permissions.",
        },
        {
          num: "05",
          title: "Deny-by-default permissions",
          body: "Nothing is granted unless named: agent × resource × action. Wildcard grants need an explicit confirm.",
        },
        {
          num: "06",
          title: "Local run, masked secrets",
          body: "Data on disk, secrets from the env file, logs that hide values. The tunnel publishes intake only.",
        },
      ],
      outTitle: "What this version is not",
      outItems: [
        "A required cloud database",
        "Self-serve signup or public pricing",
        "Sector logic out of the box (appointments, payments, a shop)",
        "An admin console exposed on the internet",
      ],
    },
    services: {
      title: "Services",
      lead: "Offerings, not SKUs. Scope is set after the existing path is clear.",
      items: [
        {
          num: "01",
          title: "Custom automation",
          body: "Connect scattered systems, cut repeated manual work, and leave a path that can run every day without a fragile spreadsheet.",
        },
        {
          num: "02",
          title: "AI agents for business workflows",
          body: "An agent that reads context and prepares the next step or a reply — inside named limits. Not an open box on your files.",
        },
        {
          num: "03",
          title: "WhatsApp and inbox systems",
          body: "Intake, sessions, routing, and a local console — as in wa-platform — fitted to your numbers and accounts.",
        },
        {
          num: "04",
          title: "General technical solutions",
          body: "Build and run the tool you actually need: an interface, a service, or a bridge. No invented platform features.",
        },
      ],
      howTitle: "How work starts",
      how: [
        "A short note describing the current system and the need.",
        "If it fits: a clear scope, not a vague promise.",
        "Build and deploy with you, delivered in a runnable state.",
      ],
      cta: "Write to me",
    },
    about: {
      title: "About",
      lead: "A short note. Nothing beyond what is fixed.",
      p1: "Muhammed Nasen. I work independently, building automation tools, AI agents, and practical technical systems.",
      p2: "I work from an Istanbul / Syria context. I care that a system can run locally, with clear limits, without claiming a public platform that does not exist.",
      p3: "The concrete product I build and can walk through today is wa-platform: a local WhatsApp Cloud gateway with an admin dashboard and pluggable agents.",
      linksTitle: "Fixed links",
      emailLabel: "Email",
      githubLabel: "GitHub",
    },
    contact: {
      title: "Contact",
      lead: "Email is the channel. The form opens a message in your mail app — there is no fake backend behind this page.",
      emailLabel: "Direct email",
      copy: "Copy address",
      copied: "Address copied",
      formTitle: "Write a message",
      name: "Name",
      namePh: "Your name",
      email: "Your email",
      emailPh: "you@example.com",
      subject: "Subject",
      subjectPh: "Walkthrough · wa-platform / automation / other",
      message: "Message",
      messagePh: "Describe the current system and what you want running.",
      submit: "Open in your mail app",
      opened: "Your mail app should open. If nothing appears, write to the address above.",
      errorName: "Name is required.",
      errorEmail: "A valid email is required.",
      errorMessage: "A message is required.",
      github: "GitHub",
    },
    footer: {
      rights: "Muhammed Nasen",
      note: "Independent work — no invented testimonials.",
    },
  },
} as const;

export type Dictionary = (typeof dictionary)[Locale];

export function t(locale: Locale): Dictionary {
  return dictionary[locale];
}
