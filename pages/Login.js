import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    Alert,
} from "react-native";

import { Button, TextInput } from '../shared-components'
import { connect } from "react-redux";
const {addTokenToStore} = require('../redux/actions')

const injector = require('../injector')
class Login extends Component {

    handleClick = async ()=>{
        try{
            let response = await injector.getAuthenticationServiceInst().login({username: this.state.username, password: this.state.password}); 
            if(response.token){
                this.props.addToken(response.token)
                this.props.navigation.navigate("Home")
            }
            else
                throw err;
        }catch(err){
            console.log(err)
            Alert.alert("Login Failed", "Something went wrong, Please check your username/password")
        }
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

const mapDispatchToProps = (dispatch)=>{
    return {
        addToken: (token) => dispatch(addTokenToStore(token)),
    }
}
export default connect(null,mapDispatchToProps)(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});