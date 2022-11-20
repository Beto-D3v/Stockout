import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

export default function AbaMercado(){

    const navigation = useNavigation()
 
     return (
        <View style={styles.container}>
            
            <Animatable.View animation="fadeInUp" delay={500} style={styles.containerAbaMercado}>
            <Text style={styles.mercadoText}> 
              Mercado
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
            <TouchableOpacity onPress={()=>navigation.navigate('Carrinho')}>
               <Text style={styles.textcarrinho}>
               Carrinho 
               </Text>
            </TouchableOpacity>
        </Animatable.View>

        
        <Animatable.View animation ="fadeInDown" style={styles.containerMenu}>
            <TouchableOpacity onPress={()=>navigation.navigate('Menu')}>
               <Text style={styles.MenuText}>
               Início
               </Text>
            </TouchableOpacity>
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


        <Text style={styles.lojasText}> Lojas </Text>

        <View style={styles.header}>
            <Image
            source={require('../../Assets/Imagens/ABC.png')}
            style={styles.image1}
            />
        </View>

        <Animatable.View animation ="fadeInDown" style={styles.containerABC}>
            <TouchableOpacity onPress={()=>navigation.navigate('AbaProdutos')}>
               <Text style={styles.TextABC}>
               ABC
               </Text>

               <Text style={styles.TextKmABC}>0.5 km</Text>

            </TouchableOpacity>
        </Animatable.View>

        <View style={styles.header}>
            <Image
            source={require('../../Assets/Imagens/Carrefour.png')}
            style={styles.image2}
            />
        </View>

        <Text style={styles.lojasBTitle}>Carrefour</Text>
        <Text style={styles.lojasB}>0.8 km</Text>

        <View style={styles.header}>
            <Image
            source={require('../../Assets/Imagens/supermercado-bh.png')}
            style={styles.image3}
            />
        </View>

        <Text style={styles.lojasCTitle}>BH</Text>
        <Text style={styles.lojasC}>1.2 km</Text>

        <View style={styles.header}>
            <Image
            source={require('../../Assets/Imagens/atacadao.png')}
            style={styles.image4}
            />
        </View>

        <View style={styles.header}>
            <Image
            source={require('../../Assets/Imagens/home.png')}
            style={styles.image6}
            />
        </View>

        <Text style={styles.lojasDTitle}>Atacadão</Text>
        <Text style={styles.lojasD}>2.2 km</Text>

        <Animatable.View animation ="fadeInDown" style={styles.containerAbaMaislojas}>
            <TouchableOpacity onPress={()=>navigation.navigate('AbaMaisLojas')}>
               <Text style={styles.buttonTextLojas}>
               Mais Lojas 
               </Text>
            </TouchableOpacity>
        </Animatable.View>

        <Text style={styles.inicio}>Início</Text>

        <View style={styles.header}>
            <Image
            source={require('../../Assets/Imagens/receipt.png')}
            style={styles.image7}
            />
        </View>

        <Animatable.View animation ="fadeInDown" style={styles.containerPedidos}>
            <TouchableOpacity onPress={()=>navigation.navigate('Carrinho')}>
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
)}

const styles = StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:'#FFF'
    },
    containerAbaMercado:{
       justifyContent:'center',
       alignItems:'center',
       marginTop:5,
    },

    mercadoText:{
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

     containerMenu:{
        left:25,
     },

     MenuText:{
        fontSize:12,
        color:'#274C77',
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
        width: 50,
        left: 24,
        height: 50,
        top: 100,
        borderRadius: 70,
     },

     lojasText:{
        fontSize:23,
        color:'#274C77',
        left: 50,
        top: 30,
     },

     containerABC:{
       fontSize:15,
       color:'#274C77',
       left: 80,
       top: 50,
     },

     TextABC:{
       fontSize:15,
       color:'#274C77',
       left: 0,
       top: 5,
     },

     TextKmABC:{
       fontSize:11,
       color:'#274C77',
       left: 0,
       top: 5,
     },

     image2:{
        width: 50,
        left: 215,
        height: 40,
        top: 20,
        
     },

     lojasBTitle:{
        fontSize:15,
        color:'#274C77',
        left: 270,
        top: -20,
     },

     lojasB:{
        fontSize:11,
        color:'#274C77',
        left: 270,
        top: -20,
     },


     image3:{
        width: 80,
        left: 15,
        height: 50,
        top: 30,
     },

     lojasCTitle:{
        fontSize:15,
        color:'#274C77',
        left: 100,
        top: -10,
     },

     lojasC:{
        fontSize:11,
        color:'#274C77',
        left: 100,
        top: -10,
     },

     image4:{
      width: 60,
        left: 205,
        height: 50,
        top: -60,
        borderRadius: 70,
     },

     lojasDTitle:{
      fontSize:15,
      color:'#274C77',
      left: 270,
      top: -130,
     },

     lojasD:{
      fontSize:11,
        color:'#274C77',
        left: 270,
        top: -130,
     },

     image6:{
        width: 32,
        left: 50,
        height: 32,
        top: 260,
        
     },

     containerAbaMaislojas:{
           backgroundColor:'#E7ECEF',
           width:326,
           height:104,
           left:35,
           borderRadius:20,
           paddingVertical:8,
           marginTop: -10,
           justifyContent:'center',
           alignItems:'center',
     },

     buttonTextLojas:{
       fontSize:16,
       color:'#274C77',
     },

     inicio:{
        fontSize:11,
        color:'#274C77',
        left: 53,
        top: 130, 
     },

     image7:{
        width: 32,
        left: 183,
        height: 32,
        top: 78,
     },

     containerPedidos:{
        left: 180,
        top: 80, 
     },

     pedidos:{
        fontSize:11,
        color:'#274C77',
     },

     image8:{
        width: 32,
        left: 310,
        height: 32,
        top: 30,
     },

     containerUser:{
        left: 312,
        top: 32, 
     },

     user:{
        fontSize:11,
        color:'#274C77',
     }

    })
