import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Checkbox} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {useForm, Controller} from 'react-hook-form'
import * as animatable from 'react-native-animatable'
import axios from 'axios'

const schema = yup.object({
   name: yup.string().required(""),
   cnpj: yup.string().required(""),
   uf: yup.string().min(2, "UF deve ter dois digitos").required(""),
   cep: yup.string().min(8, "UF deve ter 8 digitos").required(""),
   logradouro: yup.string().required(""),
   numero: yup.string().required(""),
   bairro:yup.string().required(""),
   password: yup.string().min(6,"A senha deve ter pelo menos 6 digitos").required("Informe a sua senha"),
   passwordconf: yup.string().min(6,"A senha deve ter pelo menos 6 digitos").required("Informe a sua senha")
})

export default function CompanyRegister(){

   const {control, handleSubmit, formState: {errors}} = useForm({
      resolver: yupResolver(schema)
   })
      function handleSignIn(data){

         if(data.password != data.passwordconf){
            alert("As senhas devem ser iguais")   
            }
         else{
            axios.post(`https://localhost:333/user`, {
               data
           })
         }
      }

   const navigation = useNavigation()

    return (
       <View style={styles.container}>
        

         <animatable.View animation ="fadeInUp" delay={500} style={styles.containerLogin}>
          <Text style={styles.loginText}>
           Cadastro Empresa
          </Text>
        </animatable.View>
        
        <animatable.View animation ="fadeInLeft" delay={500} style={styles.containerCliente}>
          <TouchableOpacity onPress={()=>navigation.navigate('ClientRegister')}>
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

        <Text style={styles.titleName}>Nome Fantasia*</Text>
        <Controller
        control={control}
        name="name"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            style={[styles.inputName, {
               borderWidth: errors.name && 1,
               borderColor: errors.name && '#ff375b',
            }]}
            value={value}
            onBlur = {onBlur}
            onChangeText={onChange}
            />
            
        )}
        />
      
      <Text style={styles.titleCnpj}>CNPJ*</Text>
      <Controller
        control={control}
        name="cnpj"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            keyboardType='numeric' 
            style={[styles.inputCnpj, {
               borderWidth: errors.cnpj && 1,
               borderColor: errors.cnpj && '#ff375b',
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

        
        <Text style={styles.titleReferencia}>Referência</Text>
        <Controller
        control={control}
        name="referencia"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            style={[styles.inputReferencia]}
            value={value}
            onBlur = {onBlur}
            onChangeText={onChange}
            />
            
        )}
        />

        <Text style={styles.titleSenha}>Senha*</Text>
        <Controller
        control={control}
        name="password"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            style={[styles.inputSenha, {
               borderWidth: errors.password && 1,
               borderColor: errors.password && '#ff375b'
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
        name="passwordconf"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            style={[styles.inputConfSenha, {
               borderWidth: errors.passwordconf && 1,
               borderColor: errors.passwordconf && '#ff375b'
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
      color: '#343A40',
   },

   clienteBorder:{
      width:160,
      top:0,
      borderTopWidth:1,
      borderBottomColor:'#8B8C89',
      left:30,
   },

   containerEmpresa:{
      left:240,
      top:-40,
   },

   empresa:{
     color:'#EE6C4D',
     fontWeight:'bold'
   },

   empresaBorder:{
      width:160,
      top:-62,
      borderBottomWidth:4,
      borderBottomColor:'#EE6C4D',
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
      marginLeft:15,
      fontSize:20,
      bottom:75,
      marginTop:28,
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

 titleCnpj:{
    fontSize:20,
    bottom:80,
    color:'#8B8C89',
    marginLeft:15,
 },

   inputCnpj:{
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

 titleUF:{
    fontSize:20,
    bottom:90,
    color:'#8B8C89',
    marginLeft:15,
 },

 inputUF:{
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#E7ECEF',
    height:35,
    width:80,
    marginBottom:12,
    bottom:90,
    fontSize:16,
    marginLeft:15
 },

 titleCEP:{
    fontSize:20,
    bottom:165,
    color:'#8B8C89',
    left:110,
    marginLeft:15
 },

 inputCEP:{
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#E7ECEF',
    height:35,
    width:170,
    marginBottom:12,
    bottom:165,
    fontSize:16,
    left:110,
    marginLeft:15
 },

 titleLogradouro:{
    fontSize:20,
    bottom:175,
    color:'#8B8C89',
    marginLeft:15,
 },

 inputLogradouro:{
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#E7ECEF',
    height:35,
    width:250,
    marginBottom:12,
    bottom:175,
    fontSize:16,
    marginLeft:15,
 },

 titleNum:{
    fontSize:20,
    bottom:250,
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
    bottom:250,
    fontSize:16,
    left:260,
    marginLeft:15
 },

 titleBairro:{
    fontSize:20,
    bottom:260,
    color:'#8B8C89',
    marginLeft:15,
 },

 inputBairro:{
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#E7ECEF',
    height:35,
    marginBottom:12,
    bottom:260,
    fontSize:16,
    marginLeft:15,
    width:350,
 },

 titleComplemento:{
    fontSize:20,
    bottom:270,
    color:'#8B8C89',
    marginLeft:15,
 },

 inputComplemento:{
    borderRadius:10,
    backgroundColor:'#E7ECEF',
    height:35,
    marginBottom:12,
    bottom:270,
    fontSize:16,
    marginLeft:15,
    width:350,
 },

 titleReferencia:{
   fontSize:20,
   bottom:280,
   color:'#8B8C89',
   marginLeft:15,
},

inputReferencia:{
   borderRadius:10,
   backgroundColor:'#E7ECEF',
   height:35,
   marginBottom:12,
   bottom:280,
   fontSize:16,
   marginLeft:15,
   width:350,
},

 titleSenha:{
    fontSize:20,
    bottom:290,
    color:'#8B8C89',
    marginLeft: 15,
 },

 inputSenha:{
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#E7ECEF',
    height:35,
    marginBottom:12,
    bottom:290,
    fontSize:16,
    marginLeft:15,
    width:350,
 },

 titleConfSenha:{
    fontSize:20,
    bottom:300,
    color:'#8B8C89',
    marginLeft:15,
 },

 inputConfSenha:{
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#E7ECEF',
    height:35,
    marginBottom:12,
    bottom:300,
    fontSize:16,
    marginLeft:15,
    width:350,
 },

  button:{
      backgroundColor:'#EE6C4D',
      width:250,
      height:35,
      left:44,
      borderRadius:15,
      paddingVertical:8,
      marginTop: 14,
      bottom:300,
      justifyContent:'center',
      alignItems:'center',
      left:65,

   },

   buttonText:{
      color:'#FFF',
      fontSize:18,
      bottom:2,
      fontWeight:'bold',
      bottom:3,
   },

})
