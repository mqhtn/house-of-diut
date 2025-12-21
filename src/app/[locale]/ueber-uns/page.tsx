'use client';

import { getAboutContent } from '@/lib/content';
import { use, useState } from 'react';

export default function AboutPage({
  params,
}: {
  params: Promise<{ locale: 'de' | 'vi' }>;
}) {
  const { locale } = use(params);
  const content = getAboutContent(locale);
  const [openModal, setOpenModal] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl text-stone-800 mb-4">{content.title}</h1>
        <p className="text-xl text-stone-600">{content.subtitle}</p>
      </div>

      {/* Grid mit Karten */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.content.map((section, index) => (
          <div
            key={index}
            onClick={() => setOpenModal(index)}
            className="group cursor-pointer bg-white rounded-xl shadow-sm border border-stone-100 p-8 transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="w-16 h-16 mx-auto mb-6 text-stone-400 group-hover:text-stone-600 transition-colors">
              {index === 0 && (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              )}
              {index === 1 && (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              )}
              {index === 2 && (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            <h2 className="font-serif text-2xl text-stone-800 mb-4 text-center group-hover:text-stone-900">
              {section.title}
            </h2>
            <p className="text-stone-600 text-center text-sm line-clamp-3">
              {section.text}
            </p>
            <div className="mt-6 text-center">
              <span className="text-stone-400 text-sm group-hover:text-stone-600 transition-colors">
                {locale === 'de' ? 'Mehr erfahren →' : 'Tìm hiểu thêm →'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {openModal !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-stone-200 p-6 flex justify-between items-center">
              <h2 className="font-serif text-3xl text-stone-800">
                {content.content[openModal].title}
              </h2>
              <button
                onClick={() => setOpenModal(null)}
                className="text-stone-400 hover:text-stone-600 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <div className="prose prose-stone max-w-none">
                <p className="text-lg text-stone-700 leading-relaxed whitespace-pre-line">
                  {content.content[openModal].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Werte-Sektion */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-8 bg-gradient-to-br from-stone-50 to-white rounded-xl shadow-sm border border-stone-100">
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

        <div className="p-8 bg-gradient-to-br from-stone-50 to-white rounded-xl shadow-sm border border-stone-100">
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

        <div className="p-8 bg-gradient-to-br from-stone-50 to-white rounded-xl shadow-sm border border-stone-100">
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

      {/* Call-to-Action */}
      <div className="mt-16 p-8 bg-stone-800 text-white rounded-xl text-center">
        <p className="font-serif text-xl mb-4">
          {locale === 'de' ? 'Möchten Sie mehr erfahren?' : 'Bạn muốn tìm hiểu thêm?'}
        </p>
        <p className="text-stone-300">
          {locale === 'de'
            ? 'Besuchen Sie uns zur Heiligen Messe oder vereinbaren Sie ein persönliches Gespräch.'
            : 'Hãy đến tham dự Thánh lễ hoặc đặt lịch hẹn để trò chuyện.'}
        </p>
      </div>
    </div>
  );
}
