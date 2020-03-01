import React,{ useEffect } from 'react';
import Route from './route';
import {Provider} from 'react-redux'
import store from './redux/store'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
    useEffect(()=>{
        SplashScreen.hide();
    },[]);
    return (
        <Provider store={store}>
            <Route />
        </Provider>
    );
};

export default App;