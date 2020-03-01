import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Modal,
    Image,
    Alert
} from "react-native";
import { Cards, FloatingButton } from "../shared-components";
import { connect } from "react-redux";
import _ from "lodash";
import { ScrollView } from "react-native-gesture-handler";
const injector = require("../injector")

import { resetCart } from "../redux/actions";

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: true
        }
    }


    renderCount = (product) => {
        let filtered = this.props.cartItems.filter((x) => { return x.id == product.id });
        return (
            <Text style={{ fontSize: 30 }} >{filtered.length}</Text>
        )
    }

    renderFields = () => {
        let cartItems = _.uniqWith(this.props.cartItems, _.isEqual);
        let length = cartItems.length;
        console.log("TCL: Cart -> renderFields -> length", length)
        let fields = [];
        if(!length)
        {
            return (
                <View style={styles.emptyCart}>
                    <Text>Nothing in Cart</Text>
                </View>
            );
        }
        for (let i = 0; i < length; i++) {
            fields.push(
                <View>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={styles.cards}>
                            <View style={styles.imgView}>
                                <Image source={require("../assets/images/kids/image1.jpeg")} style={styles.img} />
                            </View>
                            <View style={styles.details}>
                                <Text>{cartItems[i].name}</Text>
                                <Text>{cartItems[i].price}</Text>
                                <Text>{cartItems[i].quantity}</Text>
                                <Text>{cartItems[i].brand}</Text>
                            </View>
                            <View style={styles.icon}>
                                {this.renderCount(cartItems[i])}
                            </View>
                        </View>
                    </ScrollView>
                </View>

            )
        }
        console.log(fields)
        return fields;
    }

    handleBuy = () => {
        Alert.alert("Confirm Buy", "Are you done?", [{
            text: 'Cancel',
            style: 'cancel',
        },
        {
            text: 'OK',
            onPress: async () => {
                try{
                    let productsToBuy = this.props.cartItems;
                    let response = await injector.getProductServiceInst().placeOrder(productsToBuy);
                    console.log("TCL: Cart -> handleBuy -> response", response.success)
                    if(!response.success)
                        throw err;
                    this.props.resetCart();
                    this.props.navigation.navigate("OrderDetails")
                }catch(err){
                    Alert.alert("Error while placing order","Please check your internet connection and Try Again")
                }
                
            }
        }
        ])
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderFields()}
                <FloatingButton iconName={"arrow-forward"} onPress={this.handleBuy}></FloatingButton>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetCart: () => dispatch(resetCart()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent:"space-evenly"
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
        flex: 2
    },
    icon: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        // paddingTop: 10,
        // paddingRight: 10

    },
    text: {
        fontSize: 30
    },
    searchIcon: {
        paddingRight: 20,
    },
    emptyCart: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});