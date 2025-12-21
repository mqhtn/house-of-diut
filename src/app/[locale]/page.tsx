import { use } from 'react';
import Image from 'next/image';

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: "de" | "vi" }>;
}) {
  const { locale } = use(params);

  return (
    <div className="max-w-6xl mx-auto">
      <section className="space-y-12 text-center py-8">
        <div className="space-y-6 animate-slideDown">
          <h1 className="text-5xl md:text-6xl font-serif font-light text-stone-900 leading-tight">
            {locale === "de" ? "In Gottes Liebe vereint" : "Hiệp nhất trong Tình Yêu Thiên Chúa"}
          </h1>
          <p className="text-lg md:text-xl text-stone-600 font-light max-w-2xl mx-auto leading-relaxed">
            {locale === "de"
              ? "Hier finden Sie Informationen zu unserem Leben, Gebet und unseren Veranstaltungen."
              : "Tại đây bạn tìm thấy thông tin về đời sống, cầu nguyện và các sự kiện của chúng tôi."}
          </p>
        </div>
        
        <div className="relative w-full max-w-sm mx-auto animate-slideUp">
          <Image
            src="/images/world-locations.png"
            alt={locale === "de" ? "Unsere Standorte weltweit" : "Các địa điểm của chúng tôi trên toàn thế giới"}
            width={384}
            height={192}
            className="w-full h-auto drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300"
            priority
          />
        </div>

        <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto text-center py-8">
          <div className="p-6 bg-gradient-to-br from-stone-50 to-stone-100 rounded-lg shadow-sm">
            <h2 className="font-serif text-2xl font-light text-stone-900 mb-3">
              {locale === "de" ? "Kloster Bonn - St. Hedwig" : "Tu viện Bonn - St. Hedwig"}
            </h2>
            <p className="text-stone-600 font-light">TGP Köln</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-stone-50 to-stone-100 rounded-lg shadow-sm">
            <h2 className="font-serif text-2xl font-light text-stone-900 mb-3">
              {locale === "de" ? "Kloster Gò Vấp" : "Tu viện Gò Vấp"}
            </h2>
            <p className="text-stone-600 font-light">TGP TP.HCM</p>
          </div>
        </div>
      </section>
    </div>
  );
}
