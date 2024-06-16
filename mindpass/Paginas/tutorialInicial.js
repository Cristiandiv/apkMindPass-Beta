import React from 'react';
import Tutorial from './Tutorial';

const TutoQuestionario = ({ navigation }) => {
  return <Tutorial onEndTutorial={() => navigation.navigate('Questionario')} />;
};

export default TutoQuestionario;