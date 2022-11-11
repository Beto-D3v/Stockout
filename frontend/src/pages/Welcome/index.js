import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

export default function Welcome(){

   const navigation = useNavigation()

    return (
       <View style={styles.container}>
        <View style={styles.containerLogo}>
            <Animatable.Image
               animation="flipInY"
              // source={require('../../assets/logo.png')}
               style={{width:'100%'}}
               resizeMode="contain"
            />
        </View>

        <Animatable.View delay={600} animation="fadeInUp" 
         style={styles.containerForm}>
            <Text style={styles.title}>Bem-vindo ao StockOut!</Text>
            <Text style={styles.text}>Esta é uma área de membros do StockOut. Caso já tenha uma conta, clique em Login senão,
            clique em criar cadastro</Text>
        
            <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('SignIn')}>
               <Text style={styles.buttonText}
               >Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCadastrar} onPress={() => navigation.navigate('ClientRegister')}>
               <Text style={styles.buttonText}
               >Criar cadastro</Text>
            </TouchableOpacity>
        </Animatable.View>
       </View>
    )
}

const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor:'#F5F5F5'
   },

   containerForm:{
      height:420,
      top:392,
      backgroundColor:'#274C77',
      color:'#E7ECEF',
      borderTopLeftRadius:25,
      borderTopRightRadius:25,
      paddingStart:'5%',
      paddingEnd:'5%'
   },
   title:{
    position: 'absolute',
    width: 280,
    height: 32,
    left: 30,
    top:40,
    fontWeight:'bold',
    fontSize: 25,
    lineHeight: 29,
    color: '#E7ECEF',
   },
   text:{
      color:'#E7ECEF',
      fontWeight:'bold',
      width:327,
      height:80,
      left:11,
      top:100,
      lineHeight:20,
   },
   buttonLogin:{
      position:'absolute',
      backgroundColor:'#EE6C4D',
      borderRadius:50,
      paddingRadius:50,
      paddingVertical:8,
      marginTop:200,
      width:'80%',
      marginBottom:100,
      alignSelf:'center',
      bottom:'20%',
      alignItems:'center',
      justifyContent:'center'
   },

   buttonCadastrar:{
    position:'absolute',
    backgroundColor:'#EE6C4D',
    borderRadius:50,
    paddingRadius:50,
    width:'80%',
    height:40,
    bottom:'21%',
    marginBottom:20,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center'
 },

   buttonText:{
      fontSize:18,
      color: '#FFF',
      fontWeight:'bold'

   }

})
