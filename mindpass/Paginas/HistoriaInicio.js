import React from 'react';
import Historia from './HistoriaBase';

const Tutorial = ({ navigation }) => {
  return <Historia onEndTutorial={() => navigation.navigate('TutorialInicial')} />;
};

export default Tutorial;