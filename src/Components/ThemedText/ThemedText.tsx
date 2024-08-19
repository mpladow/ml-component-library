import { StyleSheet, Text as NativeText, type StyleProp, type TextProps, type TextStyle } from 'react-native'
import { useTheme, type ThemeName } from '../../theming/ThemeProvider'
import { useMemo } from 'react';
import { TypopgraphySize } from '../../theming';
import Paragraph from './Paragraph';
import Text from "./Text";
import Heading from './Heading';
import type { FontType } from '../../types';

export type ThemedTextProps = {
	style?: StyleProp<TextStyle>;
	color?: string;
	size: "xs" | "default" | "md" | "lg";
	weight: 'regular' | "semibold" | "bold"
	italic: boolean;
	family: FontType
} & TextProps


/**
 * This component interacts directly with the Native text elements. it handles setting the correct font family and default colour themeing
 * @param param0 
 * @returns 
 */
const ThemedText = ({ color, style, weight, size, italic, family, ...rest }: ThemedTextProps) => {
	const { currentTheme, currentFontFamilies } = useTheme()

	const fontFamily = useMemo(() => {
		return currentFontFamilies.find(x => x.type == family)
	}, [currentFontFamilies])

	const textSizing = useMemo(() => {
		switch (size) {
			case "xs":
				return TypopgraphySize.textXSmall
			case "default":
				return TypopgraphySize.textSmall
			case "md":
				return TypopgraphySize.textMedium;
			case "lg":
				return TypopgraphySize.textLarge
			default:
			case "default":
				return TypopgraphySize.textSmall
		}
	}, [size])

	const fontFamilyStyling = useMemo(() => {
		switch (weight) {
			case "bold":
				if (italic) {
					return fontFamily?.boldItalic
				} else {
					return fontFamily?.bold
				}
			case "semibold":
				if (italic) {
					return fontFamily?.mediumItalic
				} else {
					return fontFamily?.medium
				}
			case "regular":
				if (italic) {
					return fontFamily?.regularItalic
				} else {
					return fontFamily?.regular
				}
			default:
				if (italic) {
					return fontFamily?.regularItalic
				} else {
					return fontFamily?.regular
				}
		}
	}, [fontFamily])



	return (
		<NativeText style={[{ color: color ?? currentTheme.text.default }, textSizing, fontFamilyStyling, style]} {...rest} />
	)
}



ThemedText.Paragraph = Paragraph;
ThemedText.Text = Text;
ThemedText.Heading = Heading;

export default ThemedText;
