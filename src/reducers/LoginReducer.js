import { LOGIN_USERNAME, LOGIN_PASSWORD, LOGIN_LOADER } from '../config/ActionTypeConfig';

const INITIAL_STATE = {
	login_name: "",
	login_pwd: "",
	login_loader: false
};


export default (state = INITIAL_STATE, action) => {

	switch (action.type) {

		case LOGIN_USERNAME:
			return { ...state, login_name: action.payload };
		case LOGIN_PASSWORD:
			return { ...state, login_pwd: action.payload };
		case LOGIN_LOADER:
			return { ...state, login_loader: action.payload };
		default:
			return state;
	}
}