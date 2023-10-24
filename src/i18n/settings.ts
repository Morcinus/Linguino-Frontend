import { Language } from "domain/models/types/languages";

export const fallbackLng: Language = "cs";
export const languages: Array<Language> = [fallbackLng, "en-US"];
export const defaultNS = "common";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
