import React from 'react';
import Tutorial from './Tutorial';

const TutoHallJogos = ({ navigation }) => {
  return <Tutorial onEndTutorial={() => navigation.navigate('HallJogos')} />;
};

export default TutoHallJogos;