import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './routes';
import HomeScreen from '../screens/HomeScreen';
const RootStack = createStackNavigator();

class AppNavigator extends React.Component {
	render() {
		return (
			<RootStack.Navigator headerMode='none'>
				<RootStack.Screen name={Routes.HOME} component={HomeScreen} />
			</RootStack.Navigator>
		);
	}
}

export default AppNavigator;
