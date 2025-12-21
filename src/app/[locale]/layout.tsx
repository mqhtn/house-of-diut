'use client';

import { use } from 'react';
import Navigation from '@/components/Navigation';

const isValidLocale = (locale: string): locale is "de" | "vi" => {
  return locale === "de" || locale === "vi";
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}) {
  const { locale: rawLocale } = use(params);
  const locale = isValidLocale(rawLocale) ? rawLocale : "de"; // Fallback to German if invalid locale

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation locale={locale} />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {children}
        </div>
      </main>
      <footer className="bg-gradient-to-b from-stone-900 to-stone-950 text-stone-300 py-16 mt-20 border-t border-stone-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-light text-white mb-4">Ordensgemeinschaft</h3>
              <p className="text-sm leading-relaxed text-stone-400">
                {locale === 'de' 
                  ? 'Im Dienste Gottes und der Menschen, vereint im Gebet und der Gemeinschaft.' 
                  : 'Phụng sự Chúa và con người, đoàn kết trong cầu nguyện và cộng đồng.'}
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-light text-white mb-4">
                {locale === 'de' ? 'Kontakt' : 'Liên hệ'}
              </h3>
              <address className="text-sm not-italic leading-relaxed text-stone-400">
                Mackestraße 43<br />
                53119 Bonn<br />
                {locale === 'de' ? 'Deutschland' : 'Đức'}<br />
                <a href="tel:+491621975460" className="hover:text-white transition-colors duration-200 inline-block mt-2">+49 162 1975460</a><br />
                <a href="mailto:sr.caecilia@web.de" className="hover:text-white transition-colors duration-200 inline-block">sr.caecilia@web.de</a>
              </address>
            </div>
            <div>
              <h3 className="font-serif text-xl text-white mb-4">
                {locale === 'de' ? 'Öffnungszeiten' : 'Giờ mở cửa'}
              </h3>
              <p className="text-sm leading-relaxed">
                {/* {locale === 'de' 
                  ? 'Montag - Freitag: 09:00 - 17:00 Uhr' 
                  : 'Thứ Hai - Thứ Sáu: 09:00 - 17:00'}<br /> */}
                {locale === 'de'
                  ? 'Montag - Sonntag: Nach Vereinbarung'
                  : 'Thứ Hai - Thứ Bảy: Theo lịch hẹn'}
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-stone-800 text-center text-sm">
            © {new Date().getFullYear()} Ordensgemeinschaft. {locale === 'de' ? 'Alle Rechte vorbehalten.' : 'Đã đăng ký bản quyền.'}
          </div>
        </div>
      </footer>
    </div>
  );
}
