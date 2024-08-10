import { StyleSheet, View, Text } from 'react-native';
import Button from '../../src/Button/Button';

export default function App() {
	const handleButtonPress = () => {

	}
	return (
		<View style={styles.container}>
			<Text>Buttons</Text>
			<Text>Filled and Small</Text>
			<Button disabled={false} variant={'filled'} size={'sm'} onPress={handleButtonPress} label={'Hello World'} ><Text>HELLO WORLD</Text></Button>
		</View>
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
