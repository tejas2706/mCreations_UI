import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class OrderDetails extends Component {

    constructor(props){
        super(props)
        this.state = {
            ordersList : [],
            isLoading: false,
        }
    }

    async UNSAFE_componentWillMount(){
        this.setState({isLoading: true})
        // await this.fetchOrderDetails();
    }

    // fetchOrderDetails = async () => {
    //     let ordersList = await injector.getOrderServiceInst().fetchOrderDetails();
    //     await this.setState({ordersList})

    //     this.setState({isLoading: false})
    // }

    renderFields = () => {
        let cartItems = this.state.ordersList;
        let length = cartItems.length;
        let fields = [];
        if(!length)
        {
            return (
                <View >
                    <Text>Ordered Items List Displayed Here</Text>
                </View>
            );
        }
        for (let i = 0; i < length; i++) {
            fields.push(
                <View>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={styles.cards}>
                            <View style={styles.details}>
                                <Text>{cartItems[i].id}</Text>
                            </View>
                            <View style={styles.status}>
                                <Text>{cartItems[i].status}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

            )
        }
        console.log(fields)
        return fields;
    }



    render() {
        return (
            <View style={styles.container}>
                {this.renderFields()}
            </View>
        );
    }
}
export default OrderDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});