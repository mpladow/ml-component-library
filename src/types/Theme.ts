export type Theme = {
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
	},
	text: {
		default: string;
		inverted: string;
		disabled: string;
	}
}