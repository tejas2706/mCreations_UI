import React, { Component } from "react";
import { 
    View,
    StyleSheet,
} from "react-native";

import { Button, TextInput } from '../shared-components'

class Login extends Component {

    handleClick = ()=>{
        this.props.navigation.navigate("Home")
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder = "Username:" onChangeText={(username)=> this.setState({username})} ></TextInput>
                <TextInput placeholder = "Password:" onChangeText={(password)=> this.setState({password})} ></TextInput>
                <Button title = "Login" onClick = {this.handleClick} />
            </View>
        );
    }
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});