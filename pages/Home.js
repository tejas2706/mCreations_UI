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

const images = [
    require('../assets/images/kids/image1.jpeg'),
    require('../assets/images/kids/image2.jpeg'),
    require('../assets/images/kids/image3.jpeg')
]

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    handleRedirection = (redirectedPage)=>{
        this.props.navigation.navigate(redirectedPage)
    }

    render() {
        return (
            <View  style={styles.container } >
                <View style={styles.innerContainer1}>
                    <View style={styles.header}>
                        <Text style={{textAlign: "center", fontSize: 30, padding: 20}}> Free Delivery Over $$$ </Text>
                        <Icon name = "search" size={30} style={{padding: 20}} ></Icon>
                    </View>
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
                </View>
                <ScrollView style={styles.innerContainer2} contentContainerStyle={{flexGrow: 1}}>
                    <View style={styles.category}>
                        <Text style={{fontSize: 40, fontWeight:"bold"}}>Category</Text>
                    </View>
                    <View style={styles.categories} >
                        <TouchableOpacity style={styles.tabs} onPress={()=>this.handleRedirection('Kids')}> 
                            <View style={styles.innerTab}>
                                <Text style={styles.text}> Kids</Text>   
                            </View>
                            <View style={styles.innerTab}>
                                <Text style={styles.text}> Kids</Text>   
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabs} onPress={()=>this.handleRedirection('Men')}>
                            <View style={styles.innerTab}>
                                <Text style={styles.text}> Men</Text>   
                            </View>
                            <View style={styles.innerTab}>
                                <Text style={styles.text}> Men</Text>   
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabs} onPress={()=>this.handleRedirection('Women')}>
                            <View style={styles.innerTab}>
                                <Text style={styles.text}> Women</Text>   
                            </View>
                            <View style={styles.innerTab}>
                                <Text style={styles.text}> Women</Text>   
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>       
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer1:{
        flex:1,
    },
    innerContainer2:{
        flex:1,
        backgroundColor: "green"
        
    },
    header:{
        flex:1,
        backgroundColor: "gray",
        flexDirection: "row",
        justifyContent:"space-evenly"
    },
    slider:{
        flex:4,
        borderColor: "black",
        borderWidth: 3
    },
    category:{
        flex:1,
        backgroundColor: "yellow"
    },
    categories:{
        flex:6,
        backgroundColor: "white",
    },
    tabs:{
        flex:1,  
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 20,
        borderColor: "black",
        borderWidth: 1  
    },
    text:{
        fontSize: 30
    }

});