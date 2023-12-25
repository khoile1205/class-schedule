"use client";

import { useDictionaryStore } from "@/lib/zustand/dictionary";
import React, { useEffect, useMemo } from "react";
import { Loading } from "@/components";
import { useLoadingStore } from "@/lib/zustand/loading.store";
import { getDictionary } from "@/util/getDictionary";
import { setCookie } from "cookies-next";
import { ToastContainer } from "react-toastify";
import { useUserStore } from "@/lib/zustand/user.store";

type ProviderProps = {
	children: React.ReactNode;
	locale: string;
};

export default function Provider({ children, locale }: ProviderProps) {
	const { user, getProfileWithToken } = useUserStore((state) => state);
	const { isLoading } = useLoadingStore((state) => state);
	const setDictionary = useDictionaryStore((state) => state.setDictionary);

	// useEffect for setting locale in cookies
	useEffect(() => {
		setCookie("locale", locale);
	}, [locale]);

	// useEffect for setting dictionary with locale
	useEffect(() => {
		getDictionary(locale).then((dictionary: any) => {
			setDictionary(dictionary);
		});
	}, [locale]);

	// useEffect for getting user profile with token
	useEffect(() => {
		const fetchData = async () => {
			await getProfileWithToken();
		};

		fetchData();
	}, []);

	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				pauseOnHover
				theme="light"
				className={"text-[11px] md:text-[15px]"}
				toastClassName={"p-3"}
			/>
			<div className="relative">
				{children}
				{isLoading && <Loading></Loading>}
			</div>
		</>
	);
}
