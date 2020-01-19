import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

// NOTE: Please import common components from shared-components
// Eg: import { Button } from './shared-components'
// Add reusable components on shared-components/components and import in index

class Signup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Signup</Text>
            </View>
        );
    }
}
export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});