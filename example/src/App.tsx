import { StyleSheet, View, Text } from 'react-native';
import Button from '../../src/Components/Button/Button';
import { ThemeProvider } from "../../src/theming/index";

export default function App() {
	const handleButtonPress = () => {

	}

	return (
		<ThemeProvider>
			<View style={styles.container}>
				<Text>Buttons</Text>
				<Text>Filled and Small</Text>
				<Button disabled={false} variant={'filled'} size={'sm'} onPress={handleButtonPress} label={'Hello World'} type={'primary'} ><Text>HELLO WORLD</Text></Button>
			</View>
		</ThemeProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	box: {
		width: 60,
		height: 60,
		marginVertical: 20,
	},
});
