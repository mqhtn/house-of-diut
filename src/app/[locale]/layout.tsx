import Link from "next/link";

import { use } from 'react';

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: "de" | "vi" }>;
}) {
  const { locale } = use(params);
  const otherLocale = locale === "de" ? "vi" : "de";

  return (
    <>
      <header className="border-b bg-gray-50">
        <nav className="max-w-5xl mx-auto flex justify-between items-center p-4">
          <Link href={`/${locale}`} className="font-semibold text-lg">
            Ordensgemeinschaft
          </Link>
          <div className="flex gap-4 text-sm items-center">
            <Link href={`/${locale}/ueber-uns`}>Über uns</Link>
            <Link href={`/${locale}/veranstaltungen`}>Veranstaltungen</Link>
            <Link href={`/${locale}/galerie`}>Galerie</Link>
            <Link href={`/${locale}/kontakt`}>Kontakt</Link>
            <Link
              href={`/${otherLocale}`}
              className="border px-2 py-1 rounded text-xs"
            >
              {otherLocale.toUpperCase()}
            </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6">{children}</main>

      <footer className="border-t mt-10 text-center text-xs py-4 text-gray-500">
        © {new Date().getFullYear()} Ordensgemeinschaft XYZ
      </footer>
    </>
  );
}
