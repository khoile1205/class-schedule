"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const typography = cva("text", {
	variants: {
		family: {
			karla: ["font-karla"],
			kumbh_sans: ["font-kumbh-sans"],
		},
		type: {
			normal: ["normal"],
			bold: ["bold"],
			italic: ["italic"],
		},
		weight: {
			700: ["font-[700]"],
			500: ["font-[500]"],
			400: ["font-[400]"],
		},
		size: {
			96: ["text-[55px] md:text-[6.857em]"],
			64: ["text-[32px] md:text-[4.571em]"],
			48: ["text-[24px] md:text-[3.429em]"],
			43: ["text-[24px] md:text-[3.071em]"],
			40: ["text-[2.857em]"],
			32: ["text-[2.286em]"],
			24: ["text-[18px] md:text-[1.714em]"],
			20: ["text-[11px] md:text-[1.429em]"],
			16: ["text-[1.143em]"],
			14: ["text-[9px] md:text-[1em]"],
			13: ["text-[0.929em]"],
			12: ["text-[0.857em]"],
			11: ["text-[0.786em]"],
			10: ["text-[0.714em]"],
			9: ["text-[0.643em]"],
			custom: [""],
		},
		wrap: {
			wrap: ["whitespace-normal"],
			nowrap: ["whitespace-nowrap overflow-hidden text-ellipsis"],
			fade: ["nowrap-fade"],
		},
	},
	compoundVariants: [{ family: "karla", size: 64, class: "leading-[40px] sm:leading-[64px]" }],
	defaultVariants: {
		family: "kumbh_sans",
		size: 14,
		weight: 400,
		wrap: "wrap",
	},
});

export interface TypographyProps
	extends React.HTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof typography> {}

export const Typography: React.FC<TypographyProps> = ({
	className,
	family,
	size,
	type,
	wrap,
	weight,
	...props
}) => <div className={typography({ type, family, size, weight, wrap, className })} {...props} />;
