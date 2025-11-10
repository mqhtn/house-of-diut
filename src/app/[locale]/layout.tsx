'use client';

import { use } from 'react';
import Navigation from '@/components/Navigation';

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: "de" | "vi" }>
}) {
  const { locale } = use(params);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navigation locale={locale} />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {children}
        </div>
      </main>
      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl text-white mb-4">Ordensgemeinschaft</h3>
              <p className="text-sm leading-relaxed">
                {locale === 'de' 
                  ? 'Im Dienste Gottes und der Menschen, vereint im Gebet und der Gemeinschaft.' 
                  : 'Phụng sự Chúa và con người, đoàn kết trong cầu nguyện và cộng đồng.'}
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-white mb-4">
                {locale === 'de' ? 'Kontakt' : 'Liên hệ'}
              </h3>
              <address className="text-sm not-italic leading-relaxed">
                Musterstraße 123<br />
                12345 Musterstadt<br />
                {locale === 'de' ? 'Deutschland' : 'Đức'}<br />
                <a href="tel:+49123456789" className="hover:text-white transition-colors">+49 123 456789</a><br />
                <a href="mailto:info@ordensgemeinschaft.de" className="hover:text-white transition-colors">info@ordensgemeinschaft.de</a>
              </address>
            </div>
            <div>
              <h3 className="font-serif text-xl text-white mb-4">
                {locale === 'de' ? 'Öffnungszeiten' : 'Giờ mở cửa'}
              </h3>
              <p className="text-sm leading-relaxed">
                {locale === 'de' 
                  ? 'Montag - Freitag: 09:00 - 17:00 Uhr' 
                  : 'Thứ Hai - Thứ Sáu: 09:00 - 17:00'}<br />
                {locale === 'de'
                  ? 'Samstag & Sonntag: Nach Vereinbarung'
                  : 'Thứ Bảy & Chủ Nhật: Theo lịch hẹn'}
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
