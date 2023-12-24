const dictionaries: { [key: string]: () => Promise<any> } = {
	en: () => import("../../public/locales/en/common.json").then((module) => module.default),
	vi: () => import("../../public/locales/vi/common.json").then((module) => module.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) => dictionaries[locale]();
