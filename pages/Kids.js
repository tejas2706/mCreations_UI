import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Cards } from '../shared-components';
import Loading from "./Loading";
import { ScrollView } from "react-native-gesture-handler";
// import { Image } from '../shared-components'

const injector = require("../injector")

class Kids extends Component {


    constructor(props){
        super(props)
        this.state = {
            productsList : [],
            isLoading: false
        }
    }

    async UNSAFE_componentWillMount(){
        this.setState({isLoading: true})
        await this.fetchProductDetails();
    }

    fetchProductDetails = async ()=>{
        let productsList = await injector.getProductServiceInst().fetchProductDetails();
        await this.setState({productsList})
        this.setState({isLoading: false})
    }

    renderFields = ()=> {
        let productsList = this.state.productsList;
        let length = productsList.length;
        let fields = [];
        for(let i = 0; i < length; i++){
            fields.push(
                <View style={styles.cards}>
                    <View style={styles.imgView}>
                        <Text>Image here</Text>
                        {/* <Image src={require('../assets/images/kids/image1.jpeg')} style={styles.img}></Image> */}
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
                    <Text> KIDS </Text>
                    <Icon name = "search" size={30} style={{padding: 20}} ></Icon>
                </View>
                    {this.renderFields()}
                    {/* <Cards list={this.state.productsList} /> */}
            </ScrollView>
        );
    }
}
export default Kids;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title:{
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cards:{
        flex:1,
        flexDirection: "row",
        justifyContent:"space-evenly",
        borderWidth: 1
    },
    imgView:{
        flex:1
    },
    img:{
        // width: 50,
        height: 50
    },
    details:{
        flex:2
    },
    icon:{
        flex:1
    }
});