import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    ImageBackground
} from "react-native";

import { Button, TextInput } from '../shared-components'

class Login extends Component {

    handleClick = () => {
        this.props.navigation.navigate("Home")
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
export default Login;

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