import React from 'react';
import { View, Text } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
export default class App extends React.Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: 'white',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Text style={{ fontSize: 24 }}>Fb Login </Text>
				<LoginButton
					permissions={[
						'public_profile',
						'email'
					]}
					onLoginFinished={(error, result) => {
						if (error) {
							console.log('login has error: ', result, error);
						}
						else if (result.isCancelled) {
							console.log('login is cancelled.');
						}
						else {
							AccessToken.getCurrentAccessToken().then((data) => {
								console.log('accessToken :', data.accessToken.toString());
							});
						}
					}}
					onLogoutFinished={() => console.log('logout.')}
				/>
			</View>
		);
	}
}
