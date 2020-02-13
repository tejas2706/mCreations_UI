import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

class FloatingButtonComponent extends Component {
    render() {
        return (
            <View style={styles.cartbutton}>
                <TouchableOpacity style={styles.floatButton} onPress={this.props.onPress} >
                    <Icon name={this.props.iconName}  size={30} color="#fff" />
                </TouchableOpacity>
            </View>
        );
    }
}
export default FloatingButtonComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cartbutton:{
        flex:1,
        flexDirection: "row",
        paddingRight:20,
        justifyContent: "flex-end"
    },
    floatButton:{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:70,
        position: 'absolute',                                          
        bottom: 10,                                                    
        right: 10,
        height:70,
        backgroundColor:'blue',
        borderRadius:100,
    }
});