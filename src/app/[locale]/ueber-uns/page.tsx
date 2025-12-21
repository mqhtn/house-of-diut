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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              )}
              {index === 1 && (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10" />
                </svg>
              )}
              {index === 2 && (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
              {index === 3 && (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              {index === 4 && (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )}
              {index === 5 && (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
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
          className="fixed inset-0 backdrop-blur-md bg-stone-900/20 z-50 flex items-center justify-center p-4 opacity-0 animate-[fadeIn_0.3s_ease-in-out_forwards]"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl transform origin-center scale-95 opacity-0 animate-[zoomIn_0.3s_ease-in-out_forwards]"
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
                {(() => {
                  const lines = content.content[openModal].text.split('\n');
                  const elements = [];
                  let i = 0;
                  
                  while (i < lines.length) {
                    const line = lines[i];
                    const imageMatch = line.match(/\[IMAGE:\s*(.+?)\]|\[HÌNH ẢNH:\s*(.+?)\]/);
                    
                    // Check if next line is also an image
                    const nextLine = i + 1 < lines.length ? lines[i + 1] : null;
                    const nextImageMatch = nextLine ? nextLine.match(/\[IMAGE:\s*(.+?)\]|\[HÌNH ẢNH:\s*(.+?)\]/) : null;
                    
                    if (imageMatch && nextImageMatch) {
                      // Two images side by side
                      const imageName1 = (imageMatch[1] || imageMatch[2]).trim();
                      const imageName2 = (nextImageMatch[1] || nextImageMatch[2]).trim();
                      
                      elements.push(
                        <div key={`side-by-side-${i}`} className="my-6 grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <img
                              src={`/images/about/${imageName1}.png`}
                              alt={imageName1}
                              className="max-w-full h-auto rounded-lg shadow-md inline-block"
                              onError={(e) => {
                                e.currentTarget.src = `/images/about/${imageName1}.jpg`;
                                e.currentTarget.onerror = () => {
                                  e.currentTarget.style.display = 'none';
                                };
                              }}
                            />
                          </div>
                          <div className="text-center">
                            <img
                              src={`/images/about/${imageName2}.png`}
                              alt={imageName2}
                              className="max-w-full h-auto rounded-lg shadow-md inline-block"
                              onError={(e) => {
                                e.currentTarget.src = `/images/about/${imageName2}.jpg`;
                                e.currentTarget.onerror = () => {
                                  e.currentTarget.style.display = 'none';
                                };
                              }}
                            />
                          </div>
                        </div>
                      );
                      i += 2;
                    } else if (imageMatch) {
                      // Single image
                      const imageName = (imageMatch[1] || imageMatch[2]).trim();
                      elements.push(
                        <div key={`image-${i}`} className="my-6 text-center">
                          <img
                            src={`/images/about/${imageName}.png`}
                            alt={imageName}
                            className="max-w-full h-auto rounded-lg shadow-md inline-block"
                            onError={(e) => {
                              e.currentTarget.src = `/images/about/${imageName}.jpg`;
                              e.currentTarget.onerror = () => {
                                e.currentTarget.style.display = 'none';
                              };
                            }}
                          />
                        </div>
                      );
                      i++;
                    } else if (line.trim()) {
                      // Text with bold support
                      const boldRegex = /\*\*(.+?)\*\*/g;
                      const parts = line.split(boldRegex);
                      elements.push(
                        <p key={`text-${i}`} className="text-lg text-stone-700 leading-relaxed mb-4">
                          {parts.map((part, partIdx) => 
                            partIdx % 2 === 1 ? <strong key={partIdx}>{part}</strong> : part
                          )}
                        </p>
                      );
                      i++;
                    } else {
                      i++;
                    }
                  }
                  return elements;
                })()}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Werte-Sektion */}
      {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
      </div> */}

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
