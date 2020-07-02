import React, { useState, useEffect } from 'react';
import {View , Text, Stylesheet, Button } from 'react-native';
import * as firebase from 'firebase';
import Header from '../components/Header'

const Activities = (props) => {
    var actions = []; 
    useEffect(() => {
        firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/actions').once('value', snapshot => {
            snapshot.forEach(element => actions.push({
                'identifier' : element.key,
                'expenseDetails': element.val().expenseDetails,
                'expenseAddedDate': element.val().expenseAddedDate,
                'expenseAmount': element.val().expenseAmount,
                'expenseType': element.val().expenseType
            }))
        }) 
    }, [])
    
    return(
        <View>
             <Header 
                screenName = "Recent activities" 
                backArrowHandler = {() => props.navigation.goBack()}
                />
                <Button title = "Check" onPress = {() => set()} />
        </View>
    );
}



export default Activities;