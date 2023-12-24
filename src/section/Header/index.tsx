"use client";

import React, { useEffect, useState } from "react";
import { Button, Drawer, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import Image from "next/image";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import { useDictionaryStore } from "@/lib/zustand/dictionary";
import { NAVBAR_ROUTES } from "@/components/Navbar/routes";
import { AppString } from "@/util/app.string";
import { LocalizedLink, NavbarItem, Typography } from "@/components";
import AppImages from "@/util/app.image";

export function PageHeader() {
	const [isShowMenuMobile, setIsShowMenuMobile] = useState<boolean>(false);
	const dictionary = useDictionaryStore((state) => state.dictionary);

	useEffect(() => {
		const handleResize = () => {
			const isMobile = window.innerWidth <= 768;
			if (!isMobile) setIsShowMenuMobile(false);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<Header className="h-[50px] py-[50px] container mx-auto bg-transparent flex items-center justify-between">
			<div className="">
				<Link href={"/"} className="flex items-center">
					<Image
						priority
						src={AppImages.logo}
						alt="logo"
						width={30}
						height={30}
						className="rounded"
					></Image>
					<Typography className="ms-4 text-white" size={24} weight={700}>
						{dictionary.app}
					</Typography>
				</Link>
			</div>
			<div className={`items-center hidden w-2/3 md:flex md:order-1 order-2`}>
				<div className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:mt-0 md:border-0 md:bg-transparent list-none md:justify-evenly md:flex-grow">
					{NAVBAR_ROUTES.map((route) => (
						<NavbarItem key={route.key} route={route}></NavbarItem>
					))}
				</div>
			</div>

			{isShowMenuMobile && (
				<Drawer
					placement="right"
					open={isShowMenuMobile}
					onClose={() => setIsShowMenuMobile(!isShowMenuMobile)}
					className="md:hidden text-center"
					contentWrapperStyle={{ width: "60vw" }}
					closable={false}
				>
					{NAVBAR_ROUTES.map((route) => (
						<NavbarItem key={route.key} route={route}></NavbarItem>
					))}
				</Drawer>
			)}

			<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
				<LocalizedLink href={"/login"} className="">
					<Button
						type="primary"
						className="text-white"
						size="large"
						shape="round"
						style={{
							paddingRight: "2.5rem",
							paddingLeft: "2.5rem",
						}}
					>
						{dictionary["login"]}
					</Button>
				</LocalizedLink>
				<Button
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					onClick={() => setIsShowMenuMobile(!isShowMenuMobile)}
					type="text"
				>
					<MenuOutlined />
				</Button>
			</div>
		</Header>
	);
}
