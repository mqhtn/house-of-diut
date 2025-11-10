import { homeDe } from './home.de';
import { homeVi } from './home.vi';

type Locale = 'de' | 'vi';

export function getHomeContent(locale: Locale) {
  return locale === 'de' ? homeDe : homeVi;
}