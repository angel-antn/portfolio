import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        greetings: "Hey I'm Angel.",
        presentation: "I'm a",
        ocupation: "Mobile & Web Developer",
        downloadCV: "Download CV",
        experience: "Experience",
        seeWebsite: "See Website",
      },
    },
    es: {
      translation: {
        greetings: "Hey Soy Angel.",
        presentation: "Soy",
        ocupation: "Desarrollador Mobile y Web",
        downloadCV: "Descargar CV",
        experience: "Experiencia",
        seeWebsite: "Ver Sitio Web",
      },
    },
  },
});

export default i18n;
