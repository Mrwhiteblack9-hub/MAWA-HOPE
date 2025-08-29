import 'server-only'

const dictionaries = {
  en: () => import('./en.json').then((m) => m.default),
  fr: () => import('./fr.json').then((m) => m.default),
  zh: () => import('./zh.json').then((m) => m.default)
}
export const getDictionary = async (locale) => dictionaries[locale]() 
