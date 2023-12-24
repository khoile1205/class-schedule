/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
	// i18n: this.,
	trailingSlash: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
		dangerouslyAllowSVG: true,
		disableStaticImages: true,
	},
	experimental: {
		webpackBuildWorker: true,
	},
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.(png|jpe?g|gif|svg|webp)$/i,
			use: [
				{
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "static/images",
						context: "src", // this is the important part
					},
				},
			],
		});
		config.resolve.alias["@"] = path.resolve(__dirname, "src/"); // assuming your source files are in "src" directory

		return config;
	},
};

module.exports = nextConfig;
