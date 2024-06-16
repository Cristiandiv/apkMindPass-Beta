import {ScrollView, Text, View,StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  useFonts,
  PressStart2P_400Regular,
} from '@expo-google-fonts/press-start-2p';
import {
  Exo2_700Bold
} from '@expo-google-fonts/exo-2';
import { SafeAreaView } from 'react-native-safe-area-context';

import BarraXP from './barraXP';

export default function Agenda(){

  let [fontsLoaded, fontError] = useFonts({
    PressStart2P_400Regular, Exo2_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return(
    
    <SafeAreaView
    style={styles.container}
    >
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
      Veja os Eventos e Missôes da semana.
      </Text>
      </View>


      <ScrollView style={{backgroundColor: 'rgb(159, 190, 255)', marginBottom: 105, padding: 10, borderRadius: 10 }}>

      

      <View style={{backgroundColor: '#dcdcdc', margin: 6, padding: 10, borderRadius: 10, elevation: 10}}>
          
          <Text style={styles.textTitle}> Saber: Ansiedade </Text>
          <Text style={styles.textStyle}>
          A ansiedade é uma resposta natural do corpo ao estresse, mas quando se torna excessiva e interfere nas atividades diárias, pode ser considerada um transtorno. Pessoas com transtorno de ansiedade frequentemente experimentam preocupações intensas e persistentes, acompanhadas por sintomas como tensão muscular, nervosismo, dificuldade de concentração e problemas para dormir. O tratamento geralmente envolve terapia cognitivo-comportamental (TCC), medicação ou uma combinação de ambos.
          </Text>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={{color: '#ffffff'}}>Saber mais</Text>
          </TouchableOpacity>

      </View>


</ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingHorizontal: 6,
  },

  viewText: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#FFF500',
    backgroundColor: '#FF900E'
  },


  textTitle:{
    fontSize: 20,
    padding: 6,
    borderRadius: 10,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Exo2_700Bold'
  },

  textStyle: { //estilo do texto das notas e eventos.
    fontSize: 15,
    borderRadius: 10,
    textAlign: 'justify',
    fontFamily: 'Exo2_700Bold'
  },

  buttonBar: { //estilo da view dos botoes da Agenda.
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 6,
    borderRadius: 10, 
    backgroundColor: '#DCDCDC', ///azul bb : #87cefa / verde : #3cb371 
    opacity: 0.72,
    position: 'relative'
  },

  buttonStyle:{ //estilo do botao 'saber mais' da Agenda.
    alignSelf: 'flex-end',
    padding: 4,
    backgroundColor: 'rgba(63, 191, 129, 0.88)',
    textAlign: 'center',
    fontSize: 10,
    borderRadius: 3
  },

  viewInput1Agenda: {
    margin:6,
    borderRadius: 2,
    backgroundColor: '#DCDCDC',
    padding: 4
  },

  // BARRA SUPERIOR

  superiorBar: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgb(159, 194, 255)',
    borderRadius: 10,
    borderColor: '#6CB1F1',
    borderWidth: 2,
    margin: 6
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
    width: '80%',
  },

});