import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, ScrollView, TextInput} from 'react-native';
import * as firebase from 'firebase';
import Entypo from 'react-native-vector-icons/Entypo'


const height = Dimensions.get('window').height;

const AddActivityCard = props => {
    const [sheetOpen, setSheetOpen] = useState(false);
    const [elevation, setElevation] = useState(5);
    const [expenseDetails, setExpenseDetails] = useState(null);
    const [expenseAmount, setExpenseAmount] = useState(null);
    const [availableBalance, setAvailableBalance] = useState(0);

    const animatedHeight = new Animated.Value(0);

    React.useEffect(() => {
        setExpenseDetails(null);
        setExpenseAmount(null)
        firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/availableBalance').on('value', (snapshot => {
            setAvailableBalance(snapshot.val())
        }))
    }   
    ,[])

    const animateSheetClose = () => {
        Animated.timing(animatedHeight, {
            toValue: 0,
            duration: 1000
        }).start()
    }

    const animateSheetOpen = () => {
        Animated.timing(animatedHeight, {
            toValue: 250,
            duration: 1000
        }).start()
    }
    
    const pushExpenseToDatabase = () => {
        firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/actions').push({
            expenseDetails: expenseDetails,
            expenseAmount: expenseAmount,
            expenseAddedDate: Date.now(),
            expenseType: props.name
        }, () => firebase.database().ref('users/' + firebase.auth().currentUser.uid).update({'availableBalance': availableBalance - expenseAmount }))

    }

    return(
        <ScrollView>
            <TouchableOpacity onPress = {() => {
                animateSheetOpen();
                
            }} 
            style ={[styles.container, {marginBottom: 5, elevation: elevation}]}
            >
                <View style = {styles.mainView}>
                    {props.icon}
                    <Text style = {styles.Text}>Add a {props.name} expense</Text>
                </View>
            </TouchableOpacity>
            <Animated.View style = {[styles.sheet , {height: animatedHeight}]} >
                <View>
                    <View style = {[styles.sheetTextContainer, {marginBottom: 10}]} >
                        <Text style = {[styles.introText, {fontSize: 26}]} >Expense details</Text>
                        <Entypo name = "squared-cross" style = {styles.crossIcon} onPress = {animateSheetClose} />
                    </View>
                    <View style = {{padding: 5,paddingHorizontal: 10,flexDirection: 'row',}}>
                        <Entypo name = "dot-single" style = {styles.dot} />
                        <Text style= {styles.introText} >What did you spend on?</Text>
                    </View>
                    <View style = {styles.sheetTextContainer}>
                        <TextInput maxLength = {128} onChangeText = {(details) => setExpenseDetails(details)} placeholder = "Example: Paris Trip.." style = {styles.textInputDetails} />
                    </View>
                    <View style = {{padding: 5,paddingHorizontal: 10,flexDirection: 'row',}} >
                        <Entypo name = "dot-single" style = {styles.dot} />
                        <Text  style = {styles.introText} >How much did you spend?</Text>
                    </View>
                    <View style = {styles.sheetTextContainer} >
                        <TextInput onChangeText = {(amount) => setExpenseAmount(amount)}  keyboardType = {"numeric"} placeholder = "Write the amount.." style = {styles.textInputDetails} />
                    </View>
                    <View>
                        <TouchableOpacity onPress = {pushExpenseToDatabase} style = {styles.addButton} >
                            <Text style = {styles.addButtonText} >Add Expense</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animated.View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height : 80,

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
    },
    sheet: {
        backgroundColor: 'white',
    },
    sheetTextContainer: {
        padding: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    introText: {
        fontSize: 18
    },
    crossIcon: {
        fontSize: 24,
    },
    textInputDetails: {
        borderBottomColor: '#a9a',
        borderBottomWidth: 0.5,
        padding: 0,
        width: '90%'
    },
    dot: {
        alignSelf: 'center',
        fontSize: 22,
        color: '#399787'
    },
    addButton: {
        backgroundColor: '#399787',
        width: '40%',
        borderRadius: 25,
        alignSelf: 'center',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addButtonText: {
        color: 'white',
        fontSize: 18
    }
})

export default AddActivityCard;