const dictionaries: Record<string, () => Promise<{ [key: string]: string }>> = {
	en: () => import("../dictionaries/en.json").then((r) => r.default),
	vi: () => import("../dictionaries/vi.json").then((r) => r.default),
};

export const getDictionary = (lang: keyof typeof dictionaries) => {
	return dictionaries[lang]();
};
