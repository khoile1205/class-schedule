import { I18NConfig } from "next/dist/server/config-shared";

export const i18nConfig: I18NConfig = {
	defaultLocale: "vi",
	locales: ["en", "vi"],
	localeDetection: false,
};

export type I18nConfig = typeof i18nConfig;
export type Locale = I18nConfig["locales"][number];
