import React from 'react';
import Route from './route';
import {Provider} from 'react-redux'
import store from './redux/store'

const App = () => {
    return (
        <Provider store={store}>
            <Route />
        </Provider>
    );
};

export default App;