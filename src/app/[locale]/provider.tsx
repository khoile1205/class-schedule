"use client";

import { useDictionaryStore } from "@/lib/zustand/dictionary";
import React, { useEffect } from "react";
import { Loading } from "@/components";
import { useLoadingStore } from "@/lib/zustand/loading.store";
import { getDictionary } from "@/util/getDictionary";

type ProviderProps = {
	children: React.ReactNode;
	lang: string;
};
export default function Provider({ children, lang }: ProviderProps) {
	const { isLoading } = useLoadingStore((state) => state);
	const setDictionary = useDictionaryStore((state) => state.setDictionary);
	useEffect(() => {
		getDictionary(lang).then((dictionary: any) => {
			setDictionary(dictionary);
		});
	}, [lang, isLoading]);

	return (
		<div className="relative">
			{children}
			{isLoading && <Loading></Loading>}
		</div>
	);
}
