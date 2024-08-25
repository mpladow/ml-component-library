import { StyleSheet, Text, View, type ViewProps } from 'react-native'
import React, { useMemo } from 'react'
import { useCustomMediaQuery } from '../../hooks'

type WrapperProps = {
	defaultDirection: "row" | "column"
} & ViewProps

const Wrapper = ({ defaultDirection, children, style, ...rest }: WrapperProps) => {
	let mq = useCustomMediaQuery();

	const setDirection = useMemo(() => {
		if (mq.isLargeDevice || mq.isExtraLargeDevice) {
			return "row"
		}
		if (mq.isMediumDevice || mq.isSmallDevice) {
			return "column"
		}
		return defaultDirection;
	}, [mq])

	return (
		<View style={[{ flexDirection: setDirection }, style]} {...rest}>
			{children}
		</View>
	)
}

export default Wrapper

