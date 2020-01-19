import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Kids extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Kids</Text>
            </View>
        );
    }
}
export default Kids;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});