import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Men extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Men</Text>
            </View>
        );
    }
}
export default Men;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});