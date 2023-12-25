import { LoginSection } from "@/section";
import { Metadata } from "next";
import { useRouter } from "next/router";
import React from "react";

const titles: { [key: string]: string } = {
	en: "Login",
	// add more locales here
};

export default function Pages() {
	const metadata: Metadata = {
		title: titles["en"],
	};

	return <LoginSection></LoginSection>;
}
