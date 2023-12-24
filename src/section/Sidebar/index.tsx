"use client";

import { useUserStore } from "@/lib/zustand/user.store";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import { Button, Menu, MenuProps } from "antd";
import React, { useState } from "react";

// function getItem(
// 	label: React.ReactNode,
// 	key: React.Key,
// 	icon?: React.ReactNode,
// 	children?: SidebarMenuItem[],
// 	type?: "group",
// 	onClick?: MenuProps["onClick"]
// ): SidebarMenuItem {
// 	return {
// 		key,
// 		icon,
// 		children,
// 		label,
// 		type,
// 		onClick,
// 	} as SidebarMenuItem;
// }
// const items: SidebarMenuItem[] = [
// 	getItem("Navigation One", "sub1", <MailOutlined />, [
// 		getItem("Option 1", "1"),
// 		getItem("Option 2", "2"),
// 		getItem("Option 3", "3"),
// 		getItem("Option 4", "4"),
// 	]),
// 	getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
// 		getItem("Option 5", "5"),
// 		getItem("Option 6", "6"),
// 		getItem("Submenu", "sub3", null, [getItem("Option 7", "7"), getItem("Option 8", "8")]),
// 	]),
// 	getItem("Navigation Three", "sub4", <SettingOutlined />, [
// 		getItem("Option 9", "9"),
// 		getItem("Option 10", "10"),
// 		getItem("Option 11", "11"),
// 		getItem("Log out", "12", undefined, undefined, undefined, () => )
// 	]),
// ];

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

export const Sidebar = () => {
	// const [openKeys, setOpenKeys] = useState(["sub1"]);

	// const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
	// 	const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
	// 	if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
	// 		setOpenKeys(keys);
	// 	} else {
	// 		setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
	// 	}
	// };

	const { logOut } = useUserStore((state) => state);
	return (
		// <Menu
		// 	mode="inline"
		// 	openKeys={openKeys}
		// 	onOpenChange={onOpenChange}
		// 	style={{ width: 256 }}
		// 	items={items}
		// />
		<Button onClick={() => logOut()}>Logout</Button>
	);
};
