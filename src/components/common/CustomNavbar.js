import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Easing } from 'react-native'
import React from 'react'
import { STATUS_BAR_COLOR, FONT_FAMILY } from '../../config/StyleConfig';

export default class CustomNavbar extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={[styles.container]}>

                <View style={[styles.container]}>
                    {this.func_renderLeft()}
                    {this.func_renderMiddle()}
                    {this.func_renderRight()}
                </View>
            </View>
        )
    }
    func_renderLeft() {
        return (
            <View style={[styles.navBarItem, { flex: 0.1, justifyContent: 'flex-end' }]}>
            </View>
        )
    }

    func_renderMiddle() {
        return (
            <View style={[styles.navBarItem, { flex: 0.8, alignItems: "center" }]}>
                <Text numberOfLines={1} style={{ fontSize: 17, fontFamily: FONT_FAMILY, color: '#fff', fontWeight: Platform.OS == "ios" ? "bold" : "bold" }}>{this.props.title}</Text>
            </View>
        )
    }

    func_renderRight() {
        return (
            <View style={[styles.navBarItem, { flex: 0.1, justifyContent: 'flex-end' }]}>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        height: (Platform.OS === 'ios') ? 64 : 64,
        flexDirection: 'row',
        backgroundColor: STATUS_BAR_COLOR,
        width: '100%'
    },
    navBarItem: {
        flex: 1,
        justifyContent: 'center',
    }
});