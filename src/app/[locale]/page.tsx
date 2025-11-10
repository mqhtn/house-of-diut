import { use } from 'react';

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: "de" | "vi" }>;
}) {
  const { locale } = use(params);

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">
        {locale === "de" ? "Willkommen in unserer Ordensgemeinschaft" : "Chào mừng đến với dòng tu của chúng tôi"}
      </h1>
      <p className="text-gray-700">
        {locale === "de"
          ? "Hier finden Sie Informationen zu unserem Leben, Gebet und unseren Veranstaltungen."
          : "Tại đây bạn tìm thấy thông tin về đời sống, cầu nguyện và các sự kiện của chúng tôi."}
      </p>
    </section>
  );
}
