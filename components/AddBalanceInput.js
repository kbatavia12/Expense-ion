import React from 'react';
import {View , Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import * as firebase from 'firebase'

import Entypo from 'react-native-vector-icons/Entypo';
import IonIcons from 'react-native-vector-icons/Ionicons';


const AddBalanceInput = props => {
    
        
    
    return(
        <View style = {styles.container}>
            <View style = {styles.mainView}>
                <View style = {{flexDirection: 'row'}}>
                    <Text style = {styles.addText}>₹</Text>
                    <TextInput onChangeText = {props.onChange} style = {styles.input} placeholder = "Enter money in rupees.."/>
                </View>
                <View style = {{flexDirection: 'row', marginLeft: -40}}>
                    <Entypo onPress = {props.crossPress} name = "circle-with-cross" style = {styles.plus} />
                    <IonIcons onPress = {props.tickPress} name = "ios-checkmark-circle-outline" style = {styles.plus} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height : 80,
    },
    mainView: {
        flexDirection: 'row',
    },
    plus: {
        fontSize: 50,
        alignSelf: 'center',
        color: '#399787',
        marginHorizontal: 5
    },
    addText: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 10,

    },
    input: {
        borderBottomColor: '#a9a',
        borderBottomWidth: 0.5,
        marginVertical: 20,
        width: '70%'
    }
})

export default AddBalanceInput;