import type { Theme } from '../types/Theme';
import type { ThemeName } from './ThemeProvider';

export type ThemeContextType = {
	theme: Theme
	isDarkMode: boolean;
	handleThemeSet: (theme: ThemeName) => void;
	handleDarkModeSet: (dark: boolean) => void;
}