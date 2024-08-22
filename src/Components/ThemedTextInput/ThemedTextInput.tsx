import { forwardRef, useState } from 'react';
import { StyleSheet, Text, View, type TextInputProps, TextInput as NativeTextInput, Platform } from 'react-native'
import TextInputLabel from './components/TextInputLabel';
import { borderRadius, useTheme } from '../../theming';

type CustomTextInputProps = {
	label?: string;
	isRequired?: boolean;
	editable?: boolean;
	secureText?: boolean;
	leftIcon: any; // pass through an icon name and the icon will be set automatically
	/**
	 * Display a clear button on the right of the input field
	 */
	clearButton?: boolean;
} & TextInputProps
const ThemedTextInput = forwardRef<NativeTextInput, CustomTextInputProps>(({ label, isRequired, style, editable, secureText, ...rest }: CustomTextInputProps, ref) => {
	const { currentTheme } = useTheme()
	const [focused, setFocused] = useState(false)
	return (
		<View>
			{label && <TextInputLabel isRequired={isRequired}>{label}</TextInputLabel>}
			<NativeTextInput secureTextEntry={secureText} editable={editable} {...rest} style={[style, styles.textInput, editable && { backgroundColor: currentTheme.text.disabled }, focused ? { borderColor: currentTheme.system.infoBlue } : { borderColor: currentTheme.system.genericDarkGray }, Platform.select({ web: { outlineColor: currentTheme.system.infoBlue } })]}
				onBlur={(e) => { setFocused(false); rest.onBlur && rest.onBlur(e) }}
				showSoftInputOnFocus
				onFocus={(e) => {
					console.log("focussed")
					setFocused(true);
					rest.onFocus && rest.onFocus(e);
				}} ref={ref} />
		</View>
	)

})

export default ThemedTextInput

const styles = StyleSheet.create({
	textInput: {
		padding: 8,
		marginBottom: 8,
		paddingHorizontal: 12,
		borderWidth: 1,
		borderRadius: borderRadius / 2,
	},
	focusedStyleWeb: {
		outlineColor: "blue",
		//  outlineOffset?: string | number,
		//  outlineStyle?: string,
		//  outlineWidth?: string | number, // set to 0 to disable outline
	}
})