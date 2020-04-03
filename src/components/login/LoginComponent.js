import React from 'react';
import {
	Text,
	View,
	Dimensions,
	ImageBackground,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	ActivityIndicator
} from 'react-native';
import { STATUS_BAR_COLOR, FONT_FAMILY } from '../../config/StyleConfig';
import { LOGIN_BUTTON_TEXT } from '../../config/StringConfig';
import { updateLoginFieldsAction, clickLoginAction } from "../../actions";
import { LOGIN_USERNAME, LOGIN_PASSWORD } from '../../config/ActionTypeConfig';
import { connect } from "react-redux";
import Snackbar from "react-native-snackbar";

class LoginComponent extends React.PureComponent {

	constructor(props) {
		super(props);
	}

	func_onLoginPressed = () => {
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (this.props.login_name == "") {
			Snackbar.show({
				text: "Please enter email id",
				duration: Snackbar.LENGTH_LONG,
				textColor: "white",
			});
		}
		else if (reg.test(this.props.login_name) == false) {
			Snackbar.show({
				text: "Please enter a valid email id",
				duration: Snackbar.LENGTH_LONG,
				textColor: "white",
			});
		}
		else if (this.props.login_pwd == "") {
			Snackbar.show({
				text: "Please enter password",
				duration: Snackbar.LENGTH_LONG,
				textColor: "white",
			});
		}
		else if (this.props.login_pwd.length < 6) {
			Snackbar.show({
				text: "Please enter a valid password",
				duration: Snackbar.LENGTH_LONG,
				textColor: "white",
			});
		}
		else {
			let loginObject = {
				"username": this.props.login_name.toLowerCase(),//"hruday@gmail.com",
				"password": this.props.login_pwd//"hruday123"
			}
			this.props.clickLoginAction(loginObject)
		}

	}

	render() {
		return (
			<ImageBackground resizeMode="stretch" source={require('../../imgs/background.jpg')} style={styles.imageBackgroundStyle}>
				<View style={styles.parentWrapperViewStyle}>
					<View style={[styles.wrapperViewStyle, { justifyContent: "flex-end" }]}>
						<TextInput
							placeholder="Email id"
							style={styles.textInputStyle}
							keyboardType="default"
							onChangeText={(text) => this.props.updateLoginFieldsAction(LOGIN_USERNAME, text)}
							returnKeyType={'done'}
						/>
					</View>
					<View style={[styles.wrapperViewStyle, { justifyContent: 'flex-start', paddingTop: 10 }]}>
						<TextInput
							placeholder="Password"
							secureTextEntry
							style={styles.textInputStyle}
							keyboardType="default"
							onChangeText={(text) => this.props.updateLoginFieldsAction(LOGIN_PASSWORD, text)}
							returnKeyType={'done'}
						/>
					</View>
					<View style={[styles.wrapperViewStyle, { justifyContent: 'center' }]}>
						<TouchableOpacity
							disabled={this.props.login_loader}
							onPress={this.func_onLoginPressed} style={styles.buttonWrapperViewStyle}>
							{this.props.login_loader ? <ActivityIndicator size="small" color="#fff" />
								:
								<Text style={styles.buttonTextStyle}>{LOGIN_BUTTON_TEXT}</Text>
							}
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		)
	}

}

const styles = StyleSheet.create({
	imageBackgroundStyle: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	parentWrapperViewStyle: {
		height: (Dimensions.get("window").height)*0.46875,
		width: '90%',
		borderRadius: 5,
		backgroundColor: '#FFFBF3',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
		elevation: 10,
		padding: 10
	},
	textInputStyle: {
		borderColor: '#E0E0E0',
		borderWidth: 1,
		height: 40,
		fontSize: 15,
		color: '#494646',
		width: '100%',
		borderRadius: 5,
		paddingHorizontal: 10,
		fontFamily: FONT_FAMILY,
		fontSize: 13
	},
	wrapperViewStyle: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#EFF8FF',
		paddingHorizontal: 5
	},
	buttonWrapperViewStyle: {
		height: 45,
		width: '80%',
		borderRadius: 3,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: STATUS_BAR_COLOR
	},
	buttonTextStyle: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 15,
		fontFamily: FONT_FAMILY
	}
})

const mapStateToProps = ({ login_reducer }) => {
	const { login_name, login_pwd, login_loader } = login_reducer;
	return { login_name, login_pwd, login_loader };
};

export default connect(mapStateToProps, {
	updateLoginFieldsAction, clickLoginAction
})(LoginComponent);