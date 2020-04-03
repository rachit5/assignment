import { LOGIN_USERNAME, LOGIN_PASSWORD, LOGIN_LOADER } from '../config/ActionTypeConfig';
import { USER_DATA } from '../config/Config';
import { Actions } from 'react-native-router-flux';
import Snackbar from "react-native-snackbar";

export const updateLoginFieldsAction = (type, data) => {

	return async (dispatch) => {
		try {
			switch (type) {
				case LOGIN_USERNAME:
					dispatch({
						type: LOGIN_USERNAME,
						payload: data
					});
					break;
				case LOGIN_PASSWORD:
					dispatch({
						type: LOGIN_PASSWORD,
						payload: data
					});
					break;
			}

		} catch (e) {
			console.log(e)
		}
	}
}

export const clickLoginAction = (loginObject) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: LOGIN_LOADER,
				payload: true
			});
			if (JSON.stringify(USER_DATA) === JSON.stringify(loginObject)) {
				Actions.EmployeeComponent();
				Snackbar.show({
					text: "Authentication successful",
					duration: Snackbar.LENGTH_LONG,
					textColor: "white",
				});
			}
			else {
				Snackbar.show({
					text: "Authentication failed",
					duration: Snackbar.LENGTH_LONG,
					textColor: "white",
				});
			}
			dispatch({
				type: LOGIN_LOADER,
				payload: false
			});
		} catch (e) {
			dispatch({
				type: LOGIN_LOADER,
				payload: false
			});
			console.log(e)
		}
	}
}