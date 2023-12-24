"use client";

import { useDictionaryStore } from "@/lib/zustand/dictionary";
import Link, { LinkProps } from "next/link";
import React from "react";

interface LocalizedLinkProps extends LinkProps, React.HTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
}

export function LocalizedLink({ href, className, children, ...props }: LocalizedLinkProps) {
	const { locale } = useDictionaryStore((state) => state);

	return (
		<Link href={`${href}`} className={className} {...props}>
			{children}
		</Link>
	);
}
