import { homeDe } from './home.de';
import { homeVi } from './home.vi';
import { aboutDe } from './about.de';
import { aboutVi } from './about.vi';
import { eventsDe } from './events.de';
import { eventsVi } from './events.vi';
import { contactDe } from './contact.de';
import { contactVi } from './contact.vi';
import { galleryDe } from './gallery.de';
import { galleryVi } from './gallery.vi';

type Locale = 'de' | 'vi';

export function getHomeContent(locale: Locale) {
  return locale === 'de' ? homeDe : homeVi;
}

export function getAboutContent(locale: Locale) {
  return locale === 'de' ? aboutDe : aboutVi;
}

export function getEventsContent(locale: Locale) {
  return locale === 'de' ? eventsDe : eventsVi;
}

export function getContactContent(locale: Locale) {
  return locale === 'de' ? contactDe : contactVi;
}

export function getGalleryContent(locale: Locale) {
  return locale === 'de' ? galleryDe : galleryVi;
}