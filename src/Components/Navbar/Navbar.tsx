import { StyleSheet, Text, View, Animated } from 'react-native'
import React from 'react'
import Container from '../Container/Container'
import { useCustomMediaQuery } from '../../hooks'
import { useTheme } from '../../theming'
import ThemedText from '../ThemedText/ThemedText'

type NavbarProps = {
	height: "sm" | "md" | "lg",
	heading?: string;
	leftIcon: JSX.Element;
	rightIcons: JSX.Element;
	showBack?: boolean;
}
const Navbar = ({ height, heading, leftIcon, rightIcons, showBack }: NavbarProps) => {
	const { currentTheme } = useTheme();

	const HEIGHT = 50;
	return (
		<Animated.View style={{ width: "100%", height: HEIGHT, backgroundColor: currentTheme.system.background }}>
			<Container style={{ alignSelf: "center" }} containersInRow={1}>

				<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: "100%" }}>
					{showBack &&
						<View>
							<ThemedText.Text>Back</ThemedText.Text>
						</View>
					}
					<View>
						<ThemedText.Heading headingSize='h1'>{heading}</ThemedText.Heading>
					</View>
					<View style={{ justifyContent: 'flex-end', alignItems: "center", backgroundColor: "pink" }}>
						<ThemedText.Text>Menu</ThemedText.Text>
					</View>
				</View>
			</Container>
		</Animated.View>
	)
}

export default Navbar

const styles = StyleSheet.create({})