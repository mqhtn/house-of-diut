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
      <section className="space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-serif text-stone-800">
            {locale === "de" ? "In Gottes Liebe vereint" : "Hiệp nhất trong Tình Yêu Thiên Chúa"}
          </h1>
          <p className="text-xl text-stone-600">
            {locale === "de"
              ? "Hier finden Sie Informationen zu unserem Leben, Gebet und unseren Veranstaltungen."
              : "Tại đây bạn tìm thấy thông tin về đời sống, cầu nguyện và các sự kiện của chúng tôi."}
          </p>
        </div>
        
        <div className="relative w-full max-w-sm mx-auto">
          <Image
            src="/images/world-locations.png"
            alt={locale === "de" ? "Unsere Standorte weltweit" : "Các địa điểm của chúng tôi trên toàn thế giới"}
            width={384}
            height={192}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto text-center">
          <div>
            <h2 className="font-serif text-xl text-stone-800 mb-2">
              {locale === "de" ? "Kloster Bonn - St. Hedwig" : "Tu viện Bonn - St. Hedwig"}
            </h2>
            <p className="text-stone-600">TGP Köln</p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-stone-800 mb-2">
              {locale === "de" ? "Kloster Gò Vấp" : "Tu viện Gò Vấp"}
            </h2>
            <p className="text-stone-600">TGP TP.HCM</p>
          </div>
        </div>
      </section>
    </div>
  );
}
