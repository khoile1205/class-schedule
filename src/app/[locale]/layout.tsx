import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Provider from "./provider";

const karla = localFont({
	src: [
		{
			path: "../../../public/fonts/karla/static/Karla-Bold.ttf",
			style: "normal",
			weight: "700",
		},
		{
			path: "../../../public/fonts/karla/static/Karla-Regular.ttf",
			style: "normal",
			weight: "400",
		},
		{
			path: "../../../public/fonts/karla/static/Karla-SemiBold.ttf",
			style: "normal",
			weight: "600",
		},
		{
			path: "../../../public/fonts/karla/static/Karla-BoldItalic.ttf",
			style: "italic",
			weight: "700",
		},
		{
			path: "../../../public/fonts/karla/static/Karla-Italic.ttf",
			style: "italic",
			weight: "400",
		},
		{
			path: "../../../public/fonts/karla/static/Karla-SemiBoldItalic.ttf",
			style: "italic",
			weight: "600",
		},
	],
	variable: "--font-karla",
	display: "swap",
});
const kumbh_sans = localFont({
	src: [
		{
			path: "../../../public/fonts/kumbh_sans/static/KumbhSans-Bold.ttf",
			style: "normal",
			weight: "700",
		},
		{
			path: "../../../public/fonts/kumbh_sans/static/KumbhSans-Regular.ttf",
			style: "normal",
			weight: "400",
		},
		{
			path: "../../../public/fonts/kumbh_sans/static/KumbhSans-SemiBold.ttf",
			style: "normal",
			weight: "600",
		},
	],
	display: "swap",
	variable: "--font-kumbh-sans",
});

type LayoutPages = {
	params: { locale: string };
	children: React.ReactNode;
};
export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children, params }: LayoutPages) {
	const { locale } = params;
	return (
		<html lang={locale} className={`${karla.variable} ${kumbh_sans.variable}`}>
			<body>
				<Provider lang={locale}>{children}</Provider>
			</body>
		</html>
	);
}
