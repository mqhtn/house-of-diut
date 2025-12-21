'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type ValidLocale = 'de' | 'vi';

export default function Navigation({ locale }: { locale: ValidLocale }) {
  const pathname = usePathname();
  const otherLocale = locale === 'de' ? 'vi' : 'de';
  
  // Entferne den aktuellen Locale-Teil aus dem Pfad
  const newPathname = pathname.replace(`/${locale}`, '') || '/';
  
  const isActive = (path: string) => {
    return newPathname === path || (path !== '/' && newPathname.startsWith(path));
  };

  return (
    <header className="bg-white border-b border-stone-200/60 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex justify-end space-x-6 text-sm text-stone-600">
          <Link
            href={`/${otherLocale}${newPathname}`}
            className="hover:text-stone-900 transition-colors duration-200 font-medium"
          >
            {otherLocale === 'de' ? 'Deutsch' : 'Tiếng Việt'}
          </Link>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <Link href={`/${locale}`} className="font-serif text-3xl font-light text-stone-900 hover:text-stone-700 transition-colors duration-300">
          Unsere Ordensgemeinschaft
        </Link>
        <div className="flex gap-10 items-center text-stone-700 font-medium">
          <Link href={`/${locale}/ueber-uns`} className={`relative group transition-colors duration-200 ${
            isActive('/ueber-uns') ? 'text-stone-900' : 'hover:text-stone-900'
          }`}>
            {locale === 'de' ? 'Über uns' : 'Về chúng tôi'}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-stone-900 transition-all duration-300 ${
              isActive('/ueber-uns') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          <Link href={`/${locale}/veranstaltungen`} className={`relative group transition-colors duration-200 ${
            isActive('/veranstaltungen') ? 'text-stone-900' : 'hover:text-stone-900'
          }`}>
            {locale === 'de' ? 'Veranstaltungen' : 'Sự kiện'}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-stone-900 transition-all duration-300 ${
              isActive('/veranstaltungen') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          <Link href={`/${locale}/galerie`} className={`relative group transition-colors duration-200 ${
            isActive('/galerie') ? 'text-stone-900' : 'hover:text-stone-900'
          }`}>
            {locale === 'de' ? 'Galerie' : 'Thư viện ảnh'}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-stone-900 transition-all duration-300 ${
              isActive('/galerie') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          <Link href={`/${locale}/kontakt`} className={`relative group transition-colors duration-200 ${
            isActive('/kontakt') ? 'text-stone-900' : 'hover:text-stone-900'
          }`}>
            {locale === 'de' ? 'Kontakt' : 'Liên hệ'}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-stone-900 transition-all duration-300 ${
              isActive('/kontakt') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
        </div>
      </nav>
    </header>
  );
}