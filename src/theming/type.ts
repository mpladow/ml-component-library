import type { fontConfig } from '../types';
import type { Theme, ThemeConfig } from '../types/Theme';
import type { ThemeName } from './ThemeProvider';

export type ThemeContextType = {
	currentTheme: ThemeConfig;
	currentFontFamilies: fontConfig[];
	handleThemeSet: (theme: ThemeName) => void;
	handleDarkModeSet: (dark: boolean) => void;
}