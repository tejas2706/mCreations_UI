import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Alert
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Cards } from '../shared-components';
import Loading from "./Loading";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions";
// import { Image } from '../shared-components'

const injector = require("../injector")

class Kids extends Component {

    constructor(props){
        super(props)
        this.state = {
            productsList : [],
            isLoading: false,
            cartState:[]
        }
    }

    async UNSAFE_componentWillMount(){
        this.setState({isLoading: true})
        await this.fetchProductDetails();
    }

    fetchProductDetails = async ()=>{
        let productsList = await injector.getProductServiceInst().fetchProductDetails();
        await this.setState({productsList, cartState: new Array(productsList.length)})

        this.setState({isLoading: false})
    }

    handleClick =(index)=>{
        this.setState((state)=>{
            state.cartState[index] = 1;
        })
        Alert.alert(String(this.state.cartState[index]))

    }

    renderIcon = (product) => {
        // console.warn(props)
        // let filtered = []
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

    renderFields = ()=> {
        let productsList = this.state.productsList;
        let length = productsList.length;
        let fields = [];
        for(let i = 0; i < length; i++){
            fields.push(
                <View style={styles.cards}>
                    <View style={styles.imgView}>
                        <Image source={require('../assets/images/kids/image1.jpeg')} style={styles.img}></Image>
                    </View>
                    <View style={styles.details}>
                        <Text>{productsList[i].name}</Text>
                        <Text>{productsList[i].price}</Text>
                        <Text>{productsList[i].quantity}</Text>
                        <Text>{productsList[i].brand}</Text>
                    </View>
                    <View style={styles.icon}>
                        {this.renderIcon(productsList[i])}                     
                    </View>
                </View>
            )
    }
        return fields;
    }

    render() {

        if(this.state.isLoading){
            return (
                <Loading />
            )
        }
        return (
            <ScrollView style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.text}> KIDS </Text>
                    <Icon name = "search" size={30} style={{...styles.cartIcon,paddingRight:20}} ></Icon>
                </View>
                    {this.renderFields()}
                    {/* <Cards list={this.state.productsList} /> */}
            </ScrollView>
        );
    }
}

const mapStateToProps =  (state)=>{
    console.warn(state)
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
// mapDispatchToProps
export default connect(mapStateToProps,mapDispatchToProps)(Kids);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title:{
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 20,
        paddingLeft: 20
    },
    cards:{
        flex:1,
        flexDirection: "row",
        justifyContent:"space-evenly",
        borderWidth: 1
    },
    imgView:{
        flex:1,
        padding: 10
    },
    img:{
        width: 50,
        height: 50,
    },
    details:{
        flex:2
    },
    icon:{
        flex:1,
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingTop: 10,
        paddingRight: 10

    },
    text:{
        fontSize: 30
    },
    // cartIcon:{
    //     paddingRight:20,
    //     paddingTop: 20
    // }
});