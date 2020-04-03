import React, { Component } from 'react';
import { Platform, BackHandler, Animated } from 'react-native'
import Snackbar from "react-native-snackbar";
import { Scene, Router, Actions, Overlay, Stack, Drawer, Modal } from 'react-native-router-flux';
import CardStackStyleInterpolator from './components/common/CardStackStyleInterpolator';
import CustomNavbar from './components/common/CustomNavbar';
import {APP_NAME_TEXT} from './config/StringConfig';
//components
import SplashScreen from "./SplashScreen"
import EmployeeComponent from './components/employee/EmployeeComponent';
import LoginComponent from './components/login/LoginComponent';

class RouterComponent extends Component {

    render() {

        return (
                <Router key='main' backAndroidHandler={this.func_androidBackHandler}>
                    <Overlay key="overlay">
                        <Modal key="modal"
                            hideNavBar={false}
                            navBar={CustomNavbar}
                            transitionConfig={() => ({
                                screenInterpolator: CardStackStyleInterpolator.forHorizontal, transitionSpec: {
                                    duration: 250,
                                    timing: Animated.timing,
                                }
                            })}
                        >
                            <Scene key="SplashScreen" component={SplashScreen} backTitle=" " hideNavBar initial />
                            <Scene key="LoginComponent" component={LoginComponent} title="" backTitle=" " hideNavBar type={Platform.OS === "ios" ? "reset" : "push"} />
                            <Scene key="EmployeeComponent" component={EmployeeComponent} title={APP_NAME_TEXT} backTitle=" "/>
                        </Modal>
                    </Overlay>
                </Router>
        );
    }

    func_androidBackHandler = () => {
        if (Actions.currentScene == "EmployeeComponent" || Actions.currentScene == "LoginComponent") {
            Snackbar.show({
                text: "Press EXIT to close the app",
                duration: Snackbar.LENGTH_LONG,
                textColor: "white",
                action: {
                    text: "EXIT",
                    textColor: "red",
                    onPress: () => {
                        this.func_onExit();
                    }
                }
            });

            return true;
        }
        //**Conditions for different pages backhandle */
    };

    //**When exit hits */
    async func_onExit() {
        BackHandler.exitApp();
    }
}

export default RouterComponent;
