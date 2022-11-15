import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Checkbox} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {useForm, Controller} from 'react-hook-form'
import * as animatable from 'react-native-animatable'
import axios from 'axios'

const schema = yup.object({
   nome: yup.string().required(""),
   email: yup.string().required(""),
   dataNascimento: yup.string().required(""),
   cpf: yup.string().required(""),
   uf: yup.string().min(2, "UF deve ter dois digitos").required(""),
   cep: yup.string().min(8, "UF deve ter 8 digitos").required(""),
   logradouro: yup.string().required(""),
   numero: yup.string().required(""),
   bairro:yup.string().required(""),
   senha: yup.string().min(6,"A senha deve ter pelo menos 6 digitos").required("Informe a sua senha"),
   senhaConf: yup.string().min(6,"A senha deve ter pelo menos 6 digitos").required("Informe a sua senha")
})

export default function ClientRegister(){

   const {control, handleSubmit, formState: {errors}} = useForm({
      resolver: yupResolver(schema)
   })
      function handleSignIn(data){
         if(data.senha != data.senhaConf){
            alert("As senhas devem ser iguais")   
            }
         else{
            axios.post(`https://localhost:8080/user`, {
               data
           })
         }
      }
         
         
      

   const navigation = useNavigation()

    return (
       <View style={styles.container}>

         <animatable.View animation ="fadeInUp" delay={500} style={styles.containerLogin}>
          <Text style={styles.loginText}>
           Cadastro Cliente 
          </Text>
        </animatable.View>
        
        <animatable.View animation ="fadeInLeft" delay={500} style={styles.containerCliente}>
          <TouchableOpacity>
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
            <TouchableOpacity onPress={() => navigation.navigate('CompanyRegister')}>
               <Text style={styles.empresa}>
               Empresa 
               </Text>
            </TouchableOpacity>
        </animatable.View>

        <animatable.View animation ="fadeInRight" delay={500}>
            <Text style={styles.empresaBorder}>
            </Text>
        </animatable.View>

        <Text style={styles.titleName}> Nome Completo*</Text>
        <Controller
        control={control}
        name="nome"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            style={[styles.inputName, {
               borderWidth: errors.nome && 1,
               borderColor: errors.nome && '#ff375b',
            }]}
            value={value}
            onBlur = {onBlur}
            onChangeText={onChange}
            />
            
        )}
        />
      
       <Text style={styles.titleEmail}>Email*</Text>
       <Controller
        control={control}
        name="email"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            style={[styles.inputEmail, {
               borderWidth: errors.email && 1,
               borderColor: errors.email && '#ff375b',
            }]}
            value={value}
            onBlur = {onBlur}
            onChangeText={onChange}
            />
            
        )}
        />
        <Text style={styles.titleData}>Data de Nascimento*</Text>
        <Controller
        control={control}
        name="dataNascimento"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
             keyboardType='numeric' 
             style={[styles.inputData, {
               borderWidth: errors.dataNascimento && 1,
               borderColor: errors.dataNascimento && '#ff375b',
            }]}
            value={value}
            onBlur = {onBlur}
            onChangeText={onChange}
            />
            
        )}
        />
       <Text style={styles.titleCPF}>CPF*</Text>
       <Controller
        control={control}
        name="cpf"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            keyboardType='numeric' 
            style={[styles.inputCPF, {
               borderWidth: errors.cpf && 1,
               borderColor: errors.cpf && '#ff375b',
            }]}
            value={value}
            onBlur = {onBlur}
            onChangeText={onChange}
            />
            
        )}
        />
       <Text style={styles.titleUF}>UF*</Text>
       <Controller
        control={control}
        name="uf"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            style={[styles.inputUF, {
               borderWidth: errors.uf && 1,
               borderColor: errors.uf && '#ff375b',
            }]}
            value={value}
            onBlur = {onBlur}
            onChangeText={onChange}
            />
            
        )}
        />
       <Text style={styles.titleCEP}>CEP*</Text>
       <Controller
        control={control}
        name="cep"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            keyboardType='numeric' 
            style={[styles.inputCEP, {
               borderWidth: errors.cep && 1,
               borderColor: errors.cep && '#ff375b',
            }]}
            value={value}
            onBlur = {onBlur}
            onChangeText={onChange}
            />
            
        )}
        />
        <Text style={styles.titleLogradouro}>Logradouro*</Text>
        <Controller
        control={control}
        name="logradouro"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            style={[styles.inputLogradouro, {
               borderWidth: errors.logradouro && 1,
               borderColor: errors.logradouro && '#ff375b',
            }]}
            value={value}
            onBlur = {onBlur}
            onChangeText={onChange}
            />
            
        )}
        />
        <Text style={styles.titleNum}>Número*</Text>
        <Controller
        control={control}
        name="numero"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            keyboardType='numeric' 
            style={[styles.inputNum, {
               borderWidth: errors.numero && 1,
               borderColor: errors.numero && '#ff375b',
            }]}
            value={value}
            onBlur = {onBlur}
            onChangeText={onChange}
            />
            
        )}
        />
        <Text style={styles.titleBairro}>Bairro*</Text>
        <Controller
        control={control}
        name="bairro"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            style={[styles.inputBairro, {
               borderWidth: errors.bairro && 1,
               borderColor: errors.bairro && '#ff375b',
            }]}
            value={value}
            onBlur = {onBlur}
            onChangeText={onChange}
            />
            
        )}
        />

        <Text style={styles.titleComplemento}>Complemento</Text>
        <Controller
        control={control}
        name="complemento"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            style={[styles.inputComplemento]}
            value={value}
            onBlur = {onBlur}
            onChangeText={onChange}
            />
            
        )}
        />

        <Text style={styles.titleSenha}>Senha*</Text>
        <Controller
        control={control}
        name="senha"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            style={[styles.inputSenha, {
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
        <Text style={styles.titleConfSenha}>Confirmar Senha*</Text>
        <Controller
        control={control}
        name="senhaConf"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            style={[styles.inputConfSenha, {
               borderWidth: errors.senhaConf && 1,
               borderColor: errors.senhaConf && '#ff375b'
            }]}
            value={value}
            onBlur = {onBlur}
            onChangeText={onChange}
            secureTextEntry={true}
            />
            
        )}
        />


         <TouchableOpacity style={styles.button}
         onPress={handleSubmit(handleSignIn)}>
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
      marginTop:5,
   },
   loginText:{
      fontSize:16,
      color:'#343A40',
   },

   containerCliente:{
      left:80,  
   },

   cliente:{
      color:'#EE6C4D',
      fontWeight:'bold'
   },

   clienteBorder:{
      width:160,
      top:-15,
      borderBottomWidth:4,
      borderBottomColor:'#EE6C4D',
      left:30,
   },

   containerEmpresa:{
      left:240,
      top:-44,
   },

   empresa:{
     color: '#343A40',
   },

   empresaBorder:{
      width:160,
      top:-37,
      borderTopWidth:1,
      borderBottomColor:'#8B8C89',
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
   titleName:{
      fontSize:20,
      bottom:75,
      marginTop:28,
      marginLeft:15,
      color:'#8B8C89',
   },

   inputName:{
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#E7ECEF',
    height:35,
    marginBottom:12,
    bottom:70,
    fontSize:16,
    width:350,
    marginLeft:15
 },

 titleEmail:{
    fontSize:20,
    marginLeft:15,
    bottom:80,
    color:'#8B8C89',
 },

   inputEmail:{
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#E7ECEF',
    height:35,
    marginBottom:12,
    bottom:80,
    fontSize:16,
    width:350,
    marginLeft:15
 },

 titleData:{
    fontSize:20,
    marginLeft:15,
    bottom:90,
    color:'#8B8C89',
 },

 inputData:{
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#E7ECEF',
    height:35,
    marginBottom:12,
    bottom:90,
    fontSize:16,
    width:350,
    marginLeft:15
 },

 titleCPF:{
    fontSize:20,
    marginLeft:15,
    bottom:100,
    color:'#8B8C89',
 },

 inputCPF:{
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#E7ECEF',
    height:35,
    marginBottom:12,
    bottom:100,
    fontSize:16,
    width:350,
    marginLeft:15
 },

 titleUF:{
    fontSize:20,
    marginLeft:15,
    bottom:110,
    color:'#8B8C89',
 },

 inputUF:{
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#E7ECEF',
    height:35,
    width:80,
    marginBottom:12,
    bottom:110,
    fontSize:16,
    marginLeft:15
 },

 titleCEP:{
    fontSize:20,
    marginLeft:15,
    bottom:185,
    color:'#8B8C89',
    left:110,
 },

 inputCEP:{
    borderRadius:10,
    backgroundColor:'#E7ECEF',
    height:35,
    width:170,
    marginBottom:12,
    bottom:185,
    fontSize:16,
    left:110,
    marginLeft:15
 },

 titleLogradouro:{
    fontSize:20,
    marginLeft:15,
    bottom:195,
    color:'#8B8C89',
 },

 inputLogradouro:{
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#E7ECEF',
    height:35,
    width:250,
    marginBottom:12,
    bottom:195,
    fontSize:16,
    marginLeft:15
 },

 titleNum:{
    fontSize:20,
    bottom:270,
    color:'#8B8C89',
    left:260,
    marginLeft:15,
 },

 inputNum:{
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#E7ECEF',
    height:35,
    width:80,
    marginBottom:12,
    bottom:270,
    fontSize:16,
    left:260,
    marginLeft:15
 },

 titleBairro:{
    fontSize:20,
    bottom:280,
    color:'#8B8C89',
    marginLeft:15
 },

 inputBairro:{
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#E7ECEF',
    height:35,
    marginBottom:12,
    bottom:280,
    fontSize:16,
    width:350,
    marginLeft:15
 },

 titleComplemento:{
    fontSize:20,
    bottom:290,
    marginLeft:15,
    color:'#8B8C89',
 },

 inputComplemento:{
    borderRadius:10,
    backgroundColor:'#E7ECEF',
    height:35,
    marginBottom:12,
    bottom:290,
    fontSize:16,
    width:350,
    marginLeft:15
 },

 titleSenha:{
    fontSize:20,
    marginLeft:15,
    bottom:300,
    color:'#8B8C89',
 },

 inputSenha:{
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#E7ECEF',
    height:35,
    marginBottom:12,
    bottom:300,
    fontSize:16,
    width:350,
    marginLeft:15
 },

 titleConfSenha:{
    fontSize:20,
    marginLeft:15,
    bottom:310,
    color:'#8B8C89',
 },

 inputConfSenha:{
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#E7ECEF',
    height:35,
    marginBottom:12,
    bottom:310,
    fontSize:16,
    width:350,
    marginLeft:15
 },

  button:{
      backgroundColor:'#EE6C4D',
      width:247,
      height:35,
      left:65,
      borderRadius:15,
      paddingVertical:8,
      marginTop: 14,
      bottom:320,
      justifyContent:'center',
      alignItems:'center',

   },

   buttonText:{
      color:'#FFF',
      fontSize:18,
      fontWeight:'bold',
      bottom:3,
   },

   buttonRegister:{
      marginTop:14,
      aligSelf:'center'
   },
   registerText:{
      color:'#a1a1a1',
      bottom:330,
   }

})
