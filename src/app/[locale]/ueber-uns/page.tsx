import { getAboutContent } from '@/lib/content';

import { use } from 'react';

export default function AboutPage({
  params,
}: {
  params: Promise<{ locale: 'de' | 'vi' }>;
}) {
  const { locale } = use(params);
  const content = getAboutContent(locale);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl text-stone-800 mb-4">{content.title}</h1>
        <p className="text-xl text-stone-600">{content.subtitle}</p>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-100 to-stone-50 transform -skew-y-6 z-0"></div>
        <div className="relative z-10 space-y-16 py-12">
          {content.content.map((section, index) => (
            <section key={index} className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-8 items-center`}>
              <div className="md:w-1/2">
                <h2 className="font-serif text-2xl text-stone-800 mb-4">{section.title}</h2>
                <p className="text-stone-600 leading-relaxed">{section.text}</p>
              </div>
              <div className="md:w-1/2">
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={`/images/about-${index + 1}.jpg`}
                    alt={section.title}
                    className="object-cover w-full h-full transform transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-8 bg-white rounded-xl shadow-sm border border-stone-100 transform transition duration-300 hover:shadow-md">
          <div className="w-16 h-16 mx-auto mb-6 text-stone-400">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="font-serif text-xl text-stone-800 mb-4">
            {locale === 'de' ? 'Nächstenliebe' : 'Bác ái'}
          </h3>
          <p className="text-stone-600">
            {locale === 'de' 
              ? 'Wir setzen uns für die Bedürftigen ein und leben die christliche Nächstenliebe.'
              : 'Chúng tôi phục vụ người nghèo và sống theo tinh thần bác ái Kitô giáo.'}
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl shadow-sm border border-stone-100 transform transition duration-300 hover:shadow-md">
          <div className="w-16 h-16 mx-auto mb-6 text-stone-400">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-serif text-xl text-stone-800 mb-4">
            {locale === 'de' ? 'Tradition' : 'Truyền thống'}
          </h3>
          <p className="text-stone-600">
            {locale === 'de'
              ? 'Unsere Gemeinschaft pflegt eine lange Tradition des Gebets und der Kontemplation.'
              : 'Cộng đoàn chúng tôi duy trì truyền thống lâu đời về cầu nguyện và chiêm niệm.'}
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl shadow-sm border border-stone-100 transform transition duration-300 hover:shadow-md">
          <div className="w-16 h-16 mx-auto mb-6 text-stone-400">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="font-serif text-xl text-stone-800 mb-4">
            {locale === 'de' ? 'Gemeinschaft' : 'Cộng đoàn'}
          </h3>
          <p className="text-stone-600">
            {locale === 'de'
              ? 'In unserer Gemeinschaft leben und beten wir zusammen als eine Familie in Christus.'
              : 'Trong cộng đoàn, chúng tôi sống và cầu nguyện cùng nhau như một gia đình trong Chúa Kitô.'}
          </p>
        </div>
      </div>

      <div className="mt-16 p-8 bg-stone-800 text-white rounded-xl text-center">
        <p className="font-serif text-xl mb-4">
          {locale === 'de' 
            ? 'Möchten Sie mehr erfahren?' 
            : 'Bạn muốn tìm hiểu thêm?'}
        </p>
        <p className="text-stone-300">
          {locale === 'de'
            ? 'Besuchen Sie uns zu einem Gottesdienst oder vereinbaren Sie ein persönliches Gespräch.'
            : 'Hãy đến tham dự Thánh lễ hoặc đặt lịch hẹn để trò chuyện.'}
        </p>
      </div>
    </div>
  );
}
