import React, { Component } from "react";
import { 
    TextInput,
    StyleSheet
} from "react-native";

class TextInputComponent extends Component {
    render() {
        return (
            <TextInput
                placeholder={this.props.placeholder }
                onChangeText={this.props.onChangeText}
            ></TextInput>
        );
    }
}
export default TextInputComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});