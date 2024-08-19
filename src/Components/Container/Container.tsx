import { ScrollView, StyleSheet, Text, View, type StyleProp, type ViewProps } from 'react-native'

type ContainerType = {
	isScrollable?: boolean;
	contentContainerStyle?: StyleProp<ViewProps>
} & ViewProps
const Container = ({ isScrollable = true, contentContainerStyle, children, style, }: ContainerType) => {
	return (
		isScrollable ? <ScrollView contentContainerStyle={contentContainerStyle}
			keyboardShouldPersistTaps="always"
			alwaysBounceVertical={false}
			showsVerticalScrollIndicator={false}
			style={[{ flex: 1 }, style]}>{children}</ScrollView> : <View style={[{ flex: 1 }, style]}>{children}</View >
	)
}

export default Container

