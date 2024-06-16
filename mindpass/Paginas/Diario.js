import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getUid, db, collection, getDocs, where, query } from '../Firebase';

import Modal from '../Paginas/ModalNota';

export default function Diario({ route }) {

  const [array, setArray] = useState([]);
  const [sentimento, setSentimento] = useState('');
  const [uid, setUid] = useState(''); //id do usuario
  const [pontos, setPontos] = useState(0);

  getUid().then((uid) => {
    setUid(uid);
  }).catch((error) => {
    console.error('ERRO:', error)
  });

  const getDiario = async () => {
    if (uid) {
      try {
        const q = query(collection(db, 'diario'), where('uid', '==', uid)); // Query com where
        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ id: doc.id, ...doc.data() });
        });

        console.log(docs);
        setArray(docs);
      } catch (error) {
        console.error('Error fetching diario:', error);
      };
    }
  }

  useEffect(() => {
    getDiario();
    setEmocao();
  }, [sentimento, uid, route.params]);

  const setEmocao = () => {
    if (!route.params) {
      setSentimento('neutro');
      setPontos(0);
    } else {
      setSentimento(route.params.emocao);
      setPontos(route.params.pontos);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      

      <View style={styles.containerTop}> 
      <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>
            Aqui você pode escrever sobre seus sentimentos e pensamentos.
          </Text>
        </View>

        <View style={styles.btnAddNota}>
            <Modal
              pontos={pontos}
              emocao={sentimento}
              getDiario={getDiario}
            />
          </View>
          </View>

      <View style={styles.containerFundoNotas}>


            <View style={styles.notas}>

              {
                array.length < 1 ?

                  <View style={styles.notaSalva}>
                    <Text>
                      Nenhum registro encontrado
                    </Text>
                  </View>

                  :

                  <FlatList
                    data={array}
                    renderItem={({ item }) => (
                      <View style={styles.notaSalva}>
                        <Text>Texto: {item.registro}</Text>
                        <Text>Sentimento: {item.sentimento}</Text>
                        <Text>Data: {item.data}</Text>
                      </View>
                    )}
                  />
              }

            </View>


      </View>
    </SafeAreaView>
  );

}


const styles = StyleSheet.create({

  //fundo da tela
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 6,
    backgroundColor: '#ffff',
  },

  //container do titulo, notas e botao criar notas
  containerFundoNotas: {
    flex: 1,
    backgroundColor: '#A5CEF3',
    borderRadius: 15,
  },

  containerTop: {
    backgroundColor: '#A5CEF3',
    borderRadius: 15,
    marginVertical: 6
  },

  //viewtitulo
  viewTitle: {
    zIndex: 1,
    pading: 4,
    margin: 6,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    elevation: 2
  },

  textTitle: { //estilo das frases encima das notas e eventos.
    zIndex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 10,
    textAlign: 'center'
  },
  ////

  notas: {
    margin: 6,
    borderRadius: 2,
  },

  notaSalva: {
    borderRadius: 12,
    margin: 6,
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 8 //sombras
  },

  btnAddNota: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 6,
    borderRadius: 2,
  },


  containerFrontal: {
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
    flexWrap: 'wrap',
    backgroundColor: '#ff900e',
    padding: 6,
    margin: 6
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
    pading: 4,
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
