import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Alert
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Image } from '../../shared-components'

class Cards extends Component {

    renderFields = ()=> {
        let productsList = this.props.list;
        let length = productsList.length;
        // Alert.alert(String(length))
        console.warn(productsList)
        let fields = [];
        for(let i = 0; i < length; i++){
            fields.push(
                <View style={styles.cards}>
                    <View style={styles.imgView}>
                        <Text>Image here</Text>
                        {/* <Image src={require('../../assets/images/kids/image1.jpeg')} style={styles.img}></Image> */}
                    </View>
                    <View style={styles.details}>
                        <Text>{productsList[i].name}</Text>
                        <Text>{productsList[i].price}</Text>
                        <Text>{productsList[i].quantity}</Text>
                        <Text>{productsList[i].brand}</Text>
                    </View>
                    <View style={styles.icon}>
                        <Icon name="add_shopping_cart" size={10}></Icon>
                    </View>
                </View>
            )
        }
        // Alert.alert(String(fields[0]))
        console.warn(fields)
        return fields;
    }

    render() {
        return (
            <View>
                {this.renderFields()}
            </View>
        );
    }
}
export default Cards;

const styles = StyleSheet.create({
    cards:{
        flex:1,
        flexDirection: "row",
        justifyContent:"space-evenly"
    },
    imgView:{
        flex:1
    },
    img:{
        width: 50,
        height: 50
    },
    details:{
        flex:2
    },
    icon:{
        flex:1
    }
});