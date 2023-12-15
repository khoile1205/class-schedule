import { Metadata } from "next";
import { getDictionary } from "./dictionary";

interface PageProps {
	dictionary: Record<string, string>;
}

interface ServerSideProps {
	params: {
		lang: string;
	};
}

export const metadata: Metadata = {
	title: "Test Server",
	description: "Test",
};

export default async function Pages({ params: { lang } }: ServerSideProps) {
	const dictionary = await getDictionary(lang);
	return (
		<>
			<h3>{dictionary.app}</h3>
		</>
	);
}
