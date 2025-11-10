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
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
        <h2 className="text-2xl text-gray-600 mb-8">{content.subtitle}</h2>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.regularEvents.title}</h3>
          <div className="grid gap-6">
            {content.regularEvents.events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                <p className="text-gray-600 font-medium mb-2">{event.time}</p>
                <p className="text-gray-700">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-6">{content.specialEvents.title}</h3>
          <p className="text-gray-700 italic">{content.specialEvents.note}</p>
        </section>
      </div>
    </main>
  );
}