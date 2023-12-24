import { MenuProps } from "antd";

export {};
declare global {
	export type SidebarMenuItem = Required<MenuProps>["items"][number];
}
