import { Modal, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import 'moment';
import 'moment/locale/pt-br';  // language must match config




export default function ModalPerfil({navigation}){

    const [notaVisivel, setnotaVisivel] = useState(false);


    return(
        <View style={{margin: 10}}>
        <TouchableOpacity style={styles.perfil}
          onPress={() => {setnotaVisivel(true)}}
        >
          <Image source={require('../assets/perfil.png')} style={{ resizeMode: 'stretch', width: 35, height: 35 }} />
        </TouchableOpacity>

        <Modal
        animationType='slide'
        transparent={true}
        visible={notaVisivel}
        style={{}}
      >
            <View style={{flex: 1, margin: 6, backgroundColor: '#dcdcdc'}}>
            <View style={styles.notaTitle}>
              <Text style={styles.areaTexto}>Você está se sentindo "". Escreva aqui o que aconteceu no seu dia.</Text>
            </View>
            
            <View style={styles.containerBtn}>
              <TouchableOpacity
                style={styles.btnVoltar}
                onPress={() => setnotaVisivel(false)}
              >
                <Text> Voltar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btnSalvar}
                onPress={{}}
              >
                <Text style={{ color: '#ffff', fontSize: 20 }}>Salvar</Text>
              </TouchableOpacity>
            </View>
            </View>
      </Modal>

        </View>
    
    
)};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 6,
    },
    notas: {
      margin: 6,
      borderRadius: 2,
    },
    notaSalva: {
      margin: 6,
      alignItems: 'center',
      backgroundColor: '#dcdcdc',
      elevation: 8 // sombras
    },
    btnAddNota: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      margin: 6,
      borderRadius: 2,
      backgroundColor: '#DCDCDC',
    },
    containerFrontal: {
      marginVertical: '5%',
      margin: 10,
      borderRadius: 10,
      backgroundColor: '#6CB1F1',
    },
    addNota: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      margin: 6,
      borderRadius: 2,
      backgroundColor: '#DCDCDC',
    },
    areaTexto: {
      fontSize: 16,
      padding: 6,
      textAlign: 'center'
    },
    btnNota: {
      alignSelf: 'center',
      backgroundColor: '#ffff',
      padding: 6,
    },
    containerBtn: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
    },
    btnSalvar: {
      borderRadius: 10,
      backgroundColor: '#FE7200',
      margin: 3,
      padding: 6,
    },
    btnVoltar: {
      borderRadius: 10,
      backgroundColor: '#ffff',
      padding: 8,
      margin: 6
    },
    notaTitle: {
      padding: 4,
      margin: 6,
      borderRadius: 8,
      backgroundColor: '#ffff',
      elevation: 2
    },
    textoInputNota: {
      flexShrink: 1,
      backgroundColor: '#FFF',
      color: '#000',
      fontSize: 20,
      fontWeight: 'bold',
      borderRadius: 10,
      margin: 6,
      padding: 6,
      textAlignVertical: 'top'
    },
  });