import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';


const AddActivityCard = props => {
    return(
        <TouchableOpacity onPress = {props.onPress} style ={styles.container}>
            <View style = {styles.mainView}>
                {props.icon}
                <Text style = {styles.Text}>Add a {props.name} expense</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height : 80,
        elevation: 5,
        marginBottom: 10
    },
    mainView: {
        flexDirection: 'row'
    },
    plus: {
        fontSize: 70,
        alignSelf: 'center',
        color: '#399787'
    },
    addText: {
        fontSize: 30,
        alignSelf: 'center'
    },
    Text: {
        fontSize: 22,
        alignSelf: 'center',
        marginHorizontal: 10
    }
})

export default AddActivityCard;