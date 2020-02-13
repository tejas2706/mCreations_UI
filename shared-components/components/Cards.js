import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Alert
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Image } from '../../shared-components'
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions";


class Cards extends Component {

    renderIcon = (product) => {
        let filtered = this.props.cartItems.filter((x)=> { return x.id == product.id }); 
        if( filtered.length <= 0){
            return (
                <Icon name="add-shopping-cart" size={30} onPress={()=> this.props.addItemToCart(product)}></Icon>
            );
        }else{
            return(
                <View style={{flex:1, flexDirection: "row", justifyContent: "space-around"}}>
                    <Icon name="add-circle-outline" size={30} style={{paddingTop:10}} onPress={()=> this.props.addItemToCart(product)}></Icon>
                    <Text  style = {{fontSize: 30}} >{filtered.length}</Text>
                    <Icon name="remove-circle-outline" size={30} style={{paddingTop:10}} onPress={()=> this.props.removeFromCart(product.id)}></Icon>
                </View>
            );
        }   
    }

    // renderFields = (fieldsToRender)=> {
    //     // let fieldsToRender = fieldsToRender;
    //     let length = fieldsToRender.length;
    //     let fields = [];
    //     for(let i = 0; i < length; i++){
    //         fields.push(
    //             <View style={styles.cards}>
    //                 <View style={styles.imgView}>
    //                     <Image source={require('../../assets/images/kids/image1.jpeg')} style={styles.img}></Image>
    //                 </View>
    //                 <View style={styles.details}>
    //                     <Text>{fieldsToRender[i].name}</Text>
    //                     <Text>{fieldsToRender[i].price}</Text>
    //                     <Text>{fieldsToRender[i].quantity}</Text>
    //                     <Text>{fieldsToRender[i].brand}</Text>
    //                 </View>
    //                 <View style={styles.icon}>
    //                     {this.renderIcon(fieldsToRender[i])}                     
    //                 </View>
    //             </View>
    //         )
    //     }
    //     return fields;
    // }

    render() {
        let fieldsToRender = this.props.fieldsToRender;
        let length = fieldsToRender.length;
        let fields = [];
        for(let i = 0; i < length; i++){
            fields.push(
                <View style={styles.cards}>
                    <View style={styles.imgView}>
                        <Image source={require('../../assets/images/kids/image1.jpeg')} style={styles.img}></Image>
                    </View>
                    <View style={styles.details}>
                        <Text>{fieldsToRender[i].name}</Text>
                        <Text>{fieldsToRender[i].price}</Text>
                        <Text>{fieldsToRender[i].quantity}</Text>
                        <Text>{fieldsToRender[i].brand}</Text>
                    </View>
                    <View style={styles.icon}>
                        {this.renderIcon(fieldsToRender[i])}                     
                    </View>
                </View>
            )
        }
        return fields;
        // return (
        //     <View>
        //         {this.renderFields(this.props.fieldsToRender)}
        //     </View>
        // )
    }
}

const mapStateToProps =  (state)=>{
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addItemToCart: (product) => dispatch(addToCart(product)),
        removeFromCart: (productId) => dispatch(removeFromCart(productId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cards);

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