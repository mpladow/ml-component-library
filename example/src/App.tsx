import { StyleSheet, View } from 'react-native';
import Button from '../../src/Components/Button/Button';
import { padding, ThemeProvider } from "../../src/theming/index";
import { useFonts } from 'expo-font';
import { Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_600SemiBold, Montserrat_600SemiBold_Italic, Montserrat_700Bold, Montserrat_700Bold_Italic } from '@expo-google-fonts/montserrat';
import { OpenSans_400Regular, OpenSans_400Regular_Italic, OpenSans_600SemiBold, OpenSans_600SemiBold_Italic, OpenSans_700Bold, OpenSans_700Bold_Italic } from '@expo-google-fonts/open-sans';
import type { fontConfig } from '../../src/types/fontConfig';
import { gptTheme } from '../../src/presetThemes/gptHeme';
import ThemedText from '../../src/Components/ThemedText/ThemedText';
import Container from "../../src/Components/Container/Container"
import ThemedTextInput from "../../src/Components/ThemedTextInput/ThemedTextInput";
import type { PropsWithChildren } from 'react';


export default function App() {
	let [fontsLoaded] = useFonts({
		Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_600SemiBold, Montserrat_600SemiBold_Italic, Montserrat_700Bold, Montserrat_700Bold_Italic, OpenSans_400Regular, OpenSans_400Regular_Italic, OpenSans_600SemiBold, OpenSans_600SemiBold_Italic, OpenSans_700Bold, OpenSans_700Bold_Italic
	})
	const handleButtonPress = () => {

	}
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
		<ThemeProvider defaultTheme={lightThemeCustom}>
			<Container isScrollable={true}>
				<View style={styles.container}>
					<View style={{ marginBottom: padding }}>
						<ThemedText.Heading headingSize="h1">Buttons Section</ThemedText.Heading>
						<ThemedText.Paragraph>Default</ThemedText.Paragraph>
						<ButtonContainer>
							<Button disabled={false} variant={'filled'} size={'sm'} onPress={handleButtonPress} type={'primary'} >
								Primary
							</Button>
						</ButtonContainer>
						<ButtonContainer>
							<Button disabled={false} variant={'filled'} size={'sm'} onPress={handleButtonPress} type={"secondary"} >
								Secondary
							</Button>
						</ButtonContainer>
						<ButtonContainer>
							<Button disabled={true} variant={'filled'} size={'sm'} onPress={handleButtonPress} type={"secondary"} >
								Disabled
							</Button>
						</ButtonContainer>
						<ButtonContainer>
							<Button disabled={false} variant={'filled'} size={'sm'} onPress={handleButtonPress} type="secondary"><ThemedText.Text>Button with a jsx element inside</ThemedText.Text></Button>
						</ButtonContainer>
					</View>
					<View style={{ marginBottom: padding }}>
						<ThemedText.Heading headingSize="h1">Typography</ThemedText.Heading>
						<ThemedText.Heading headingSize="h2">Heading 2</ThemedText.Heading>
						<ThemedText.Heading headingSize="h3">Heading 3</ThemedText.Heading>

						<ThemedText.Text weight="semibold" size="xs">Text and Spans XS</ThemedText.Text>
						<ThemedText.Text weight="semibold">Text and Spans</ThemedText.Text>
						<ThemedText.Text weight="bold">Text and Spans</ThemedText.Text>
						<ThemedText.Text weight="bold" italic={true}>Text and Spans</ThemedText.Text>

						<ThemedText.Text>This is also a span. There is no spacing between this and the above content</ThemedText.Text>

						<ThemedText.Paragraph>This is a paragraph</ThemedText.Paragraph>
						<ThemedText.Paragraph>This is an additional paragraph underneath. Note the spacing between this and the above text.</ThemedText.Paragraph>
					</View>
					<View style={{ marginBottom: padding }}>
						<ThemedText.Heading headingSize="h1">Inputs</ThemedText.Heading>
						<ThemedTextInput label="Test" />
						<ThemedTextInput label="Test" isRequired={true} />
					</View>
				</View>

			</Container>
		</ThemeProvider >
	);
}
const ButtonContainer = ({ children }: PropsWithChildren) => {
	return <View style={{ marginVertical: padding }}>{children}</View>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	box: {
		width: 60,
		height: 60,
		marginVertical: 20,
	},
});
