import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../Container/Container'
import { useCustomMediaQuery } from '../../hooks'
import { useTheme } from '../../theming'

type NavbarProps = {
	height: "sm" | "md" | "lg"
}
const Navbar = ({ height }: NavbarProps) => {
	const { currentTheme } = useTheme();

	const HEIGHT = 50;
	return (
		<View style={{ width: "100%", height: HEIGHT, backgroundColor: currentTheme.system.background }}>
			<Container>
				<Text>Navbar</Text>
			</Container>
		</View>
	)
}

export default Navbar

const styles = StyleSheet.create({})