import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    ImageBackground
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
            <ImageBackground source={require('../assets/images/bg.jpg')} style= {styles.backgroundImage} >
                <View style={styles.container}>
                    <Text style={styles.header}>
                        Welcome to MCreations !!
                    </Text>
                    <View style={styles.innerContainer}>
                        <Text style={styles.titleText}>
                            Username:
                        </Text>
                    <TextInput style={{fontSize:20, color:"#094099"}} placeholder="Enter username" onChangeText={(username) => this.setState({ username })} ></TextInput>
                    </View>
                    <View style={styles.innerContainer}>
                    <Text style={styles.titleText}>
                        Password:
                    </Text>
                    <TextInput placeholder="Enter password" onChangeText={(password) => this.setState({ password })} ></TextInput>
                    </View>
                    <View style={styles.button}>
                    <Button title="Login" color='#094099' onClick={this.handleClick} />
                    </View> 
                </View>
            </ImageBackground>
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
        justifyContent: 'center',
    },
    innerContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom:10
    },
    titleText:{
        fontSize: 20,
        paddingRight:30,
        fontWeight:"800"
    },
    header:{
        fontSize:40,
        textAlign: "center",
        paddingBottom: 70,
        fontStyle:"italic",
        fontWeight:"bold"
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    }
    
});