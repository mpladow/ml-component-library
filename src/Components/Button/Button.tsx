import {
	Pressable,
	Text,
	View,
	type PressableProps,
} from 'react-native';
import { useTheme } from '../../theming';
import { useMemo } from 'react';

type ButtonProps = {
	disabled: boolean;
	type: "primary" | "secondary" | "tertiary" | "danger"
	variant: 'filled' | 'outlined' | 'text';
	size: 'sm' | 'md' | 'lg';
	onPress: () => void;
	label: string;
} & PressableProps;

const Button = ({
	disabled,
	variant,
	type,
	size,
	children,
	onPress,
	label,
	...rest
}: ButtonProps) => {
	const { theme } = useTheme();

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
				return { backgroundColor: theme.primary.dark, textColor: theme.text.default }
			case "secondary":
				return { backgroundColor: theme.primary.light, textColor: theme.text.default }
			case "danger":
				return { backgroundColor: theme.system.infoRed, textColor: theme.text.default }
			default:
				return { backgroundColor: theme.primary.dark, textColor: theme.text.default }
		}
	}, [variant])

	const handlePress = () => {
		onPress();
	};

	return (
		<Pressable onPress={handlePress} {...rest}>
			<View
				style={[
					setButtonSize(),
					{ backgroundColor: variantType.backgroundColor },
					{
						borderRadius: 16,
						borderWidth: 2,
						borderColor: variantType.backgroundColor,
					},
				]}
			>
				<Text style={{ color: variantType.textColor }}>{label}</Text>
			</View>
		</Pressable>
	);
};

export default Button;
