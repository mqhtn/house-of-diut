import { getEventsContent } from '@/lib/content';

import { use } from 'react';

export default function EventsPage({
  params,
}: {
  params: Promise<{ locale: 'de' | 'vi' }>;
}) {
  const { locale } = use(params);
  const content = getEventsContent(locale);

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
        <h2 className="font-serif text-2xl text-stone-800 mb-4 text-center">{content.specialEvents.title}</h2>
        <p className="text-stone-600 text-center">{content.specialEvents.note}</p>
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