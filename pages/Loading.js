import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons'

class Loading extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon name="spinner-2" size={100} />
                <Text style={{fontSize: 20, padding: 20}}>Loading...</Text>
            </View>
        );
    }
}
export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});