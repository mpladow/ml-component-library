import { StyleSheet, View } from 'react-native';
import { padding, ThemeProvider } from "../../src/theming/index";
import { useFonts } from 'expo-font';
import { Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_600SemiBold, Montserrat_600SemiBold_Italic, Montserrat_700Bold, Montserrat_700Bold_Italic } from '@expo-google-fonts/montserrat';
import { OpenSans_400Regular, OpenSans_400Regular_Italic, OpenSans_600SemiBold, OpenSans_600SemiBold_Italic, OpenSans_700Bold, OpenSans_700Bold_Italic } from '@expo-google-fonts/open-sans';
import type { fontConfig } from '../../src/types/fontConfig';
import { gptTheme } from '../../src/presetThemes/gptHeme';
import type { PropsWithChildren } from 'react';
import Navbar from '../../src/Components/Navbar/Navbar';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './screens/Home/HomeStack';


export default function App() {
	let [fontsLoaded] = useFonts({
		Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_600SemiBold, Montserrat_600SemiBold_Italic, Montserrat_700Bold, Montserrat_700Bold_Italic, OpenSans_400Regular, OpenSans_400Regular_Italic, OpenSans_600SemiBold, OpenSans_600SemiBold_Italic, OpenSans_700Bold, OpenSans_700Bold_Italic
	})

	const fontConfigHeader: fontConfig = {
		type: "heading",
		family: "Montserrat",
		regular: {
			fontFamily: "Montserrat_400Regular"
		},
		regularItalic: {
			fontFamily: "Montserrat_400Regular_Italic"
		},
		medium: {
			fontFamily: 'Montserrat_600SemiBold'
		},
		mediumItalic: {
			fontFamily: 'Montserrat_600SemiBold_Italic'
		},
		bold: {
			fontFamily: 'Montserrat_700Bold'
		},
		boldItalic: {
			fontFamily: 'Montserrat_700Bold_Italic'
		}
	}
	const fontConfigOpenSans: fontConfig = {
		type: "primary",
		family: "OpenSans",
		regular: {
			fontFamily: "OpenSans_400Regular"
		},
		regularItalic: {
			fontFamily: "OpenSans_400Regular_Italic"
		},
		medium: {
			fontFamily: 'OpenSans_600SemiBold'
		},
		mediumItalic: {
			fontFamily: 'OpenSans_600SemiBold_Italic'
		},
		bold: {
			fontFamily: 'OpenSans_700Bold'
		},
		boldItalic: {
			fontFamily: 'OpenSans_700Bold_Italic'
		}
	}


	const lightThemeCustom = { ...gptTheme, fonts: [fontConfigHeader, fontConfigOpenSans] }

	return (
		<NavigationContainer>
			<ThemeProvider defaultTheme={lightThemeCustom}>
				<HomeStack />
			</ThemeProvider >
		</NavigationContainer>

	);
}