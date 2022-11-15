import React,{useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import * as animatable from 'react-native-animatable'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {useForm, Controller} from 'react-hook-form'
import {useNavigation} from '@react-navigation/native'
import axios from 'axios'


const schema = yup.object({
   login: yup.string().required("Informe seu login"),
   senha: yup.string().min(6,"A senha deve ter pelo menos 6 digitos").required("Informe a sua senha")
})

export default function SignInCompany(){
   const {control, handleSubmit, formState: {errors}} = useForm({
   resolver: yupResolver(schema)
})
   function handleSignIn(data){
      axios.post(`https://localhost:8080/user`, {
               data
           })
   }
   
   const navigation = useNavigation()

    return (

       <View style={styles.container}>
        

         <animatable.View animation ="fadeInUp" delay={500} style={styles.containerLogin}>
          <Text style={styles.loginText}>
           Login 
          </Text>
        </animatable.View>
        
        <animatable.View animation ="fadeInLeft" delay={500} style={styles.containerCliente}>
          <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
            <Text style={styles.cliente}>
            Cliente 
            </Text>
          </TouchableOpacity>
        </animatable.View>
       
        <animatable.View animation ="fadeInLeft" delay={500}>
            <Text style={styles.clienteBorder}>
            </Text>
        </animatable.View>
        
         <animatable.View animation ="fadeInRight" delay={500} style={styles.containerEmpresa}>
            <TouchableOpacity>
               <Text style={styles.empresa}>
               Empresa 
               </Text>
            </TouchableOpacity>
        </animatable.View>

        <animatable.View animation ="fadeInRight" delay={500}>
            <Text style={styles.empresaBorder}>
            </Text>
        </animatable.View>

        <Text style={styles.title}>Usuário</Text>
        
        <Controller
        control={control}
        name="login"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            style={[styles.input, {
               borderWidth: errors.login && 1,
               borderColor: errors.login && '#ff375b'
            }]}
            value={value}
            onBlur = {onBlur}
            onChangeText={onChange}
            />
            
        )}
        />
        {errors.username && <Text style={styles.labelError}>Digite um login válido</Text>}

        <Text style={styles.title}>Senha</Text>
        <Controller
        control={control}
        name="senha"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            style={[styles.input, {
               borderWidth: errors.senha && 1,
               borderColor: errors.senha && '#ff375b'
            }]}
            value={value}
            onBlur = {onBlur}
            onChangeText={onChange}
            secureTextEntry={true}
            />
            
        )}
        />
        
        {errors.password && <Text style={styles.labelError}>Digite uma senha com mais de cinco digitos!</Text>}

         <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.registerText}>Esqueceu sua senha?</Text>  
         </TouchableOpacity> 

         <TouchableOpacity 
         onPress={handleSubmit(handleSignIn)}
         style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>  
         </TouchableOpacity> 
        
       </View>
    )
}

const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor:'#FFF'
   },
   containerLogin:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:10,
   },
   loginText:{
      fontSize:16,
      color:'#343A40',
   },

   containerCliente:{
      top:30,
      left:80,  
   },

   cliente:{
      color:'#343A40',
   },

   clienteBorder:{
      width:160,
      top:10,
      borderBottomWidth:1,
      borderBottomColor:'#8B8C89',
      left:30,
   },

   containerEmpresa:{
      left:240,
      top:-15,
   },

   empresa:{
      color:'#EE6C4D',
      fontWeight:'bold'
   },

   empresaBorder:{
      width:160,
      top:-12,
      borderBottomColor:'#EE6C4D',
      borderTopWidth:2,
      left:190,
   },

   containerForm:{
      backgroundColor: '#FFF',
      flex:1,
      bordertopLeftRadius:25,
      borderTopRightRadius:25,
      paddingStart: '5%',
      paddingEnd:'5%',
   },
   title:{
      fontSize:20,
      marginTop:28,
      color:'#8B8C89',
      marginLeft:10
   },
   input:{
      borderWidth:1,
      borderRadius:10,
      backgroundColor:'#E7ECEF',
      height:40,
      marginBottom:12,
      fontSize:16,
      width:350,
      marginLeft:10

   },

   button:{
      backgroundColor:'#EE6C4D',
      width:247,
      height:40,
      left:44,
      borderRadius:15,
      paddingVertical:8,
      marginTop: 14,
      top:20,
      justifyContent:'center',
      alignItems:'center',

   },

   buttonText:{
      color:'#FFF',
      fontSize:18,
      fontWeight:'bold'
   },

   buttonRegister:{
      marginTop:14,
      aligSelf:'center'
   },
   registerText:{
      color:'#a1a1a1',
      marginLeft:10
   },

   labelError:{
      marginLeft:20,
      color:'#ff375b',
   }

})
