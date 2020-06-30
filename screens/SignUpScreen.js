import React, { useState } from 'react';
import {View , Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height


const SignUpScreen = ({navigation}) => {
    
    const [userName, setUserName] = useState('')
    const [userEmail, setuserEmail] = useState('')
    const [userPassword, setuserPassword] = useState('')
    

    const setUserInfo = () => {
        firebase.database().ref('/users/' + firebase.auth().currentUser.uid).set({
            name : userName,
            availableBalance: 0
        }).then(() => firebase.auth().currentUser.sendEmailVerification())

    }

    const signUpHandler = () => {
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then(() => setUserInfo()).then(() => firebase.auth().signOut()).then(() => setTimeout(() => navigation.navigate('Sign In'), 100))
    }



    return(
        <View>
            <Image source = {require('../expense.jpg')} style = {styles.background} />
            <View style = {styles.welcomeView} >
                <Text style = {styles.welcomeText}>Never lose track of your money!</Text>
            </View>
            <View style = {styles.credentialsView} >
                <View style = {styles.individualViews}>
                    <Text style = {styles.credentialName}>Name</Text>
                    <TextInput  onChangeText = {(name) => setUserName(name) } placeholder = "Enter your name" style = {styles.input} />
                </View>
                <View style = {styles.individualViews}>
                    <Text style = {styles.credentialName}>Email</Text>
                    <TextInput onChangeText = {(email) => setuserEmail(email) } placeholder = "Enter your email" style = {styles.input}  />
                </View>
                <View style = {styles.individualViews}>
                    <Text style = {styles.credentialName}>Password</Text>
                    <TextInput  onChangeText = {(password) => setuserPassword(password) } placeholder = "Enter your password" style = {styles.input} />
                </View>
            </View>
            <TouchableOpacity onPress = {signUpHandler} style = {styles.signUpButton}>
                <Text style = {styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    background: {
        width : WIDTH,
        height: HEIGHT/3,
    },
    credentialsView: {
        marginLeft: 50,
        marginTop: 30,
    },
    input: {
        borderBottomColor: '#a9a',
        borderBottomWidth: 0.5,
        padding: -5,
        width: '80%'
    },
    individualViews: {
        marginBottom: 20
    },
    welcomeView: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: -20,
        width: '72%',
        alignSelf: 'center',
        padding: 10,
    },
    welcomeText: {
        fontSize: 17,
    },
    credentialName: {
        fontSize: 18,
        marginBottom: 7
    },
    signUpButton: {
        borderWidth: 0.5,
        borderColor: '#ece',
        backgroundColor: '#399787',
        borderRadius: 10,
        width: 100,
        height: 50,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    signUpText: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center'
    }
})

export default SignUpScreen;