'use client';

import { getEventsContent } from '@/lib/content';
import { use, useState } from 'react';

export default function EventsPage({
  params,
}: {
  params: Promise<{ locale: 'de' | 'vi' }>;
}) {
  const { locale } = use(params);
  const content = getEventsContent(locale);
  const [previewPdf, setPreviewPdf] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl text-stone-800 mb-4">{content.title}</h1>
        <p className="text-xl text-stone-600">{content.subtitle}</p>
      </div>

      <section className="mb-16">
        <h2 className="font-serif text-2xl text-stone-800 mb-8 text-center">{content.regularEvents.title}</h2>
        <div className="grid gap-8">
          {content.regularEvents.events.map((event, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-stone-100 p-8 transform transition duration-300 hover:shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl text-stone-800 mb-2">{event.title}</h3>
                  <p className="text-stone-600">{event.description}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-stone-100 text-stone-800 px-4 py-2 rounded-lg font-medium">
                    {event.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-50 rounded-xl p-8 border border-stone-100">
        <h2 className="font-serif text-2xl text-stone-800 mb-2 text-center">{content.specialEvents.title}</h2>
        <p className="text-stone-500 text-center text-sm mb-8">{content.specialEvents.note}</p>

        {(content.specialEvents as any).pdfs?.length > 0 && (
          <div className="flex flex-col gap-6">
            {(content.specialEvents as any).pdfs.map((pdf: { title: string; description: string; file: string }, index: number) => (
              <div key={index} className="bg-white rounded-xl border border-stone-200 overflow-hidden">
                <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center text-stone-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-stone-800 font-medium">{pdf.title}</h3>
                      <p className="text-stone-500 text-sm mt-1">{pdf.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <button
                      onClick={() => setPreviewPdf(previewPdf === pdf.file ? null : pdf.file)}
                      className={`flex items-center gap-2 border px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        previewPdf === pdf.file
                          ? 'bg-stone-800 text-white border-stone-800'
                          : 'border-stone-300 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {previewPdf === pdf.file
                        ? (locale === 'de' ? 'Schließen' : 'Đóng')
                        : (locale === 'de' ? 'Vorschau' : 'Xem trước')}
                    </button>
                    <a
                      href={pdf.file}
                      download
                      className="flex items-center gap-2 bg-stone-800 text-white hover:bg-stone-700 transition-colors duration-200 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      {locale === 'de' ? 'Herunterladen' : 'Tải xuống'}
                    </a>
                  </div>
                </div>
                {previewPdf === pdf.file && (
                  <div className="border-t border-stone-200">
                    <iframe
                      src={pdf.file}
                      className="w-full h-[70vh]"
                      title={pdf.title}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <div className="mt-16 p-8 bg-stone-800 text-white rounded-xl text-center">
        <p className="font-serif text-xl mb-4">
          {locale === 'de' 
            ? 'Sie sind herzlich eingeladen' 
            : 'Chúng tôi trân trọng kính mời'}
        </p>
        <p className="text-stone-300">
          {locale === 'de'
            ? 'Besuchen Sie uns zu einer unserer Veranstaltungen und erleben Sie die Gemeinschaft.'
            : 'Hãy đến tham dự các sự kiện của chúng tôi và trải nghiệm tinh thần cộng đồng.'}
        </p>
      </div>
    </div>
  );
}