import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col justify-center px-4 py-20">
      <p className="kicker">404</p>
      <h1 className="display mt-3 text-4xl">الصفحة غير موجودة</h1>
      <p className="mt-3 text-paper-dim">Page not found.</p>
      <Link href="/" className="cta cta-primary mt-8 w-fit">
        الرئيسية · Home
      </Link>
    </div>
  );
}
