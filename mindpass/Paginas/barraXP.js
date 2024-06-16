import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Constants from 'expo-constants';
import { getUid, db, collection, getDocs, where, query, updateDoc, doc } from '../Firebase';
import useState from "react-usestateref";

export default function XpBar() {
  const [uid, setUid] = useState("");

  getUid().then((uid) => {
    setUid(uid);
  }).catch((error) => {
    console.error('ERRO:', error)
  });

  const obj = [
    { xp: 1, level: 1 }
  ];

  const [xp, setXp] = useState(obj.xp);
  const [level, setLevel] = useState(obj.level);
  const [objData, setobjData] = useState(obj[0]);
  const [docId, setDocId] = useState("");

  const updateData = () => {
    if (xp && level) {
      setobjData({ xp: xp, level: level });
    }
    if(objData.xp > 99 || xp > 99){
      let newLevel = (objData.level + 1);
      setLevel(newLevel);
      setXp(0);
      setobjData({ xp: 0, level: newLevel });
      console.log("xp: ", xp, "level: ", newLevel);
      updateXp();
    }
  }

  const updateXp = async () => {
    try{
      const docRef = doc(db, "passe", docId);
      await updateDoc(docRef, {
        xp: 0,
        level: level
      });
      console.log("Documento atualizado com sucesso");
    } catch (e) {
      console.log("Erro: ", e);
    }
    
  }

  const getData = async () => {
    try {
      const q = query(collection(db, 'passe'), where('uid', '==', uid));
      const querySnapshot = await getDocs(q);
      let docs = {};
      querySnapshot.forEach((doc) => {
        docs = { id: doc.id, ...doc.data() };
      });
      console.log(docs)
      setXp(docs.xp);
      setLevel(docs.level);
      setDocId(docs.id);
    } catch (error) {
      console.log('Error fetching passe:', error);
    };
  }

  useEffect(() => {
    getData();
  }, [uid]);

  useEffect(() => {
    updateData();
  }, [xp, level]);

  return (
    <View style={styles.container}>
      <View style={styles.numXP}>
        <Text style={styles.textoNivel}>Lvl: {objData.level}</Text>
        <View style={styles.barraXP}>
          <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "#00A8FF", width: `${objData.xp}%` }} />
          <Text style={styles.texto}>{objData.xp}%</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  texto: {
    fontSize: 18,
    alignSelf: 'center'
  },
  textoNivel: {
    fontSize: 15,
  },
  barraXP: {
    width: '80%',
    height: 30,
    backgroundColor: '#fff',
    borderWidth: 3,
    borderRadius: 8,
    borderColor: '#FBDB1B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  numXP:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});