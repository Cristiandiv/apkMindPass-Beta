import React from 'react';
import Historia from './HistoriaBase';

const HistoriaHallJogos = ({ navigation }) => {
  return <Historia onEndTutorial ={() => navigation.navigate('HallJogos')} />;
};

export default HistoriaHallJogos;