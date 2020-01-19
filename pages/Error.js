import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'


class Error extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon name="error" size={100} />
                <Text>Something went wrong</Text>
            </View>
        );
    }
}
export default Error;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});