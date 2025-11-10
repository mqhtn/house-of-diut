'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type ValidLocale = 'de' | 'vi';

export default function Navigation({ locale }: { locale: ValidLocale }) {
  const pathname = usePathname();
  const otherLocale = locale === 'de' ? 'vi' : 'de';
  
  // Entferne den aktuellen Locale-Teil aus dem Pfad
  const newPathname = pathname.replace(`/${locale}`, '') || '/';

  return (
    <header className="bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-end space-x-4 text-sm text-stone-600">
          <Link
            href={`/${otherLocale}${newPathname}`}
            className="hover:text-stone-900 transition-colors"
          >
            {otherLocale === 'de' ? 'Deutsch' : 'Tiếng Việt'}
          </Link>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <Link href={`/${locale}`} className="font-serif text-3xl text-stone-800 hover:text-stone-600 transition-colors">
          Ordensgemeinschaft
        </Link>
        <div className="flex gap-8 items-center text-stone-600 font-medium">
          <Link href={`/${locale}/ueber-uns`} className="hover:text-stone-900 transition-colors border-b-2 border-transparent hover:border-stone-900">
            {locale === 'de' ? 'Über uns' : 'Về chúng tôi'}
          </Link>
          <Link href={`/${locale}/veranstaltungen`} className="hover:text-stone-900 transition-colors border-b-2 border-transparent hover:border-stone-900">
            {locale === 'de' ? 'Veranstaltungen' : 'Sự kiện'}
          </Link>
          <Link href={`/${locale}/galerie`} className="hover:text-stone-900 transition-colors border-b-2 border-transparent hover:border-stone-900">
            {locale === 'de' ? 'Galerie' : 'Thư viện ảnh'}
          </Link>
          <Link href={`/${locale}/kontakt`} className="hover:text-stone-900 transition-colors border-b-2 border-transparent hover:border-stone-900">
            {locale === 'de' ? 'Kontakt' : 'Liên hệ'}
          </Link>
        </div>
      </nav>
    </header>
  );
}