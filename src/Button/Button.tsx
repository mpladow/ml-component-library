import {
	Pressable,
	Text,
	View,
	type PressableProps,
} from 'react-native';

type ButtonProps = {
	disabled: boolean;
	variant: 'filled' | 'outlined' | 'text';
	size: 'sm' | 'md' | 'lg';
	onPress: () => void;
	label: string;
} & PressableProps;

const Button = ({
	disabled,
	variant,
	size,
	children,
	onPress,
	label,
	...rest
}: ButtonProps) => {
	const setButtonSize = () => {
		switch (size) {
			case 'sm':
				return { paddingVertical: 8, paddingHorrizontal: 12 };
			case 'md':
				return { paddingVertical: 12, paddingHorrizontal: 16 };

			case 'lg':
				return { paddingVertical: 16, paddingHorrizontal: 20 };
			default:
				return { paddingVertical: 8, paddingHorrizontal: 12 };
		}
	};

	const handlePress = () => {
		onPress();
	};

	return (
		<Pressable onPress={handlePress} {...rest}>
			<View
				style={[
					setButtonSize(),
					{
						backgroundColor: 'blue',
						borderRadius: 16,
						borderWidth: 2,
						borderColor: 'black',
					},
				]}
			>
				<Text style={{ color: 'white' }}>{label}</Text>
			</View>
		</Pressable>
	);
};

export default Button;
