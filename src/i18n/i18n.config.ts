export const i18n = {
	defaultLocale: "en",
	locales: ["en", "vi"],
};

export type I18nConfig = typeof i18n;
export type Locale = I18nConfig["locales"][number];
