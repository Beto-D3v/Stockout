import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Checkbox} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {useForm, Controller} from 'react-hook-form'
import * as animatable from 'react-native-animatable'

const schema = yup.object({
   aname: yup.string().required(""),
   bemail: yup.string().required(""),
   cdata: yup.string().required(""),
   dcpf: yup.string().required(""),
   euf: yup.string().min(2, "UF deve ter dois digitos").required(""),
   fcep: yup.string().min(8, "UF deve ter 8 digitos").required(""),
   glogradouro: yup.string().required(""),
   hnumero: yup.string().required(""),
   ibairro:yup.string().required(""),
   password: yup.string().min(6,"A senha deve ter pelo menos 6 digitos").required("Informe a sua senha"),
   passwordconf: yup.string().min(6,"A senha deve ter pelo menos 6 digitos").required("Informe a sua senha")
})

export default function ClientRegister(){

   const {control, handleSubmit, formState: {errors}} = useForm({
      resolver: yupResolver(schema)
   })
      function handleSignIn(data){
         if(data.password != data.passwordconf){
            alert("As senhas devem ser iguais")   
            }
         else{
            console.log(data)
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
        name="aname"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            style={[styles.inputName, {
               borderWidth: errors.aname && 1,
               borderColor: errors.aname && '#ff375b',
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
        name="bemail"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            style={[styles.inputEmail, {
               borderWidth: errors.bemail && 1,
               borderColor: errors.bemail && '#ff375b',
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
        name="cdata"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
             keyboardType='numeric' 
             style={[styles.inputData, {
               borderWidth: errors.cdata && 1,
               borderColor: errors.cdata && '#ff375b',
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
        name="dcpf"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            keyboardType='numeric' 
            style={[styles.inputCPF, {
               borderWidth: errors.dcpf && 1,
               borderColor: errors.dcpf && '#ff375b',
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
        name="euf"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            style={[styles.inputUF, {
               borderWidth: errors.euf && 1,
               borderColor: errors.euf && '#ff375b',
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
        name="fcep"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            keyboardType='numeric' 
            style={[styles.inputCEP, {
               borderWidth: errors.fcep && 1,
               borderColor: errors.fcep && '#ff375b',
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
        name="glogradouro"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            style={[styles.inputLogradouro, {
               borderWidth: errors.glogradouro && 1,
               borderColor: errors.glogradouro && '#ff375b',
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
        name="hnumero"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            keyboardType='numeric' 
            style={[styles.inputNum, {
               borderWidth: errors.hnumero && 1,
               borderColor: errors.hnumero && '#ff375b',
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
        name="ibairro"
        render={({field: {onChange,onBlur,value}})=>(
            <TextInput
            style={[styles.inputBairro, {
               borderWidth: errors.ibairro && 1,
               borderColor: errors.ibairro && '#ff375b',
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
        name="jcomplemento"
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