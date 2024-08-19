
import { createContext, useContext, useMemo, useState, type PropsWithChildren } from 'react'
import type { ThemeContextType } from './type';
import type { Theme } from '../types/Theme';
import { gptTheme, gptThemeDark, gptThemeLight } from '../presetThemes/gptHeme';
import { useFonts } from 'expo-font';

export type ThemeName = "lightTheme" | "darkTheme"

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

type ThemeProviderType = {
	defaultTheme: Theme;
	additioinal?: Theme[];
} & PropsWithChildren
const ThemeProvider = ({ defaultTheme, additioinal, children }: ThemeProviderType) => {
	const [loading, setLoading] = useState(false)
	const DEFAULT_THEME = gptTheme;
	const [themeSet, setThemeSet] = useState<Theme>(defaultTheme ?? DEFAULT_THEME)

	// const [additionalThemes, setAdditionalThemes] = useState<Theme[]>(additioinal ? [defaultTheme, ...additioinal] : [defaultTheme])
	const [isDarkMode, setIsDarkMode] = useState(false);

	const additionalThemes = useMemo(() => {
		return additioinal ? [defaultTheme, ...additioinal] : [defaultTheme]
	}, [additioinal])

	const handleThemeSet = async (themeName: string) => {
		const foundTheme = additionalThemes?.find(x => x.themeConfigs.find(x => x.name == themeName));
		if (foundTheme) {
			setThemeSet(foundTheme);
		}
	}

	const handleDarkModeSet = (dark: boolean) => {
		setIsDarkMode(dark);
		// set the dark mode equivalent for the selected theme.
	}

	const currentTheme = useMemo(() => {
		return themeSet.themeConfigs.find(x => x.isDark == isDarkMode) ?? themeSet.themeConfigs[0] ?? gptThemeLight;
	}, [isDarkMode])

	const currentFont = useMemo(() => {
		return themeSet.fonts ?? DEFAULT_THEME.fonts;
	}, [themeSet])

	return (
		<ThemeContext.Provider value={{ currentTheme, currentFontFamilies: currentFont, handleThemeSet, handleDarkModeSet }}>
			{children}
		</ThemeContext.Provider>

	)
}

export default ThemeProvider

export const useTheme = () => {
	const context = useContext(ThemeContext);
	return context;
}