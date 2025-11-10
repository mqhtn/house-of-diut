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
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
        <h2 className="text-2xl text-gray-600 mb-8">{content.subtitle}</h2>
        
        <div className="space-y-12">
          {content.content.map((section, index) => (
            <section key={index} className="prose max-w-none">
              <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
              <p className="text-gray-700 leading-relaxed">{section.text}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
