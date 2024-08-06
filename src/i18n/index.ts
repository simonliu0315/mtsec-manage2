import { createI18n } from "vue-i18n";
import zh from "./zh-tw.json";
import en from "./en.json";

const i18n = new createI18n({
  locale: "zh-TW",
  messages: {
    zh,
    en
  },
  fallbackLocale: "zh-TW",
});

export { i18n };