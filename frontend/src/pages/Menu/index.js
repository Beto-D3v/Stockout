import React from "react";
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native'
import * as Animatable from 'react-native-animatable'
import {useForm, Controller} from 'react-hook-form'
import * as yup from 'yup'

import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
    pesquisa: yup.string(),
})

export default function Menu(){

    const {control, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            
            <Animatable.View animation="fadeInUp" delay={500} style={styles.containerMenu}>
            <Text style={styles.menuText}> 
              Menu
            </Text>
        </Animatable.View>

        <Animatable.View animation ="fadeInLeft" style={styles.containerPesquisa}>
            <TouchableOpacity onPress={()=>navigation.navigate('Pesquisa')}>
               <Text style={styles.buttonTextP}>
               Qual a sua localização? 
               </Text>
            </TouchableOpacity>
        </Animatable.View>

        <View style={styles.header}>
            <Image
            source={require('../../Assets/Imagens/shopping-cart.png')}
            style={styles.image0}
            />
        </View>

        <Animatable.View animation ="fadeInDown" style={styles.containerCarrinho}>
            <TouchableOpacity onPress={()=>navigation.navigate('ClientCarriho')}>
               <Text style={styles.textcarrinho}>
               Carrinho 
               </Text>
            </TouchableOpacity>
        </Animatable.View>

        
        <Animatable.View animation ="fadeInUp" delay={500} style={styles.containerInicio}>
          <Text style={styles.AbasText}>
            Início
          </Text>
        </Animatable.View>

        <Animatable.View animation ="fadeInUp" delay={500} style={styles.containerMercado}>
          <Text style={styles.AbasText}>
            Mercado
          </Text>
        </Animatable.View>

        <Animatable.View animation ="fadeInUp" delay={500} style={styles.containerFarmacia}>
          <Text style={styles.AbasText}>
            Farmácia
          </Text>
        </Animatable.View>

        <Animatable.View animation ="fadeInUp" delay={500} style={styles.containerHortifruti}>
          <Text style={styles.AbasText}>
            Horti-Fruti
          </Text>
        </Animatable.View>


        <View style={styles.header}>
            <Image
            source={require('../../Assets/Imagens/grocery-cart.png')}
            style={styles.image1}
            />
        </View>

        <View style={styles.header}>
            <Image
            source={require('../../Assets/Imagens/fruit.png')}
            style={styles.image2}
            />
        </View>

        <View style={styles.header}>
            <Image
            source={require('../../Assets/Imagens/medicine.png')}
            style={styles.image3}
            />
        </View>

       <Animatable.View animation ="fadeInDown" style={styles.containerAbaMercado}>
            <TouchableOpacity onPress={()=>navigation.navigate('AbaMercado')}>
               <Text style={styles.buttonText}>
               Mercado 
               </Text>
            </TouchableOpacity>
        </Animatable.View>

        <Text style={styles.lojasText}> Últimas lojas visitadas: </Text>

        <View style={styles.header}>
            <Image
            source={require('../../Assets/Imagens/ABC.png')}
            style={styles.image4}
            />
        </View>

        <Text style={styles.lojasATitle}>ABC</Text>
        <Text style={styles.lojasA}>Supermercado</Text>

        <View style={styles.header}>
            <Image
            source={require('../../Assets/Imagens/Carrefour.png')}
            style={styles.image5}
            />
        </View>

        <Text style={styles.lojasATitle}>Carrefour</Text>
        <Text style={styles.lojasA}>Supermercado</Text>

        <View style={styles.header}>
            <Image
            source={require('../../Assets/Imagens/home.png')}
            style={styles.image6}
            />
        </View>

        <Text style={styles.inicio}>Início</Text>

        <View style={styles.header}>
            <Image
            source={require('../../Assets/Imagens/receipt.png')}
            style={styles.image7}
            />
        </View>

        <Animatable.View animation ="fadeInDown" style={styles.containerPedidos}>
            <TouchableOpacity onPress={()=>navigation.navigate('ClientCarrinho')}>
               <Text style={styles.pedidos}>
               Pedidos 
               </Text>
            </TouchableOpacity>
        </Animatable.View>

        <View style={styles.header}>
            <Image
            source={require('../../Assets/Imagens/user.png')}
            style={styles.image8}
            />
        </View>

        <Animatable.View animation ="fadeInDown" style={styles.containerUser}>
            <TouchableOpacity onPress={()=>navigation.navigate('ClientRegister')}>
               <Text style={styles.user}>
               Perfil 
               </Text>
            </TouchableOpacity>
        </Animatable.View>

        </View>
    )
}

    const styles = StyleSheet.create({
        container:{
           flex:1,
           backgroundColor:'#FFF'
        },
        containerMenu:{
           justifyContent:'center',
           alignItems:'center',
           marginTop:10,
        },

        menuText:{
         fontSize:25,
         color:'#274C77',
        },

        containerLocal:{
            left:10,
            marginTop:25,  
         },
        
           titlePesquisa:{
           fontSize: 10,
           marginTop: 20,
           marginLeft: 28,
           bottom: 0,
         },

         containerCarrinho:{
            left: 340,
            top: -25, 
         },

         textcarrinho:{
            fontSize:9,
            color:'#274C77',
         },
         
         containerPesquisa:{
            backgroundColor:'#E7ECEF',
            width:220,
            height:18,
            left:24,
            borderRadius:5,
            borderColor: '#8B8C89',
            justifyContent:'center',
            alignItems:'center',
            marginTop:18,
          },

          buttonTextP:{
            fontSize:14,
            color:'#274C77',
         },

          image0:{
            width:26,
            top: -25,
            left: 340,
         },

         containerInicio:{
            marginLeft: 24,
            marginTop:25,
            maxHeight: 13,
            maxWidth: 28

         },

         AbasText:{
            fontSize: 11,
            lineHeight: 12.89,
            color: '#274C77'
         },

         containerMercado:{
            marginLeft:100,
            top: -14
         },

         containerHortifruti:{
            marginLeft:200,
            top: -40
         },

         containerFarmacia:{
            marginLeft:300,
            top: -29
         },


         image1:{
            width:46,
            top: 50,
            left: 40,
         },

         image2:{
            width:46,
            top: 0,
            left: 175,
         },

         image3:{
            width:46,
            top: -50,
            left: 300,
         },

         containerAbaMercado:{
           backgroundColor:'#E7ECEF',
           width:326,
           height:104,
           left:24,
           borderRadius:20,
           paddingVertical:8,
           marginTop:80,
           justifyContent:'center',
           alignItems:'center',
         },


         buttonText:{
            fontSize:16,
            color:'#274C77',
         },

         lojasText:{
            fontSize:11,
            color:'#274C77',
            left: 24,
            top: 80,
        
         },

         image4:{
            width: 50,
            left: 24,
            height: 50,
            top: 100,
         },

         lojasATitle:{
            fontSize:15,
            color:'#274C77',
            left: 90,
            top: 60,

         },

         lojasA:{
            fontSize:11,
            color:'#274C77',
            left: 90,
            top: 60,
         },

         image5:{
            width: 50,
            left: 20,
            height: 40,
            top: 100,
         },

         image6:{
            width: 32,
            left: 50,
            height: 32,
            top: 95,
         },

         inicio:{
            fontSize:11,
            color:'#274C77',
            left: 53,
            top: 95, 
         },

         image7:{
            width: 32,
            left: 183,
            height: 32,
            top: 44,
         },

         containerPedidos:{
            left: 180,
            top: 45, 
         },

         pedidos:{
            fontSize:11,
            color:'#274C77',
         },

         image8:{
            width: 32,
            left: 310,
            height: 32,
            top: -5,
         },

         containerUser:{
            left: 313,
            top: -5, 
         },

         user:{
            fontSize:11,
            color:'#274C77',
         }

         
    })
