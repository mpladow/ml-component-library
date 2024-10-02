import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Index from './Index/Index';
import Navbar from '../../../../src/Components/Navbar/Navbar';
import Animations from './Animations/Animations';


const Stack = createNativeStackNavigator();
const HomeStack = () => {
	return (
		<Stack.Navigator initialRouteName="Index" screenOptions={{
			header: (props) =>
				<Navbar height={'sm'} heading={props.options.title} leftIcon={<View></View>} rightIcons={<View></View>} />
		}}>
			<Stack.Screen
				name="Index"
				component={Index}
				options={{ title: 'Welcome' }}
			/>
			<Stack.Screen
				name="Animations"
				component={Animations}
				options={{ title: 'Animations' }}
			/>
		</Stack.Navigator>
	)
}

export default HomeStack

