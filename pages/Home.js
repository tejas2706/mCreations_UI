import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Icon from 'react-native-vector-icons/MaterialIcons'
import UserIcons from 'react-native-vector-icons/Foundation'
import Loading from '../pages/Loading'
import { FloatingButton } from '../shared-components';


const images = [
    require('../assets/images/kids/image1.jpeg'),
    require('../assets/images/kids/image2.jpeg'),
    require('../assets/images/kids/image3.jpeg')
]

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: false
        }
    }

    handleRedirection = (redirectedPage)=>{
        this.props.navigation.navigate(redirectedPage)
    }

    render() {

        
        if(this.state.isLoading){
            return ( <Loading></Loading> );
        }
        return (
            <View  style={styles.container } >

                <View style={styles.innerContainer1}>
                    <View style={styles.header}>
                        <Text style={{textAlign: "center", fontSize: 30}}> Free Delivery Over $$$ </Text>
                        <Icon style={{textAlign: "center", fontSize: 30}} name = "search" size={30} ></Icon>
                    </View>
                </View>
                <ScrollView style={styles.innerContainer2} contentContainerStyle={{}}>
                    <View style={styles.slider} >
                        <SliderBox 
                            images={images}
                            autoplay
                            circleLoop
                            resizeMethod={'resize'}
                            resizeMode={'cover'}
                            sliderBoxHeight={350}
                        />
                    </View>
                    <View style={styles.category}>
                        <Text style={{fontSize:35,position:"relative",fontWeight:"bold"}}>Categories</Text>
                    </View>
                    <ScrollView horizontal={true}>
                    <View style={styles.categories} >
                        <TouchableOpacity style={styles.tabs} onPress={()=>this.handleRedirection('Kids')}> 
                            <View style={styles.innerTab}>
                                <Text style={styles.text} > Kids</Text>   
                            </View>
                            <View style={styles.innerTab}>
                                <UserIcons name="torsos-male-female" size={40} style={{padding: 10}} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabs} onPress={()=>this.handleRedirection('Men')}>
                            <View style={styles.innerTab}>
                                <Text style={styles.text}> Men</Text>   
                            </View>
                            <View style={styles.innerTab}>
                                <UserIcons name="torso" size={40} style={{padding: 10}} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabs} onPress={()=>this.handleRedirection('Women')}>
                            <View style={styles.innerTab}>
                                <Text style={styles.text}> Women</Text>   
                            </View>
                            <View style={styles.innerTab}>
                                <UserIcons name="torso-female" size={40} style={{padding: 10}} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabs} onPress={()=>this.handleRedirection('Women')}>
                            <View style={styles.innerTab}>
                                <Text style={styles.text}> Sports</Text>   
                            </View>
                            <View style={styles.innerTab}>
                                <UserIcons name="torso-female" size={40} style={{padding: 10}} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>
                    <View>
                        <TouchableOpacity style={styles.tabs} onPress={()=>this.handleRedirection('Women')}>
                            <View style={styles.innerTab}>
                                <Text style={styles.text}> Previous Orders </Text>   
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <FloatingButton iconName={"add-shopping-cart"} onPress={() => this.handleRedirection("Cart")}></FloatingButton>
            </View> 

        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: { 
        backgroundColor:'white', 
        display:"flex",
        flexDirection: "column",
        alignContent:"center",
        justifyContent: 'center',
        flex: 1,
        // alignItems:'stretch'
    },
    innerContainer1:{
        // flexGrow:0
        
        // flex:1,
        // flexDirection:"column",
        // justifyContent:"space-around"
    },
    innerContainer2:{
        // borderWidth:5
        // flexGrow:2
        // flex:1,
        display:"flex"
        // backgroundColor: "white"

    },
    header:{
        borderWidth:5,
        borderColor:"gray",
        alignItems:"center",
        flexDirection: "row",
        justifyContent:"space-around"

        // flex:1,
        // backgroundColor: "gray",
    },
    slider:{
        borderWidth:5,
        borderColor:"black",
        // height:250
        // flexGrow:3
        // flex:2,
        // paddingRight:60
    },
    category:{
        // borderWidth:10,
        // borderColor:"yellow",
        paddingLeft:10
        // justifyContent:"space-around"
        // flex:1,
        // backgroundColor: "white",
        // paddingLeft:5
    },
    categories:{
        // borderWidth:10,
        // borderColor:"red",
        
        // flex:6,
        // backgroundColor: "white",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems:"stretch",
        // flexWrap: "wrap"
        // alignItems:'stretch'
    },
    tabs:{
        borderWidth:2,
        borderColor:"gray",
        borderRadius:30,
        // flex:1,  
        flexDirection: "row",
        justifyContent: "space-between",
        // paddingRight: 20,
        // borderColor: "black",
        // borderWidth: 1 ,
        // borderRadius:20,
        // backgroundColor:"#F3F09C"
    },
    text:{ 
        // borderWidth:1,
        // borderColor:"green",
        // position:"relative",
        fontSize: 40,
        color:"green"
        // padding: 10
    },
    innerTab:{
        // borderWidth:10,
        // borderColor:"blue",
        alignContent:"center",
        alignItems:"center"
        
    }

});