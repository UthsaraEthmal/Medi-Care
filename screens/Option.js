import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({ navigation }) => {
  
  return (
    <SafeAreaView style={styles.container2}>
      <View style={styles.container}>

 
          <Text style={styles.specialBlue} 
          > PLEASE, SELECT YOUR OPTION!
        </Text>

      <View style={styles.mainContainner}>
        <View >          
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Remider1")}>
          <Text style={styles.buttonText}>Three Times for a day</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}onPress={() => navigation.navigate("Register")} >
          <Text style={styles.buttonText}>Two Times for a Day </Text>         
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}onPress={() => navigation.navigate("Register")} >
          <Text style={styles.buttonText}>Once for a Day </Text>         
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}onPress={() => navigation.navigate("Register")} >
          <Text style={styles.buttonText}>Custormize </Text>         
        </TouchableOpacity>
        </View>
    </View>

     

        
       </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '85%',
    width: '90%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 20,
    borderColor: '#3AB0FF',
    borderWidth:5,
    
  },
  container2: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  button: {
    width: 250,
    backgroundColor: '#3AB0FF',
    borderRadius: 100,
    marginVertical: 16,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  specialBlue: {
    color: '#3AB0FF',
    fontWeight:'bold',
    fontSize: 18,
    
  },
  

  mainContainner: {
    width:"100%",        
    borderColor: '#3AB0FF',
   alignItems: 'center',      
    justifyContent: 'center',
    borderRadius: 20,
    padding:20,
    marginBottom:20,
    marginTop:20,
    textAlign:'center'
  },

  mainContainner2: {
    
    alignItems: 'center',
    borderWidth: 1,   
    justifyContent: 'center',
    borderRadius: 20,
    padding:10,
    marginBottom:20,
   // textAlign:'center'
  },
    
 

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
 
  openButton: { 
    borderRadius: 20,
    padding: 10,
   
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
 
});

export default Login;
