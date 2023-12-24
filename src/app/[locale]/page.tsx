import { FooterSection, HeroSection, PageHeader } from "@/section";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Class schedule",
	description: "Test",
};

export default async function Pages() {
	return (
		<div className="bg-hero-section">
			<PageHeader />
			<HeroSection />
			<FooterSection />
		</div>
	);
}
