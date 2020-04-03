import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { SafeAreaView, StatusBar } from 'react-native'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { STATUS_BAR_COLOR } from './config/StyleConfig';
import Router from './Router';

class Main extends Component {

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <SafeAreaView style={{ flex: 1, backgroundColor: STATUS_BAR_COLOR }}>
                    <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="light-content" />
                    <Router />
                </SafeAreaView>
            </Provider>
        );
    }
}

export default Main;