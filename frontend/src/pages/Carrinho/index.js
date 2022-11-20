import { AppRegistry, Platform } from 'react-native';
import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

import {useNavigation} from '@react-navigation/native'

const navigation = useNavigation(), App = () => {
  const nomeLoja = "Atacadão";
  const imgLoja = "https://storage.googleapis.com/br-apps-site-institucional-cs-prod-001/2022/09/63e9a8ee-nove-lojas_mobile.jpg";
  const produtos = [
    {
      id: 1,
      icon: "https://www.paodeacucar.com/img/uploads/1/29/10519029.jpeg",
      produto: "Feijão Carioca Camil",
      precoUnidade: 6.99,
      quantidade: 2.00
    },
    {id: 2,
     icon: "https://static.clubeextra.com.br/img/uploads/1/350/590350.png",
     produto: "Óleo de Soja Soya",
     precoUnidade: 5.44,
     quantidade: 2.00
    },
    {id: 3,
      icon: "https://www.camil.com.br/wp-content/uploads/sites/12/2020/06/arroz-branco-camil-t1-1kg-768x768.jpg",
      produto: "Arroz Branco Camil 5kg",
      precoUnidade: 19.56,
      quantidade: 1.00
    },
  ];

  const productList = produtos.map(item => {
    return (
      <View style={styles.product} key={item.id}>
      <Image source={item.icon} style={styles.productImg}/>
      <View style={styles.productDetail}>
        <Text style={styles.productDetail}>{item.produto}</Text>
        <Text style={styles.productDetail}>R$ {item.precoUnidade}</Text>
        <Text style={styles.productDetail}>Quantidade: {item.quantidade}</Text>
      </View>
      </View>
    )
  }
);
  
  const valorTotalCompra = produtos.reduce((a,c) => {
    return a + c.quantidade * c.precoUnidade
  }, 0
);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={imgLoja} style={styles.headerImg}/>
        <Text style={styles.headerText}>{nomeLoja}</Text>
      </View>
      <View style={styles.products}>
        {productList}
      </View>
      <View style={styles.purchaseTotals}>
        <View style={styles.totalsItem}>
          <Text style={styles.totalsText}>Total:</Text>
          <Text style={styles.totalsText}>R$ {valorTotalCompra}</Text>
        </View>
        <View style={styles.totalsButton}>
          <Text style={styles.buttonText}>CONCLUIR PEDIDO</Text>
        </View>
      </View>
    </View>
  )
};

export default App; 

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 80,
    justifyContent: 'center',

  },

  header:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    height: 70,
    marginBottom: 20,
    paddingHorizontal: 30,
  },

  headerText:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    fontSize: 25,
    fontWeight: 500,
  },

  headerImg:{
    borderRadius: 50,
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#888888',
  },

  products:{
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 30,
    marginBottom: 100,
  },

  product:{
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    marginBottom: 5,
  },

  productImg:{
    borderRadius: 7,
    width: 60,
    height: 50,
    borderWidth: 1,
    borderColor: '#888888',
  },

  productDetail:{
    display: 'Flex',
    flexDirection: 'column',
    height: 50,
    fontSize: 13,
    fontWeight: 500,
    lineHeight: 15,
    justifyContent: 'center',
    alignItems: 'left',
    marginLeft: 8,
    marginRight: 18,
  },

  purchaseTotals:{
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#6096BA',
    paddingTop: 50
  },

  totalsItem:{
    display: 'Flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginBottom: 50,
  },

  totalsText:{
    fontSize: 16,
    fontWeight: 600,
    color: '#FFF'
  },

  totalsButton:{
    display: 'Flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  buttonText:{
    paddingVertical: 7,
    paddingHorizontal: 40,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#EE6C4D',
    fontSize: 13,
    fontWeight: 500,
    color: '#FFF',
    backgroundColor: '#EE6C4D',
  },


});
