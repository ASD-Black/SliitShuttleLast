import React from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, StatusBar} from 'react-native';
import {Text} from 'native-base';

import CustomHeader from '../../Components/CustomHeader'

export class Inquiry extends React.Component {
    render() {
      return (
        <KeyboardAvoidingView style={{ flex:1}} behavior="padding">
        <View style={{flex:1}}>
        <CustomHeader title="Settings" navigation={this.props.navigation}/>
        <StatusBar 
          barStyle = "light-content" 
          hidden = {false}
          backgroundColor = "#1a237e"
          translucent = {false}
          networkActivityIndicatorVisible = {true}
        />
        <View style={styles.container}>
          <Text style={styles.logoStyle}>To Contact with Admin</Text>
          <TextInput style={{width: 200,
      height:50,
      backgroundColor: 'rgba(33, 33, 33,0.3)',
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: "#212121",
      marginBottom:20,
      marginLeft:40}} 
            placeholder="Contact Number"
            placeholderTextColor="#ffffff"
            />
             <TextInput
             placeholder="Type Your comment"
             placeholderTextColor="black"
    multiline={true}
    numberOfLines={10}
    style={{ height:200, marginLeft:40, textAlignVertical: 'top',backgroundColor: 'rgba(33, 33, 33,0.3)', width:350}}/>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        </View>
        </View>
        </KeyboardAvoidingView>
      );
    }
  }

  const styles = StyleSheet.create({
    container : {
      backgroundColor: '#ffffff',
      flexGrow: 1,
      //alignItems: 'center',
      justifyContent: 'center',
    },
    textAreaContainer: {
        backgroundColor: 'rgba(33, 33, 33,0.3)',
        borderColor: '#000000',
        borderWidth: 1,
        padding: 5
      },
      textArea: {
        height: 150,
        justifyContent: "flex-start"
      },
    logoStyle: {
      //justifyContent:'center',
      marginTop:-70,
      marginLeft:80,
      fontWeight:"900",
      marginBottom:60,
      fontSize: 30,
      color: 'rgba(33, 33, 33,0.3)'
    },
    inpuBox: {
      width: 350,
      height:50,
      backgroundColor: 'rgba(33, 33, 33,0.3)',
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: "#212121",
      marginVertical:4,
      marginLeft:40
    },
    buttonText: {
        fontSize:18,
        fontWeight:'500',
        color: '#212121',
        textAlign: 'center',
        
    },
    button: {
      width: 150,
      backgroundColor: 'rgba(33, 33, 33,0.3)',
      height:50,
      //borderRadius: 25,
      paddingVertical: 12,
      //marginVertical:10,
      marginTop:40,
      marginLeft:250,
      marginBottom:-100
    }
    });