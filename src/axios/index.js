// import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';

// import { BASE_URL } from './config';
// import { Constants, showSnackBar, Messages, isNetworkConnected } from 'src/utils';
// import { Alert, DeviceEventEmitter } from 'react-native';
// import { StackActions } from '@react-navigation/native';
// import Routes from '../router/routes';

// const instance = axios.create({
// 	baseURI: BASE_URL,
// 	timeout: 10000,
// 	headers: {
// 		'Content-Type': 'application/json',
// 		Accept: 'application/json',
// 		'Access-Control-Allow-Origin': '*',
// 		AccessControlAllowMethods: 'GET, POST, PUT, DELETE, OPTIONS'
// 	}
// });

// getToken = async () => {
// 	return await AsyncStorage.getItem(Constants.StorageKey.TOKEN);
// };

// //instance.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;

// /**
//  * Request interceptor
//  * Add Authorization header if it exists
//  * This configuration applies for all requests
//  */
// instance.interceptors.request.use(
// 	async (reqConfig) => {
// 		const isInternet = await isNetworkConnected();
// 		if (!isInternet.isConnected)
// 			return Promise.reject({
// 				response: {
// 					status: 111,
// 					message: showSnackBar(Messages.intenetNotAvailable)
// 				}
// 			});

// 		let accessToken = await AsyncStorage.getItem(Constants.StorageKey.TOKEN);
// 		if (accessToken) {
// 			reqConfig.headers = {
// 				Authorization: `${accessToken}`,
// 				'Content-Type': 'application/json',
// 				Accept: 'application/json',
// 				'Access-Control-Allow-Origin': '*',
// 				AccessControlAllowMethods: 'GET, POST, PUT, DELETE, OPTIONS'
// 			};
// 		}
// 		console.log('reqConfig :', reqConfig);
// 		return reqConfig;
// 	},
// 	(error) => {
// 		return Promise.reject(error);
// 	}
// );

// instance.interceptors.response.use(
// 	(response) => {
// 		return response.data;
// 	},
// 	(error) => {
// 		console.log('req error ', error.response);
// 		if (error.response.status === 503 || error.response.status === 404) {
// 			Alert.alert('Server is unresponsive. Please try again later');
// 		}
// 		// Do something with response error
// 		if (typeof error === 'undefined') {
// 			// request cancelled
// 			// when backend server is not available at all

// 			let serverError = {
// 				data: {
// 					message: Messages.serverError
// 				}
// 			};
// 			return Promise.reject(serverError);
// 		}
// 		else if (typeof error.response === 'undefined') {
// 			// when request is timeout
// 			let serverError = {
// 				data: {
// 					message: Messages.serverError
// 				}
// 			};
// 			return Promise.reject(serverError);
// 		}
// 		else if (error.response.status === 401) {
// 		}
// 		else if (error.response.status === 111) {
// 		}
// 		else {
// 		}
// 		return Promise.reject(error.response);
// 	}
// );

// export default instance;
// `Booking bold height-- card color:orange screen back: white card border orange`;
