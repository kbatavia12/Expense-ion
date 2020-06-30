import React from 'react';
import {View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Header = props => {
    return (
        <View style = {styles.container} >
            <TouchableOpacity onPress = {props.backArrowHandler} style = {styles.backArrowContainer} >
                <IonIcons name = "md-arrow-round-back" style = {styles.backArrow} />
            </TouchableOpacity>
            <View style = {styles.screenNameView}>
                <Text style = {styles.screenNameText} >{props.screenName}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: width,
        backgroundColor: '#399787',
        flexDirection: 'row'
    },
    backArrowContainer: {
        height: 50,
        width: width *0.15 ,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backArrow: {
        color: 'white',
        fontSize: 40,
    },
    screenNameView: {
        height: 50,
        width: width * 0.85,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    screenNameText: {
        color: 'white',
        fontSize: 24
    }
    
})

export default Header;