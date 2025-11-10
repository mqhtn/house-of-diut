'use client';

import { use } from 'react';
import { useState } from 'react';
import { getGalleryContent } from '@/lib/content';
import Image from 'next/image';

interface ImageModalProps {
  image: {
    src: string;
    alt: string;
    caption: string;
  };
  onClose: () => void;
}

function ImageModal({ image, onClose }: ImageModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
         onClick={onClose}>
      <div className="relative max-w-7xl w-full max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-stone-300 transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <figure className="relative w-full h-full">
          <div className="relative h-[80vh]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              quality={95}
            />
          </div>
          <figcaption className="text-white text-center mt-4">
            {image.caption}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

const isValidLocale = (locale: string): locale is "de" | "vi" => {
  return locale === "de" || locale === "vi";
};

export default function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = use(params);
  const locale = isValidLocale(rawLocale) ? rawLocale : "de";
  const content = getGalleryContent(locale);
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    alt: string;
    caption: string;
  }>(null);

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl text-stone-800 mb-4">{content.title}</h1>
          <p className="text-xl text-stone-600">{content.subtitle}</p>
        </div>

        <div className="space-y-16">
          {content.categories.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <div className="text-center mb-8">
                <h2 className="font-serif text-2xl text-stone-800 mb-2">{category.title}</h2>
                <p className="text-stone-600">{category.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:shadow-xl"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
