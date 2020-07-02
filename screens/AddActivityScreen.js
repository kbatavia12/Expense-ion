import React, {useState} from 'react';
import {View , Text, StyleSheet ,TouchableOpacity, Animated, Dimensions,ScrollView} from 'react-native';
import * as firebase from 'firebase';
import AddActivityCard from '../components/AddActivityCard';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/Header';

const height = Dimensions.get('window').height;
const AddActivityScreen = (props) => {
    
    return(
        <ScrollView>
        
            <Header 
                screenName = "Add another activity" 
                backArrowHandler = {() => props.navigation.goBack()}
                />
            
            <AddActivityCard 
                icon = {
                <View style = {styles.iconView}>
                    <View style = {styles.smallView}>
                        <Entypo style = {styles.travelIcon} name = "aircraft-take-off"/>
                    </View>
                </View>}
                name = "Travel"
                onPress = {() => showActionSheet()}
            /> 
            
            <AddActivityCard 
                icon = {
                <View style = {styles.foodView}>
                    <View style = {styles.smallView}>
                        <MaterialCommunity style = {styles.travelIcon} name = "food"/>
                    </View>
                </View>}
                name = "Food"
            /> 
            
            <AddActivityCard 
                icon = {
                <View style = {styles.hospitalView}>
                    <View style = {styles.smallView}>
                    <FontAwesome style = {styles.travelIcon} name = "hospital"/>
                    </View>
                </View>}
                name = "Medical"
            /> 

            <AddActivityCard 
                icon = {
                <View style = {styles.schoolView}>
                    <View style = {styles.smallView}>
                        <MaterialCommunity style = {styles.travelIcon} name = "school"/>
                    </View>
                </View>}
                name = "Educational"
            /> 
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    travelIcon: {
        fontSize: 30,
        color: 'white',    
    },
    iconView: {
        padding: 10,
        backgroundColor: '#450b91',
        width: 80
    },
    smallView: {
        borderRadius: 100,
        borderWidth: 5,
        borderColor: 'white',
        padding: 10
    },
    foodView: {
        padding: 10,
        backgroundColor: '#c7ea46',
        width: 80
    },
    hospitalView: {
        padding: 10,
        backgroundColor: '#dc143c',
        width: 80
    },
    schoolView: {
        padding: 10,
        width: 80,
        backgroundColor: 'black'
    },
    actionSheet: {
        backgroundColor: 'black',
        height: height
    }
})


export default AddActivityScreen;