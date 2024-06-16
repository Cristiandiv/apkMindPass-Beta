import {createStackNavigator} from '@react-navigation/stack';

import LoginRotas from './LoginPages/Rotas';
import NewRotas from '../Navigation(new)/Tabs';
import Questionario from './Questionario';
import Historia from './HistoriaBase';
import HistoriaInicio from './HistoriaInicio';
import HistoriaHall from './HistoriaHall';
import Tutorial from './Tutorial';
import TutorialMP from './tutorialMP';
import TutorialInicial from './tutorialInicial';
import HallJogos from './HallJogos';




const Stack = createStackNavigator();

export default function Rotas(){
  return(
      <Stack.Navigator initialRouteName={LoginRotas}>
        <Stack.Screen name="LoginRotas" component={LoginRotas} options={{headerShown:false}}/>
        <Stack.Screen name="Questionario" component={Questionario} options={{headerShown:false}}/>
        <Stack.Screen name="NewRotas" component={NewRotas} options={{headerShown:false}}/>
        <Stack.Screen name="Historia" component={Historia} options={{headerShown:false}}/>
        <Stack.Screen name="HistoriaInicio" component={HistoriaInicio} options={{headerShown:false}}/>
        <Stack.Screen name="HistoriaHall" component={HistoriaHall} options={{headerShown:false}}/>
        <Stack.Screen name="Tutorial" component={Tutorial} options={{headerShown:false}}/>
        <Stack.Screen name="TutorialMP" component={TutorialMP} options={{headerShown:false}}/>
        <Stack.Screen name="TutorialInicial" component={TutorialInicial} options={{headerShown:false}}/>
        <Stack.Screen name="HallJogos" component={HallJogos} options={{headerShown:false}}/>
      </ Stack.Navigator>
  );
}