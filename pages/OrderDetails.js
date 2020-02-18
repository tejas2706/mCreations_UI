import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const injector = require("../injector")
import { ScrollView } from "react-native-gesture-handler";
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
        await this.fetchOrderDetails();
    }

    fetchOrderDetails = async () => {
        let ordersList = await injector.getOrderServiceInst().fetchOrderDetails();
        await this.setState({ordersList})

        this.setState({isLoading: false})
    }


    statusStyle = (statusColor) =>{
        return {
            fontSize: 15,
            color: statusColor
        }
    }

    renderFields = () => {
        let ordersList = this.state.ordersList;
        let length = ordersList.length;
        let fields = [];
        if(!length)
        {
            return (
                <View style={styles.emptyOrderedList}>
                    <Text>Ordered Items List Displayed Here</Text>
                </View>
            );
        }
        for (let i = 0; i < length; i++) {
            let statusColor = ordersList[i].status === "Order Confirmed" ? "green" : "red";
            fields.push(
                <View>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={styles.cards}>
                            <View style={styles.details}>
                                <Text style={styles.textLength}>Order Id: {ordersList[i].id}</Text>
                                <Text style={styles.textLength}>Order Date: {ordersList[i].order_date}</Text>
                            </View>
                            <View style={styles.status}>
                                <Text style={this.statusStyle(statusColor)}>{ordersList[i].status}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            )
        }
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
        flex: 1
    },
    cards:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        padding: 10
    },
    details:{
        flex: 1,
        justifyContent: "space-around",
    },
    status:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    statusText:{
        fontSize: 15
    },
    emptyOrderedList: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});