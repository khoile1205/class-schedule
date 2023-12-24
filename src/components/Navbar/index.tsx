import { useDictionaryStore } from "@/lib/zustand/dictionary";
import { AppString } from "@/util/app.string";
import Link from "next/link";
import React from "react";
import { Typography } from "..";

interface NavbarItemProps {
	route: any;
}
export function NavbarItem({ route }: NavbarItemProps) {
	const dictionary = useDictionaryStore((state) => state.dictionary);
	return (
		<div key={route.key}>
			<Link
				href={route.key}
				className="block py-4 rounded md:p-0 hover:!text-gray-400"
				aria-current="page"
			>
				<Typography
					size={"custom"}
					className="text-20 text-grey-300 md:text-[15px] md:text-white capitalize "
				>
					{dictionary[route.label as AppString]}
				</Typography>
			</Link>
		</div>
	);
}
