import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useDebugValue, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarraXP from './barraXP';

const dados = [
  {
    id: 1,
    emocao: "feliz",
    pontos: -5,
    imagem: require('../assets/smile.png')
  },

  {
    id: 2,
    emocao: "triste",
    pontos: 5,
    imagem: require('../assets/sad.png')
  },

  {
    id: 3,
    emocao: "irritado",
    pontos: 5,
    imagem: require('../assets/irritado.png')
  },

  {
    id: 4,
    emocao: "calmo",
    pontos: -5,
    imagem: require('../assets/calm.png')
  },

  {
    id: 5,
    emocao: "depressivo",
    pontos: 10,
    imagem: require('../assets/depressive.png')
  },

  {
    id: 6,
    emocao: "surpreso",
    pontos: 1,
    imagem: require('../assets/surpreso.png')
  },

  {
    id: 7,
    emocao: "cansado",
    pontos: 5,
    imagem: require('../assets/fadiga.png')
  },

  {
    id: 8,
    emocao: "neutro",
    pontos: 0,
    imagem: require('../assets/neutro.png')
  },

  {
    id: 9,
    emocao: "ansioso",
    pontos: 5,
    imagem: require('../assets/ansiedade.png')
  },

  {
    id: 10,
    emocao: "sonolento",
    pontos: 5,
    imagem: require('../assets/sonolento.png')
  },

  {
    id: 11,
    emocao: "doente",
    pontos: 5,
    imagem: require('../assets/doente.png')
  },

  {
    id: 12,
    emocao: "envergonhado",
    pontos: 5,
    imagem: require('../assets/envergonhado.png')
  },
]

const numColumns = 3;

export default function Stats({ navigation }) {
  renderItem = ({ item, index})=>{
    return (
      <TouchableOpacity
          style={styles.viewEmocao}
          onPress={() => navigation.navigate('Diario', { emocao: item.emocao, pontos: item.pontos })}
        >
          <Image style={styles.bxEmocao} source={item.imagem} />
        </TouchableOpacity>
    )
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.superiorBar}>

        <TouchableOpacity style={styles.perfil}>
          <Image source={require('../assets/perfil.png')} style={{ resizeMode: 'stretch', width: 35, height: 35 }} />
        </TouchableOpacity>
        <View style={styles.barraXP}>
          <BarraXP />
        </View>

      </View>

      <View style={styles.viewText}>

        <Text style={styles.textStyleTitle}>
          Como você está se sentindo hoje?
        </Text>

      </View>
    
      <View style={{alignItems: 'center'}}>


      <FlatList 
      data = {dados}
      style={styles.containerEmocoes}
      renderItem={this.renderItem}
      numColumns={numColumns}
      />


      </View>



    </SafeAreaView>
  );

}




const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#ffff',
    paddingHorizontal: 6,
  },

  viewText: {
    padding: 10,
    backgroundColor: 'rgb(159, 194, 255)',
    borderRadius: 25,
  },

  textStyleTitle: { //estilo das frases encima das notas e eventos.
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    borderRadius: 10,
    textAlign: 'center',
  },

  /////////////
  containerEmocoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    backgroundColor: 'rgb( 185, 210, 255 )',
    borderRadius: 20,
    marginBottom: 100
  },

  viewEmocao: {
    margin: 6,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 6
  },

  bxEmocao: {
    resizeMode: 'stretch',
    width: 100,
    height: 100,
    padding: 10
  },
  
  // BARRA SUPERIOR

  superiorBar: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgb(159, 194, 255)',
    borderRadius: 10,
  },

  // PERFIL

  perfil: {
    margin: 6,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
  },

  //barraXp

  barraXP: {
    alignItems: 'center',
    width: '80%'
  },

});
