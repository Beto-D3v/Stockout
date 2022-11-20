import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

export default function AbaProdutos(){

    const navigation = useNavigation()
 
     return (

        <View style={styles.container}>
            
            <Animatable.View animation="fadeInUp" delay={500} style={styles.containerAbaMercado}>
            <Text style={styles.mercadoText}> 
              Produtos
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
          <TouchableOpacity onPress={()=>navigation.navigate('AbaMercado')}>
          <Text style={styles.AbasText}>
            Mercado
          </Text>
          </TouchableOpacity>
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
            source={require('../../Assets/Imagens/ABC.png')}
            style={styles.imageABC}
            />
        </View>

        <Text style={styles.TextABC}>Supermercado ABC</Text>


        <View style={styles.containerItens}> 

        <Text style={styles.Itens1}>Arroz</Text>
        <Text style={styles.MarcasItens1}>Codil</Text>
        <Text style={styles.ValorItens1}>R$ 15.99</Text>
	     <Text style={styles.QuantidadeItens1}>Em estoque: 390</Text>


        <Text style={styles.Itens2}>Oléo</Text>
        <Text style={styles.MarcasItens2}>ABC</Text>
        <Text style={styles.ValorItens2}>R$ 9.99</Text>
	     <Text style={styles.QuantidadeItens2}>Em estoque: 280</Text>

        <Text style={styles.Itens3}>Feijão</Text>
        <Text style={styles.MarcasItens3}>Codil</Text>
        <Text style={styles.ValorItens3}>R$ 7.99</Text>
	     <Text style={styles.QuantidadeItens3}>Em estoque: 400</Text>

        <Text style={styles.Itens4}>Arroz</Text>
        <Text style={styles.MarcasItens4}>Veneza</Text>
        <Text style={styles.ValorItens4}>R$ 12.99</Text>
	     <Text style={styles.QuantidadeItens4}>Em estoque: 500</Text>

        <Text style={styles.Itens5}>Feijão</Text>
        <Text style={styles.MarcaItens5}>Carioca</Text>
        <Text style={styles.ValorItens5}>R$ 8.99</Text>
	     <Text style={styles.QuantidadeItens5}>Em estoque: 680</Text>
       
        </View>

        <Animatable.View animation ="fadeInDown" style={styles.containerAbaCarrinho}>
            <TouchableOpacity onPress={()=>navigation.navigate('Carrrinho')}>
               <Text style={styles.button1Carrinho}>
               Selecionar 
               </Text>
            </TouchableOpacity>
        </Animatable.View>

        <Animatable.View animation ="fadeInDown" style={styles.containerAbaCarrinho}>
            <TouchableOpacity onPress={()=>navigation.navigate('Carrrinho')}>
               <Text style={styles.button2Carrinho}>
               Selecionar 
               </Text>
            </TouchableOpacity>
        </Animatable.View>

        <Animatable.View animation ="fadeInDown" style={styles.containerAbaCarrinho}>
            <TouchableOpacity onPress={()=>navigation.navigate('Carrrinho')}>
               <Text style={styles.button3Carrinho}>
               Selecionar 
               </Text>
            </TouchableOpacity>
        </Animatable.View>

        <Animatable.View animation ="fadeInDown" style={styles.containerAbaCarrinho}>
            <TouchableOpacity onPress={()=>navigation.navigate('Carrrinho')}>
               <Text style={styles.button4Carrinho}>
               Selecionar 
               </Text>
            </TouchableOpacity>
        </Animatable.View>

        <Animatable.View animation ="fadeInDown" style={styles.containerAbaCarrinho}>
            <TouchableOpacity onPress={()=>navigation.navigate('Carrrinho')}>
               <Text style={styles.button5Carrinho}>
               Selecionar 
               </Text>
            </TouchableOpacity>
        </Animatable.View>

        <View style={styles.header}>
            <Image
            source={require('../../Assets/Imagens/home.png')}
            style={styles.image2}
            />
        </View>

        <Animatable.View animation ="fadeInDown" style={styles.containerPedidos}>
            <TouchableOpacity onPress={()=>navigation.navigate('Menu')}>
               <Text style={styles.inicio}>
               Início 
               </Text>
            </TouchableOpacity>
        </Animatable.View>

        <View style={styles.header}>
            <Image
            source={require('../../Assets/Imagens/receipt.png')}
            style={styles.image3}
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
            style={styles.image4}
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

         TextABC:{
            fontSize:20,
            color:'#274C77',
            top: -40,
            left: 100,
         },
    
         imageABC:{
            width: 60,
            left: 30,
            height: 60,
            top: 10,
            borderRadius: 70,
         },

         containerItens:{
            backgroundColor:'#E7ECEF',
            width: 350,
            height:400,
            left:24,
            borderRadius: 35,
            borderColor: '#8B8C89',
            justifyContent:'center',
            alignItems:'center',
            marginTop: 5,
         },

         Itens1:{
            fontSize:20,
            color:'#274C77',
            top: 30,
            left: -120,
         },

         MarcasItens1:{
            fontSize:15,
            color:'#274C77',
            top: 25,
            left: -120,
         },

         ValorItens1:{
            fontSize:17,
            color:'red',
            top: 25,
            left: -120,
         },

         QuantidadeItens1:{
            fontSize:10,
            color:'#274C77',
            top: 24,
            left: -120,
         },

         containerAbaCarrinho:{
           width:40,
           height:27,
           left:55,
           borderRadius:5,
           paddingVertical:8,
           top: -290,
           justifyContent:'center',
           alignItems:'center',
         },

         button1Carrinho:{
            fontSize:8,
            color:'#EE6C4D',
         },

         Itens2:{
            fontSize:20,
            color:'#274C77',
            top: -55,
            left: 0,
         },


         MarcasItens2:{
            fontSize:15,
            color:'#274C77',
            top: -60,
            left: 0,
         },

         ValorItens2:{
            fontSize:17,
            color:'red',
            top: -60,
            left: 0,
         },

         QuantidadeItens2:{
            fontSize:10,
            color:'#274C77',
            top: -62,
            left: 0,
         },

         button2Carrinho:{
            fontSize:8,
            color:'#EE6C4D',
            left:120,
            top: -29
         },


         Itens3:{
            fontSize:20,
            color:'#274C77',
            top: -140,
            left: 120,
         },

         MarcasItens3:{
            fontSize:15,
            color:'#274C77',
            top: -145,
            left: 120,
         },

         ValorItens3:{
            fontSize:17,
            color:'red',
            top: -147,
            left: 120,
         },

         QuantidadeItens3:{
            fontSize:10,
            color:'#274C77',
            top: -147,
            left: 120,
         },

         button3Carrinho:{
            fontSize:8,
            color:'#EE6C4D',
            left:245,
            top: -57
         },

         Itens4:{
            fontSize:20,
            color:'#274C77',
            top: -40,
            left: -120,
         },

         MarcasItens4:{
            fontSize:15,
            color:'#274C77',
            top: -40,
            left: -120,
         },

         ValorItens4:{
            fontSize:17,
            color:'red',
            top: -40,
            left: -120,
         },

         QuantidadeItens4:{
            fontSize:10,
            color:'#274C77',
            top: -40,
            left: -120,
         },

         button4Carrinho:{
            fontSize:8,
            color:'#EE6C4D',
            left:0,
            top: 100
         },

         Itens5:{
            fontSize:20,
            color:'#274C77',
            top: -125,
            left: 0,
         },

         MarcaItens5:{
            fontSize:15,
            color:'#274C77',
            top: -125,
            left: 0,
         },

         ValorItens5:{
            fontSize:17,
            color:'red',
            top: -125,
            left: 0,
         },

         QuantidadeItens5:{
            fontSize:10,
            color:'#274C77',
            top: -125,
            left: 0,},

            button5Carrinho:{
               fontSize:8,
               color:'#EE6C4D',
               left:120,
               top: 73
            },

            image2:{
               width: 32,
               left: 43,
               height: 32,
               top: -30,
            },

            inicio:{
               fontSize:11,
               color:'#274C77',
               left: 47,
               top: -30, 
            },

            image3:{
               width: 32,
               left: 180,
               height: 32,
               top: -79,
            },

            pedidos:{
               fontSize:11,
               color:'#274C77',
               left: 175,
               top: -80, 
            },

            image4:{
               width: 32,
               left: 320,
               height: 32,
               top: -125,
            },

            user:{
               fontSize:11,
               color:'#274C77',
               left: 323,
               top: -126, 
            },



        })
