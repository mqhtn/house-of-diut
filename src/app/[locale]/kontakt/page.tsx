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
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl text-stone-800 mb-4">{content.title}</h1>
        <p className="text-xl text-stone-600">{content.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <section className="bg-white rounded-xl shadow-sm border border-stone-100 p-8 transform transition duration-300 hover:shadow-md">
          <h2 className="font-serif text-2xl text-stone-800 mb-6">{content.address.title}</h2>
          <address className="not-italic space-y-4">
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-stone-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="text-stone-600">
                <p>{content.address.street}</p>
                <p>{content.address.city}</p>
                <p>{content.address.country}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <svg className="w-6 h-6 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-stone-600">{content.contact.phone}</span>
            </div>
            <div className="flex items-center space-x-4">
              <svg className="w-6 h-6 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-stone-600">{content.contact.email}</span>
            </div>
          </address>
        </section>

        <section className="bg-white rounded-xl shadow-sm border border-stone-100 p-8 transform transition duration-300 hover:shadow-md">
          <h2 className="font-serif text-2xl text-stone-800 mb-6">{content.visiting.title}</h2>
          <p className="text-stone-600 mb-6">{content.visiting.text}</p>
          <ul className="space-y-4">
            {content.visiting.times.map((time, index) => (
              <li key={index} className="flex items-center space-x-4">
                <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-stone-600">{time}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-12 p-8 bg-stone-50 rounded-xl border border-stone-100 text-center">
        <p className="text-stone-600 italic">{content.note}</p>
      </div>

      <div className="mt-16 text-center">
        <h2 className="font-serif text-2xl text-stone-800 mb-4">
          {locale === 'de' ? 'Wegbeschreibung' : 'Chỉ đường'}
        </h2>
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409222750506!2d13.372469776816714!3d52.51632723476414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburg%20Gate!5e0!3m2!1sen!2sde!4v1699621436095!5m2!1sen!2sde"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
