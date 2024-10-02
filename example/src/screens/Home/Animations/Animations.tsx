import { StyleSheet, Text, View, FlatList, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Button from '../../../../../src/Components/Button/Button';
import ThemedText from '../../../../../src/Components/ThemedText/ThemedText';
import Animated, { Easing, FadeInLeft, FadeInRight, FadeOutLeft, SlideInDown, useDerivedValue, useSharedValue, withClamp, withSpring, withTiming } from 'react-native-reanimated';
import PageContainer from '../../../../../src/Components/Container/PageContainer';
import ThemedTextInput from '../../../../../src/Components/ThemedTextInput/ThemedTextInput';

type BoxItem = {
	id: number;
}
const Animations = () => {
	const nav = useNavigation();

	const width = useSharedValue("100%");
	const buttonWidth = useDerivedValue(() => {
		const result = parseInt(width.value)
		console.log(result, 'result')
		const percentage = `${100 - result}%`;
		console.log(percentage, 'percentage')
		return percentage;
	})


	const [boxes, setBoxes] = useState<BoxItem[]>([{ id: 1 }])


	const handleAdd = () => {
		setBoxes(old => [...old, { id: old.length + 1 }])
	}
	const handleDelete = (id: number) => {
		setBoxes(old => old.filter(x => x.id !== id));
	}

	const handleFocusEnter = () => {
		width.value = withTiming("75%");

	}
	const handleFocusLeave = (e) => {
		console.log(e, 'e')
		width.value = withTiming("100%")
	}

	const [textInputValue, setTextInputValue] = useState("")

	const handleTextChange = (val: string) => {
		setTextInputValue(val)
	}
	return (
		<PageContainer>
			<Button variant={"filled"} type="primary" onPress={() => nav.navigate("Index")}>Back to Home</Button>
			<Animated.View entering={FadeInLeft.duration(500)} style={{ backgroundColor: "yellow" }}>
				<ThemedText.Heading>Fade In</ThemedText.Heading>
				<ThemedText.Text>I'm coming up</ThemedText.Text>
			</Animated.View>
			<Animated.FlatList
				data={boxes}
				horizontal
				ItemSeparatorComponent={(props) => <View style={{ width: 20 }}></View>}
				renderItem={({ item, index }) =>
					<Animated.View entering={FadeInRight.duration(200).easing(Easing.ease)} exiting={FadeOutLeft.duration(200).easing(Easing.ease)} style={[{ backgroundColor: "green", width: 50, height: 50 }]} key={index} >
						<Pressable onPress={() => handleDelete(item.id)}><ThemedText.Text>{item.id}</ThemedText.Text></Pressable>
					</Animated.View>} />
			< Button type="primary" onPress={handleAdd} > Add Box</Button >
			<ThemedText.Heading headingSize="h3" >Search bar that resizes on focus</ThemedText.Heading>
			<View style={{ flexDirection: "row" }}>
				<Animated.View style={{ width: width }}>
					<ThemedTextInput style={{ width: '100%' }} onFocus={handleFocusEnter} onBlur={handleFocusLeave} value={textInputValue} onChangeText={handleTextChange} />
				</Animated.View>
				<Animated.View style={[{ width: 0, backgroundColor: "pink" }]}>
					<Button variant="primary">Hello</Button>
				</Animated.View>
			</View>

		</PageContainer >
	)
}

export default Animations

const styles = StyleSheet.create({})