import { useEffect, useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View, type StyleProp, type ViewProps, type ViewStyle } from 'react-native'
import { useCustomMediaQuery } from '../../hooks';
import { padding } from '../../theming';

export type ContainerProps = {
	isScrollable?: boolean;
	contentContainerStyle?: StyleProp<ViewProps>,
	centered?: boolean,
	noPadding?: boolean,
	removePaddingY?: boolean;
	removePaddingX?: boolean;
	alignment?: "centered" | "left" | "right"
} & ViewProps
const Container = ({ isScrollable = false, contentContainerStyle, removePaddingY, removePaddingX, alignment, noPadding, children, style, }: ContainerProps) => {
	const size = useCustomMediaQuery();
	useEffect(() => {
	}, [size])

	const width = useMemo(() => {
		console.log(size, "X")
		if (size.isSmallDevice || size.isMediumDevice)
			return "100%"

		if (size.isLargeDevice || size.isExtraLargeDevice)
			return "75%"

		return "20%"
	}, [size])

	const setAlignment = useMemo(() => {
		console.log(alignment, 'alignment')
		if (size.isSmallDevice || size.isMediumDevice) {
			return { alignItems: "stretch", alignSelf: "auto" } as ViewStyle
		}
		switch (alignment) {
			case "centered":
				return { alignItems: "center", alignSelf: "center" } as ViewStyle
			case "left":
				return { alignItems: "flex-start" } as ViewStyle
			case "right":
				return { alignItems: "flex-end" } as ViewStyle
		}
	}, [size, alignment])




	const mediaQuerySizing = useMemo(() => {
		console.log(size, "X")
		if (size.isSmallDevice || size.isMediumDevice)
			return { width: "100%", padding: padding * 2 } as ViewStyle

		if (size.isLargeDevice || size.isExtraLargeDevice)
			return { width: "100%", padding: padding * 2 } as ViewStyle
		return { width: "100%", padding: padding * 2 } as ViewStyle
	}, [size])

	return (
		isScrollable ? <ScrollView contentContainerStyle={[!noPadding && { padding: mediaQuerySizing.padding }, removePaddingY && { paddingVertical: 0 }, removePaddingX && { paddingHorizontal: 0 }, contentContainerStyle]}
			keyboardShouldPersistTaps="always"
			alwaysBounceVertical={false}
			showsVerticalScrollIndicator={false}
			style={[{ flex: 1 }, alignment && setAlignment, style]}>{children}</ScrollView> : <View style={[{ width: width }, !noPadding && { padding: mediaQuerySizing.padding }, removePaddingY && { paddingVertical: 0 }, removePaddingX && { paddingHorizontal: 0 }, alignment && setAlignment, style]}>{children}</View >
	)
}

export default Container

