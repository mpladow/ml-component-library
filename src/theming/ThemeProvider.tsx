
import { createContext, useContext, useState, type PropsWithChildren } from 'react'
import type { ThemeContextType } from './type';
import type { Theme } from '../types/Theme';
import { gptThemeDark, gptThemeLight } from '../presetThemes/gptHeme';

export type ThemeName = "default"

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const ThemeProvider = ({ defaultTheme, children }: { defaultTheme?: Theme } & PropsWithChildren) => {

	const DEFAULT_THEME = gptThemeDark;
	const [theme, setTheme] = useState<Theme>(defaultTheme ?? DEFAULT_THEME)
	const [isDarkMode, setIsDarkMode] = useState(false);


	const handleThemeSet = (themeName: ThemeName) => {
		if (themeName == "default") {
			if (isDarkMode) {
				setTheme(gptThemeDark)
			}
			else {
				setTheme(gptThemeLight);
			}
		}
	}

	const handleDarkModeSet = (dark: boolean) => {
		setIsDarkMode(dark);
		// set the dark mode equivalent for the selected theme.
	}
	return (
		<ThemeContext.Provider value={{ theme, isDarkMode, handleThemeSet, handleDarkModeSet }}>
			{children}
		</ThemeContext.Provider>

	)
}

export default ThemeProvider

export const useTheme = () => {
	const context = useContext(ThemeContext);
	return context;
}