import { getDictionary } from "@/util/getDictionary";

export default async function Page({ params }: any) {
	const dictionary = await getDictionary(params.lang);
	return (
		<>
			<h3>{dictionary.app}</h3>
		</>
	);
}
