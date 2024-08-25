import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import Container, { type ContainerProps } from './Container'
import { useCustomMediaQuery } from '../../hooks'
import { padding } from '../../theming'


type PageContainerProps = {

} & ContainerProps
const PageContainer = ({ children, style, contentContainerStyle, ...rest }: PageContainerProps) => {
	const x = useCustomMediaQuery();

	const width = useMemo(() => {
		console.log(x, "X")
		if (x.isSmallDevice || x.isMediumDevice)
			return "100%"

		if (x.isLargeDevice || x.isExtraLargeDevice)
			return "75%"

		return "20%"
	}, [x])


	const containerPadding = useMemo(() => {
		if (x.isSmallDevice || x.isMediumDevice)
			return padding * 2

		if (x.isLargeDevice || x.isExtraLargeDevice)
			return padding * 3

	}, [])

	return (
		<Container style={[{ width: width, alignSelf: "center" }, { padding: padding, height: "100%" }, style]} contentContainerStyle={[{ height: "100%", width: width, alignSelf: "center" }, contentContainerStyle]} {...rest}>
			{children}
		</Container>
	)
}

export default PageContainer

const styles = StyleSheet.create({})