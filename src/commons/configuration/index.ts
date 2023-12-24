type DefaultConfiguration = {
	defaultPath: string;
	allowedGuestPath: string[];
};

export const config: DefaultConfiguration = {
	defaultPath: "/home",
	allowedGuestPath: ["/home", "/login"],
};
