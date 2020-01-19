import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'


class UnderConstruction extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon name="warning" size={100} />
                <Text>Under Construction</Text>
            </View>
        );
    }
}
export default UnderConstruction;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});