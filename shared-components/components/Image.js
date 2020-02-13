import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Image extends Component {
    render() {
        return (
            <Image source={this.props.src} style={this.props.style}/>
        );
    }
}
export default Image;