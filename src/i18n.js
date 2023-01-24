import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
// import translationEN from './locale/en.json'
// import translationAR from './locale/ar.json'
import HttpApi from "i18next-http-backend";

// const resources = {
//   en: {
//     translation: translationEN
//   },
//   ar: {
//     translation: translationAR
//   }
// }

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLangs: ['en', 'fr', 'ar'],
    // resources,
    // lng: "en",
    fallbackLng: "en",
    react: {
      useSuspense: false
    },
    detection: {
      order: ['cookie', 'querystring', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json'
    }
  });