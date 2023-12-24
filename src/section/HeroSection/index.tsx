"use client";

import { Typography } from "@/components";
import { useDictionaryStore } from "@/lib/zustand/dictionary";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

export function HeroSection() {
	const { dictionary, locale } = useDictionaryStore((state) => state);
	return (
		<div className="pt-2 h-[82vh] text-center md:w-5/12 w-3/4 mx-auto flex items-center justify-center flex-col">
			<Button
				type="primary"
				className="hover:!bg-white hover:!text-gray-700 text-white capitalize mb-5 py-3"
				size="large"
				shape="round"
				style={{
					color: "#D89925",
					background: "rgba(255, 255, 255, 0.05)",
					paddingInline: "30px 30px",
					padding: "10px 30px",
					height: "auto",
				}}
			>
				{dictionary["get-your-free-consultation-now"]}
			</Button>
			<Typography size={48} weight={700} family={"kumbh_sans"} className="text-white mb-4">
				{dictionary["hero-section-title"]}
			</Typography>
			<Typography size={16} weight={400} family={"karla"} className="text-white mb-5">
				{dictionary["hero-section-description"]}
			</Typography>
			<Link href="/login">
				<Button
					type="primary"
					className="text-white capitalize"
					size="large"
					shape="round"
					style={{
						paddingRight: "2.5rem",
						paddingLeft: "2.5rem",
						padding: "10px 30px",
						height: "auto",
					}}
				>
					{dictionary["get-started"]}
				</Button>
			</Link>
		</div>
	);
}
