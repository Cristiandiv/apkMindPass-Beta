import { ScrollView, Text, View, StyleSheet, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getUid, addDoc, db, collection, getDocs, where, query, updateDoc } from '../Firebase';

export default function ModalNota(props) {
  const [notaVisivel, setnotaVisivel] = useState(false);
  const [registro, setRegistro] = useState('');
  const [sentimento, setSentimento] = useState('');
  const [uid, setUid] = useState(''); // id do usuario
  const [pontos, setPontos] = useState(0);

  useEffect(() => {
    getUid()
      .then((uid) => {
        setUid(uid);
      })
      .catch((error) => {
        console.error('ERRO:', error);
      });
  }, []);

  const getCurrentDate = () => {
    const today = new Date();
    return `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
  };

  const handleSave = () => {
    add();
    setnotaVisivel(false);
  };

  useEffect(() => {
    if (notaVisivel) {
      setEmocao();
    }
  }, [sentimento, uid, pontos, props]);

  const setEmocao = () => {
    setSentimento(props.emocao);
    setPontos(props.pontos);
    setnotaVisivel(true); // nota visivel
  };

  const add = async () => {
    try {
      const docRef = await addDoc(collection(db, "diario"), {
        uid,
        sentimento,
        registro,
        data: getCurrentDate()
      });
      console.log("Documento registrado com ID: ", docRef.id);
      passUpdate();
      setRegistro("");
      props.getDiario();
      setSentimento('Neutro');
      setPontos(0);
    } catch (e) {
      console.error("Erro ao adicionar documento: ", e);
    }
  };

  const passUpdate = async () => {
    try {
      const q = query(collection(db, "passe"), where("uid", "==", uid));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          console.log(data);

          const updates = {
            pontuacao: data.pontuacao + pontos,
            xp: data.xp + 10
          };

          const documentRef = doc.ref;
          updateDoc(documentRef, updates);
        });
        console.log('Documents updated successfully.');
      } else {
        console.log('No matching documents found.');
      }
    } catch (error) {
      console.error('Error updating documents:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={setEmocao}>
        <View style={styles.btnNota}>
          <Text style={{ fontSize: 20, paddingHorizontal: 10 }}>+</Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType='slide'
        transparent={true}
        visible={notaVisivel}
        style={{}}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "height"}
          style={styles.containerFrontal}
          keyboardVerticalOffset={50}
        >
          <ScrollView style={{ margin: 10 }}>
            <View style={styles.notaTitle}>
              <Text style={styles.areaTexto}>Você está se sentindo "{sentimento}". Escreva aqui o que aconteceu no seu dia.</Text>
            </View>
            <TextInput
              multiline={true}
              numberOfLines={10}
              placeholderTextColor={'#fff'}
              style={styles.textoInputNota}
              placeholder="Digite aqui"
              onChangeText={setRegistro}
              defaultValue={registro}
              value={registro}
            />
            <View style={styles.containerBtn}>
              <TouchableOpacity
                style={styles.btnVoltar}
                onPress={() => setnotaVisivel(false)}
              >
                <Text> Voltar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btnSalvar}
                onPress={handleSave}
              >
                <Text style={{ color: '#ffff', fontSize: 20 }}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}

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