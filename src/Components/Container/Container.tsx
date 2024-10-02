import { useEffect, useMemo } from 'react';
import { Animated as RNAnimated, ScrollView, StyleSheet, Text, View, type StyleProp, type ViewProps, type ViewStyle } from 'react-native'
import { useCustomMediaQuery } from '../../hooks';
import { padding } from '../../theming';
import type { ScrollViewProps } from 'react-native/types';

export type ContainerProps = {
	isScrollable?: boolean;
	contentContainerStyle?: StyleProp<ViewProps>,
	centered?: boolean,
	noPadding?: boolean,
	removePaddingY?: boolean;
	removePaddingX?: boolean;
	alignment?: "centered" | "left" | "right"
	containersInRow: 1 | 2 | 3,
} & ViewProps & ScrollViewProps
const Container = ({ isScrollable = false, contentContainerStyle, removePaddingY, removePaddingX, alignment, noPadding, children, style, containersInRow, ...rest }: ContainerProps) => {
	const size = useCustomMediaQuery();
	useEffect(() => {
	}, [size])

	const width = useMemo(() => {
		console.log(size, "X")
		if (size.isSmallDevice)
			return "100%"
		if (size.isMediumDevice)
			switch (containersInRow) {
				case 1:
					return "100%"
				case 2:
					return "50%"
				case 3:
					return "33.3%"
				default:
					break;
			}

		if (size.isLargeDevice || size.isExtraLargeDevice)
			switch (containersInRow) {
				case 1:
					return "100%"
				case 2:
					return "50%"
				case 3:
					return "33.3%"
				default:
					break;
			}
		return "75%"
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
		isScrollable ? <RNAnimated.ScrollView contentContainerStyle={[!noPadding && { padding: mediaQuerySizing.padding }, removePaddingY && { paddingVertical: 0 }, removePaddingX && { paddingHorizontal: 0 }, contentContainerStyle]}
			keyboardShouldPersistTaps="always"
			alwaysBounceVertical={false}
			showsVerticalScrollIndicator={false}
			style={[{ flex: 1 }, alignment && setAlignment, style]} onScroll={rest.onScroll}>{children}</RNAnimated.ScrollView> : <View style={[{ width: width }, !noPadding && { padding: mediaQuerySizing.padding }, removePaddingY && { paddingVertical: 0 }, removePaddingX && { paddingHorizontal: 0 }, alignment && setAlignment, style]}>{children}</View >
	)
}

export default Container

