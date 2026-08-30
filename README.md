# محمد نعسان — موقع شخصي

موقع شخصي مهني بالعربية أولاً (RTL) مع تبديل إلى الإنجليزية. يعرض عملاً مستقلاً في الحلول التقنية والأتمتة والذكاء الاصطناعي، والمنتج الحالي **wa-platform**.

لا شهادات عملاء مخترعة، ولا تسعير وهمي، ولا تسجيل عام للمنتج.

## التشغيل محلياً

المتطلبات: **Node.js 20** (LTS). لا تستخدم 22 على استضافة Hostinger إذا ظهر خطأ GLIBC.

```bash
npm install
npm run dev
```

يفتح التطوير على [http://127.0.0.1:43217](http://127.0.0.1:43217).

```bash
npm run build
npm start
```

## الصفحات

- `/` الرئيسية (عربية، تُعاد كتابتها داخلياً إلى `/ar`)
- `/products` منتج wa-platform
- `/services` الخدمات
- `/about` نبذة قصيرة
- `/contact` بريد ونموذج يفتح `mailto:`
- `/en` والنسخ الإنجليزية لبقية المسارات

التواصل: [syria4future@gmail.com](mailto:syria4future@gmail.com)  
غيت هب: [muhammednasen1987-dot](https://github.com/muhammednasen1987-dot)

## المكدس

Next.js (App Router) و TypeScript و Tailwind و shadcn/ui للعناصر الأساسية فقط. التصميم مخصّص: حبر دافئ، خط أميري للعناوين العربية، IBM Plex Sans Arabic للنص.

## Hostinger

البناء مضبوط لاستضافة Node.js (Next.js) على أنظمة glibc قديمة:

- في لوحة Hostinger اختر **Node 20** (الحقل `engines` في `package.json` وملف `.nvmrc`)
- الإعداد في `next.config.js` كائن عادي (ليس دالة وليست TypeScript) حتى لا تحتاج الاستضافة ترجمة SWC لملف الإعداد
- المشروع على **Next.js 15.5** مع `@next/swc-wasm-nodejs` و`NEXT_TEST_WASM=1` داخل `npm run build`
- بعد `npm install` يُحذف `@next/swc-linux-*` الأصلي حتى لا يُحمَّل الثنائي الذي يطلب GLIBC_2.29
- لا يوجد في المستودع ملف باسم `*.next.config.ts` — ذلك ملف مؤقت تولّده الاستضافة أثناء البناء

اترك أمر البناء الافتراضي `npm run build`. لا تضف متغيرات بيئة.

---

# Muhammed Nasen — personal site

Arabic-first professional site (RTL) with an English toggle. It presents independent work in technical solutions, automation, and AI, and the current product **wa-platform**.

No invented testimonials, fake pricing, or a public product signup.

## Run locally

Requires **Node.js 20** (LTS). Use 20 on Hostinger if the build reports a GLIBC error.

```bash
npm install
npm run dev
```

Dev server: [http://127.0.0.1:43217](http://127.0.0.1:43217).

```bash
npm run build
npm start
```

## Pages

- `/` home (Arabic; rewritten internally to `/ar`)
- `/products` wa-platform
- `/services` offerings
- `/about` a short note
- `/contact` email plus a `mailto:` form
- `/en` and English paths for the rest

Contact: [syria4future@gmail.com](mailto:syria4future@gmail.com)  
GitHub: [muhammednasen1987-dot](https://github.com/muhammednasen1987-dot)

## Stack

Next.js (App Router), TypeScript, Tailwind, and shadcn/ui for primitives only. The look is custom: warm ink, Amiri for Arabic headlines, IBM Plex Sans Arabic for body text.

## Hostinger

The build is set up for Hostinger Node.js (Next.js) on older glibc images:

- Set the dashboard Node version to **20** (`engines` in `package.json` and `.nvmrc`)
- `next.config.js` exports a plain object (not a function, not TypeScript) so Hostinger does not need SWC to load the config
- The app uses **Next.js 15.5** with `@next/swc-wasm-nodejs` and `NEXT_TEST_WASM=1` in `npm run build`
- `postinstall` removes native `@next/swc-linux-*` binaries that require GLIBC_2.29
- There is no `*.next.config.ts` file in this repo — that hashed name is a temporary file Hostinger generates during the build

Leave the build command as `npm run build`. No environment variables are required.
