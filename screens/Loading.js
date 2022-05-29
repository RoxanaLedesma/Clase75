import React from "react";
import{View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView} from "react-native"

export default class LoadingScreen extends React.Component{
    render(){
        return(
            <view>
                <text>Pantalla de acceso</text>
            </view>
        )
    }
}

const styles=StyleSheet.create({
    loginBox:{
        width:300,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        margin:10,
        paddingLeft:10
    }
})