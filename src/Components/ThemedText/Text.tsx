import type { PropsWithChildren } from 'react';
import ThemedText, { type ThemedTextProps } from './ThemedText'
import type { TextPropsAndroid, TextPropsIOS, TextProps as NativeTextProps } from 'react-native';

export type TextProps = {
	weight?: ThemedTextProps["weight"];
	italic?: ThemedTextProps["italic"];
	size?: ThemedTextProps["size"];
	family?: ThemedTextProps["family"];
	style?: ThemedTextProps["style"];
	color?: ThemedTextProps["color"]; // this can be externally set
} & PropsWithChildren & NativeTextProps & TextPropsIOS & TextPropsAndroid

/**
 * The default text element. All other variants should use a variation of this component
 * @param param0 
 * @returns 
 */
const Text = ({ weight, color, italic, size, family, children, ...rest }: TextProps) => {
	return (
		<ThemedText weight={weight ?? "regular"} italic={italic ?? false} family={family ?? "primary"} size={size ?? "default"} color={color} {...rest}>{children}</ThemedText>
	)
}

export default Text

