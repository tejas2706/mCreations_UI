import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Women extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Women</Text>
            </View>
        );
    }
}
export default Women;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});