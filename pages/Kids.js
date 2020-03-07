import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Alert,
    Button,
    TouchableOpacity,
    
} from "react-native";
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Cards, FloatingButton } from '../shared-components';
import Loading from "./Loading";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions";
// import { Image } from '../shared-components'
import CartPage from './Cart';

const injector = require("../injector")

class Kids extends Component {

    constructor(props) {
        super(props)
        this.state = {
            productsList: [],
            isLoading: false,
            cartState: [],
            modalVisible: false
        }
    }

    async UNSAFE_componentWillMount() {
        this.setState({ isLoading: true })
        await this.fetchProductDetails();
    }

    fetchProductDetails = async () => {
        let productsList = await injector.getProductServiceInst().fetchProductDetails();
        await this.setState({ productsList, cartState: new Array(productsList.length) })

        this.setState({ isLoading: false })
    }

    handleClick = (index) => {
        this.setState((state) => {
            state.cartState[index] = 1;
        })
        Alert.alert(String(this.state.cartState[index]))

    }

    handleAdminEdit = (product) => {
        this.setState({ isModalActive: true,modalVisible: true, productToEdit: product })
    }

    renderIcon = (product) => {
        if (true || this.props.isAdmin) {
            return (
                <Icon style={{iconSize:20}} name="edit" onPress={() => this.handleAdminEdit(product)}></Icon>
            );
        } else {
            let filtered = this.props.cartItems.filter((x) => { return x.id == product.id });
            if (filtered.length <= 0) {
                return (
                    <Icon name="add-shopping-cart" size={30} onPress={() => this.props.addItemToCart(product)}></Icon>
                );
            } else {
                return (
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                        <Icon name="add-circle-outline" size={30} style={{ paddingTop: 10 }} onPress={() => this.props.addItemToCart(product)}></Icon>
                        <Text style={{ fontSize: 30 }} >{filtered.length}</Text>
                        <Icon name="remove-circle-outline" size={30} style={{ paddingTop: 10 }} onPress={() => this.props.removeFromCart(product.id)}></Icon>
                    </View>
                );
            }
        }
    }

    renderFields = () => {
        let productsList = this.state.productsList;
        console.log("Kids -> renderFields -> productsList", productsList)
        let length = productsList.length;
        let fields = [];
        for (let i = 0; i < length; i++) {
            fields.push(
                <View style={styles.cards}>
                    <View style={styles.imgView}>
                        <Image source={require('../assets/images/kids/image1.jpeg')} style={styles.img}></Image>
                    </View>
                    <View style={styles.details}>
                        <Text style={{fontSize:20}}>{productsList[i].productName}</Text>
                        <Text>Price:   Rs.{productsList[i].price}</Text>
                        <Text>Available Quantity:    {productsList[i].availableQuantity}</Text>
                        <Text>Brand:   {productsList[i].brandName}</Text>
                    </View>
                    <View style={styles.icon}>
                        {this.renderIcon(productsList[i])}
                    </View>
                </View>
            )
        }
        return fields;
    }

    // FIXME: Not rendering modal as of now.. will try to fix this
    // renderModal = ()=>{
    //     return <CartPage modalVisible={true}></CartPage>
    // }

    render() {

        if (this.state.isLoading) {
            return (
                <Loading />
            )
        }else if(this.state.isModalActive){
            return(
                <View style={{ borderWidth: 1, borderColor: 'red'}}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            this.setState({isModalActive: false,modalVisible: false})
                        }}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'}}>
                                <View style={{
                                        width: 400,
                                        height: 400,
                                        borderWidth: 1,
                                        borderRadius: 15,
                                        alignItems: "center"}}>
                                            <Text>Product Name: </Text>
                                            <TextInput>{this.state.productToEdit['productName']}</TextInput>
                                            <Text>Price: </Text>
                                            <TextInput>{this.state.productToEdit['price']}</TextInput>
                                            <Text>Availability: </Text>
                                            <TextInput>{this.state.productToEdit['availableQuantity']}</TextInput>
                                            <Text>Brand Name: </Text>
                                            <TextInput>{this.state.productToEdit['brandName']}</TextInput>
                                </View>
                        </View>
                    </Modal>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.text}> KIDS </Text>
                    <Icon name="search" size={30} style={styles.searchIcon} ></Icon>
                </View>
                <View style={styles.scrollContainer}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View>
                            {this.renderFields()}
                            {/* <Cards fieldsToRender={this.state.productsList} /> */}
                        </View>
                    </ScrollView>
                    {/* <Cart onPress={this.renderModal}></Cart> */}
                    <FloatingButton iconName={"add-shopping-cart"} onPress={() => this.props.navigation.navigate("Cart", { lastPage: "Kids" })}></FloatingButton>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems,
        token: state.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch(addToCart(product)),
        removeFromCart: (productId) => dispatch(removeFromCart(productId))
    }
}
// mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Kids);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly"
    },
    title: {
        flex: 1,
    },
    scrollContainer: {
        flex: 10
    },
    title: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 20,
        paddingLeft: 20
    },
    cards: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        borderWidth: 1
    },
    imgView: {
        flex: 1,
        padding: 10
    },
    img: {
        width: 50,
        height: 50,
    },
    details: {
        flex: 2,
        flexDirection:"column",
        // flexWrap:"wrap"
    },
    icon: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingTop: 10,
        paddingRight: 10

    },
    text: {
        fontSize: 30
    },
    searchIcon: {
        paddingRight: 20,
    },
    // cartbutton:{
    //     flex:1,
    //     flexDirection: "row",
    //     paddingRight:20,
    //     justifyContent: "flex-end"
    // },
    // floatButton:{
    //     borderWidth:1,
    //     borderColor:'rgba(0,0,0,0.2)',
    //     alignItems:'center',
    //     justifyContent:'center',
    //     width:70,
    //     position: 'absolute',                                          
    //     bottom: 10,                                                    
    //     right: 10,
    //     height:70,
    //     backgroundColor:'blue',
    //     borderRadius:100,
    //     }
});