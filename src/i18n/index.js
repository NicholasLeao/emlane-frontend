import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptBR from "./locales/ptBR/ptBR.json";
import enUS from "./locales/enUS/enUS.json";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";



const resources = {
  "pt-BR": ptBR,
  "en-US": enUS,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt-BR",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
