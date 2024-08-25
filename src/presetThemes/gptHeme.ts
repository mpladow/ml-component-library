import type { Theme, ThemeConfig } from '../types'

export const gptThemeDark: ThemeConfig = {
	name: "gptDarkTheme",
	"isDark": true,
	"primary": {
		"dark": "#003366", // Example hex code for dark primary color
		"light": "#66ccff" // Example hex code for light primary color
	},
	"secondary": {
		"dark": "#660000", // Example hex code for dark secondary color
		"light": "#ff9999" // Example hex code for light secondary color
	},
	"system": {
		"infoRed": "#ff0000", // Example hex code for info red
		"infoLightRed": "#ffcccc", // Example hex code for info light red
		"infoBlue": "#0000ff", // Example hex code for info blue
		"infoLightBlue": "#99ccff", // Example hex code for info light blue
		"genericDarkGray": "#333333", // Example hex code for generic dark gray
		"genericLightGray": "#cccccc", // Example hex code for generic light gray
		"infoGreen": "#00ff00", // Example hex code for info green
		"infoLightGreen": "#ccffcc", // Example hex code for info light green
		"infoYellow": "#ffff00", // Example hex code for info yellow
		"infoLightYellow": "#ffffcc", // Example hex code for info light yellow
		"background": "#000000"

	},
	"text": {
		"default": "#ffffff", // Example hex code for default text color
		"inverted": "#333333", // Example hex code for default text color
		"disabled": "#888888" // Example hex code for disabled text color
	},
}
export const gptThemeLight: ThemeConfig = {
	name: "gptDarkTheme",
	"isDark": false,
	"primary": {
		"dark": "#00274d",     // Example hex code for dark primary color
		"light": "#a3c2e0"     // Example hex code for light primary color
	},
	"secondary": {
		"dark": "#4d0000",     // Example hex code for dark secondary color
		"light": "#e6b3b3"     // Example hex code for light secondary color
	},
	"system": {
		"infoRed": "#e74c3c",          // Example hex code for info red
		"infoLightRed": "#f9b3b3",     // Example hex code for info light red
		"infoBlue": "#3498db",         // Example hex code for info blue
		"infoLightBlue": "#a2c2e0",    // Example hex code for info light blue
		"genericDarkGray": "#2c3e50",  // Example hex code for generic dark gray
		"genericLightGray": "#bdc3c7", // Example hex code for generic light gray
		"infoGreen": "#2ecc71",        // Example hex code for info green
		"infoLightGreen": "#a9dfbf",   // Example hex code for info light green
		"infoYellow": "#f1c40f",       // Example hex code for info yellow
		"infoLightYellow": "#f7f9e9",   // Example hex code for info light yellow
		"background": "#dddddd"
	},
	"text": {
		"default": "#333333",      // Example hex code for default text color
		"inverted": "#ffffff",      // Example hex code for default text color
		"disabled": "#7f8c8d"      // Example hex code for disabled text color
	},
}

export const gptTheme: Theme = {
	themeConfigs: [gptThemeDark, gptThemeLight],
	fonts: []
}