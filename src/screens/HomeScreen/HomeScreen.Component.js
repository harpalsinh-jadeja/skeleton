import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';

const config = {
	androidClientId: '280980614535-28p9hd3rmo3v22rt7irt0bv0hfpbbid1.apps.googleusercontent.com',
	client_secret: 'kP_dpxPd2bNfXDBS5yyWTZ9D'
};

import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

export default class HomeScreen extends React.Component {
	async componentDidMount() {
		await GoogleSignin.hasPlayServices();
		GoogleSignin.configure(config);
	}

	handleGoogleLogin = async () => {
		try {
			LoginManager.logOut();
			const userInfo = await GoogleSignin.signIn();
			const tokens = await GoogleSignin.getTokens();
			console.log('user info:', userInfo);
			console.log('user tokens:', tokens);
			fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${tokens.accessToken}`)
				.then((data) => {
					console.log('data :', data);
				})
				.catch((error) => {
					console.log('error :', error);
				});
		} catch (error) {
			console.log('error :', error);
			if (error.code === statusCodes.SIGN_IN_CANCELLED) {
				console.log('SIGN_IN_CANCELLED');
			}
			else if (error.code === statusCodes.IN_PROGRESS) {
				console.log('IN_PROGRESS');
			}
			else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				console.log('PLAY_SERVICES_NOT_AVAILABLE');
			}
			else {
				console.log('SOMETHING BAD HAPPENS');
			}
		}
	};
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
				<TouchableOpacity
					onPress={async () => {
						await GoogleSignin.revokeAccess();
						await GoogleSignin.signOut();
						LoginManager.logInWithPermissions([
							'email',
							'public_profile'
						]).then(
							function(result) {
								if (result.isCancelled) {
									console.log('Login cancelled');
								}
								else {
									AccessToken.getCurrentAccessToken().then(async (data) => {
										console.log('data :', data);
									});
								}
							},
							function(error) {
								console.log('Login fail with error: ' + error);
							}
						);
					}}
				>
					<Text style={{ fontSize: 24 }}>Fb Login </Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.handleGoogleLogin}>
					<Text style={{ fontSize: 24 }}>Google Login </Text>
				</TouchableOpacity>
			</View>
		);
	}
}
