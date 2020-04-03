import React, { PureComponent } from 'react';
import { Dimensions, View, Image, ImageBackground, Text, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { FONT_FAMILY } from './config/StyleConfig';
import { APP_NAME_TEXT } from './config/StringConfig';

export default class SplashScreen extends PureComponent {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            Actions.LoginComponent();
        }, 2000);
    }

    render() {
        return (
            <ImageBackground
                resizeMode="stretch"
                source={require("./imgs/background.jpg")}
                style={styles.imageBackgroundStyle}
            >
                <View style={styles.parentWrapperViewStyle}>
                    <Image resizeMode="contain" style={{ height: 150, width: 150 }} source={require('./imgs/logo.png')} />
                    <View style={{ marginTop: 15 }}>
                        <Text style={styles.appNameTextStyle}>{APP_NAME_TEXT}</Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    imageBackgroundStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    parentWrapperViewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: Dimensions.get('window').height * 0.125
    },
    appNameTextStyle: {
        fontSize: 18,
        fontFamily: FONT_FAMILY,
        fontWeight: "bold",
        color: '#fff'
    }
})


