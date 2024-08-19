export type FontType = "heading" | "primary" | "secondary"

export type fontConfig = {
	type: FontType,
	family: string,
	regular: {
		fontFamily: string;
	},
	regularItalic: {
		fontFamily: string;
	}
	medium: {
		fontFamily: string;
	},
	mediumItalic: {
		fontFamily: string;
	}
	bold: {
		fontFamily: string;
	},
	boldItalic: {
		fontFamily: string;
	}
}