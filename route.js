import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Login from './pages/Login';
import Home from './pages/Home';
import Kids from './pages/Kids';
import Men from './pages/Men';
import Women from './pages/Women';
import UnderConstruction from './pages/UnderConstruction'
import Error from './pages/Error'

const Navigation = createStackNavigator({
    "Login": {screen: Login},
    "Home": {screen: Home},
    "Kids": {screen: Kids},
    "Men": {screen: UnderConstruction},
    "Women": {screen: Error},
    
})

export default createAppContainer(Navigation);