import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/routers/index';
import configureStore from './src/stores';

const store = configureStore();
export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<NavigationContainer>
					<StatusBar barStyle={'dark-content'} />
					<AppNavigator />
				</NavigationContainer>
			</Provider>
		);
	}
}
