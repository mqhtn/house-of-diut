import { getContactContent } from '@/lib/content';

import { use } from 'react';

export default function ContactPage({
  params,
}: {
  params: Promise<{ locale: 'de' | 'vi' }>;
}) {
  const { locale } = use(params);
  const content = getContactContent(locale);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
        <h2 className="text-2xl text-gray-600 mb-8">{content.subtitle}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">{content.address.title}</h3>
            <address className="not-italic text-gray-700">
              <p>{content.address.street}</p>
              <p>{content.address.city}</p>
              <p>{content.address.country}</p>
            </address>
            <div className="mt-4 space-y-2">
              <p>{content.contact.phone}</p>
              <p>{content.contact.email}</p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">{content.visiting.title}</h3>
            <p className="text-gray-700 mb-4">{content.visiting.text}</p>
            <ul className="space-y-2 text-gray-700">
              {content.visiting.times.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </ul>
          </section>
        </div>

        <p className="mt-8 text-gray-700 italic text-center">{content.note}</p>
      </div>
    </main>
  );
}
