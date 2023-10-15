import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class StarMapScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Tela do mapa estelar!</Text>
                <TextInput 
                style = {StyleSheet.inputStyle}
                placeholder = "Digite sua latitude"
                placeholderTextColor = "white"
                onChargeText ={(text)=>{
                    this.setState({
                        latitude: text
                    })
                }}>

                </TextInput>
            </View>
        )
    }
}