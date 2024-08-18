import {
	Pressable,
	StyleSheet,
	type PressableProps,
} from 'react-native';
import { borderRadius, useTheme } from '../../theming';
import { useMemo } from 'react';
import ThemedText from '../ThemedText/ThemedText';
import { shadeColor } from '../../utils/colors';

export type PressableState = Readonly<{
	pressed: boolean;
	hovered?: boolean;
	focused?: boolean;
}>;

type ButtonProps = {
	disabled?: boolean;
	type: "primary" | "secondary" | "tertiary" | "danger"
	variant: 'filled' | 'outlined' | 'text';
	/**
	 * shows loading indicator when loading
	 */
	loading?: boolean;
	size: 'sm' | 'md' | 'lg';
	onPress: () => void;
	// label?: string | React.JSX.Element;
} & PressableProps;

const Button = ({
	disabled,
	variant,
	type,
	size,
	children,
	onPress,
	...rest
}: ButtonProps) => {
	const { currentTheme } = useTheme();

	const setButtonSize = () => {
		switch (size) {
			case 'sm':
				return { paddingVertical: 8, paddingHorizontal: 12 };
			case 'md':
				return { paddingVertical: 12, paddingHorizontal: 16 };

			case 'lg':
				return { paddingVertical: 16, paddingHorizontal: 20 };
			default:
				return { paddingVertical: 8, paddingHorizontal: 12 };
		}
	};

	const variantType = useMemo(() => {
		switch (type) {
			case "primary":
				return { backgroundColor: currentTheme.primary.dark, textColor: currentTheme.text.inverted }
			case "secondary":
				return { backgroundColor: currentTheme.primary.light, textColor: currentTheme.text.default }
			case "danger":
				return { backgroundColor: currentTheme.system.infoRed, textColor: currentTheme.text.default }
			default:
				return { backgroundColor: currentTheme.primary.dark, textColor: currentTheme.text.default }
		}
	}, [variant])

	const handlePress = () => {
		onPress();
	};

	return (
		<Pressable {...rest} onPress={handlePress} style={(state) => [
			setButtonSize(),
			{ backgroundColor: state.pressed && !disabled ? shadeColor(variantType.backgroundColor, 20) : variantType.backgroundColor },
			disabled && { opacity: 0.5, cursor: "auto" },
			{ borderRadius: borderRadius, borderWidth: 2 },
			{
				borderColor: state.pressed && !disabled ? shadeColor(variantType.backgroundColor, 20) : variantType.backgroundColor,
			},
		]} >
			{
				typeof children == "string" ?
					<ThemedText.Text style={{ color: variantType.textColor }} numberOfLines={1}>{children}</ThemedText.Text>
					:
					children
			}
		</Pressable >
	);
};

export default Button;

const style = StyleSheet.create({
	defaultStyling: {

	}
})