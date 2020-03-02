import React, { Component } from "react";
import { 
    Button,
    StyleSheet,
    Alert
} from "react-native";


handleDefaultClick = ()=>{
    Alert.alert("Default click.. Plz provide click event")
}

class ButtonComponent extends Component {
    render() {
        return (
            <Button
            title={this.props.title}
            onPress={this.props.onClick || this.handleDefaultClick}
            color={this.props.color}
            >
            </Button>
        );
    }
}
export default ButtonComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});