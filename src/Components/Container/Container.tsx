import { useMediaQuery } from '@uidotdev/usehooks';
import { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, type StyleProp, type ViewProps } from 'react-native'
import { useCustomMediaQuery } from '../../hooks';

type ContainerType = {
	isScrollable?: boolean;
	contentContainerStyle?: StyleProp<ViewProps>
} & ViewProps
const Container = ({ isScrollable = true, contentContainerStyle, children, style, }: ContainerType) => {
	const size = useCustomMediaQuery();
	useEffect(() => {
	}, [size])
	return (
		isScrollable ? <ScrollView contentContainerStyle={contentContainerStyle}
			keyboardShouldPersistTaps="always"
			alwaysBounceVertical={false}
			showsVerticalScrollIndicator={false}
			style={[{ flex: 1 }, style]}>{children}</ScrollView> : <View style={[{ flex: 1 }, style]}>{children}</View >
	)
}

export default Container

