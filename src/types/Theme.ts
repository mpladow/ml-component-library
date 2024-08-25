import type { fontConfig } from './fontConfig';

export type Theme = {
	themeConfigs: ThemeConfig[],
	fonts: fontConfig[];
}

export type ThemeConfig = {
	name: string,
	isDark: boolean,
	primary: {
		dark: string;
		light: string;
	},
	secondary: {
		dark: string;
		light: string;
	},
	system: {
		infoRed: string;
		infoLightRed: string;
		infoBlue: string;
		infoLightBlue: string;
		genericDarkGray: string;
		genericLightGray: string;
		infoGreen: string;
		infoLightGreen: string;
		infoYellow: string;
		infoLightYellow: string;
		background: string;
	},
	text: {
		default: string;
		inverted: string;
		disabled: string;
	},
}