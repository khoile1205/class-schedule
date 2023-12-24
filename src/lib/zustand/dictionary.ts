import { AppString } from "@/util/app.string";
import { create } from "zustand";

type Dictionary = Record<AppString, string> | { [key: string]: string };

type State = { dictionary: Dictionary; locale: string };

type Action = {
	setDictionary: (dictionary: Dictionary) => void;
	setLocale: (locale: string) => void;
};

export const useDictionaryStore = create<State & Action>((set) => ({
	locale: "vi",
	setLocale: (locale: string) => {
		set(() => ({ locale }));
	},
	dictionary: {},
	setDictionary: async (dictionary) => {
		set(() => ({ dictionary }));
	},
}));
