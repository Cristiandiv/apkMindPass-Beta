import React, { useState, useEffect, useCallback } from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Audio } from 'expo-av';

const backgrounds = [
  require('../assets/tutorial/1.png'),
  require('../assets/tutorial/2.png'),
  require('../assets/tutorial/3.png'),
  require('../assets/tutorial/4.png'),
  require('../assets/tutorial/5.png'),
  require('../assets/tutorial/6.png'),
  require('../assets/tutorial/7.png'),
  require('../assets/tutorial/8.png'),
  require('../assets/tutorial/9.png'),
  require('../assets/tutorial/10.png'),
  require('../assets/tutorial/11.png'),
];

const texts = [
  [
    'Oi! Meu nome é Laura Nakamura e estou aqui para apresentar esta nova ferramenta para gerenciar o seu Mind-Pass! Nunca deixe essa pontuação aumentar tanto! Cuide de sua saúde mental!',
  ],
  [
    'Aqui você pode ver a tela inicial que mostra a pontuação do seu Mind-Pass. Cuide bem da sua sáude mental para manter esta pontuação baixa!',
  ],
  [
    'Assim que terminarmos este tour, você poderá fazer um teste para saber como está a sua saúde mental.',
  ],
  [
    'Este é um pequeno diário onde você pode salvar diariamente suas mudanças de humor e ainda detalhar o que aconteceu para estar se sentindo daquele jeito!',
  ],
  [
    'Assim, você poderá analisar essas mudanças durante o tempo e até entender como você funciona! Aahh, o autoconhecimento!',
  ],
  ['Aqui você terá mais liberdade com um diário bem maior!'],
  [
    'Sinta-se livre para escrever o que quiser neste diário para então ver suas notas no futuro e ver o quanto você mudou!',
  ],
  [
    'Este é o nosso famoso mapa que mostra todos os psicólogos e consultórios perto de você!',
  ],
  ['Saiba que sempre estaremos aqui se caso algo acontecer!'],
  ['Aqui é o quadro de avisos! Você poderá ficar sabendo de eventos e datas especiais por aqui.'],
  ['Agora, vamos fazer o teste para calcularmos o seu Mind-Pass?'],
];

const Tutorial = ({ onEndTutorial }) => {
  const [sound, setSound] = useState();
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [buttonPressed, setButtonPressed] = useState(false);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const handleNext = useCallback(async () => {
    if (textIndex === texts[backgroundIndex].length - 1) {
      if (backgroundIndex === backgrounds.length - 1) {
        await stopMusic();
        onEndTutorial();
      } else {
        setBackgroundIndex((backgroundIndex + 1) % backgrounds.length);
        setTextIndex(0);
      }
    } else {
      setTextIndex(textIndex + 1);
    }
  }, [backgroundIndex, textIndex, onEndTutorial]);

  const tocaMus = useCallback(async () => {
    console.log('Carregando');
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/tutorial/tutorial.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }, []);

  const stopMusic = useCallback(async () => {
    if (sound) {
      await sound.stopAsync();
    }
  }, [sound]);

  const apertou = useCallback(() => {
    setButtonPressed(true);
    tocaMus();
  }, [tocaMus]);

  return (
    <SafeAreaView style={styles.container}>
      {!buttonPressed ? (
        <StartButton onPress={apertou} />
      ) : (
        <BackgroundContainer
          backgroundIndex={backgroundIndex}
          textIndex={textIndex}
          handleNext={handleNext}
        />
      )}
    </SafeAreaView>
  );
};

const StartButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.botaoComeca}>
      <Text style={styles.botaoComecaTxt}>Começar</Text>
    </View>
  </TouchableOpacity>
);

const BackgroundContainer = ({ backgroundIndex, textIndex, handleNext }) => (
  <View style={styles.backgroundContainer}>
    <ImageBackground
      source={backgrounds[backgroundIndex]}
      resizeMode="cover"
      style={styles.backgroundImage}
      imageStyle={backgroundIndex === 1 ? styles.imgSegunda : null}
    />
    <TutorialContent
      text={texts[backgroundIndex][textIndex]}
      handleNext={handleNext}
    />
  </View>
);

const TutorialContent = ({ text, handleNext }) => (
  <View style={styles.caixinha}>
    <View style={styles.caixaTexto}>
      <Text style={styles.texto}>{text}</Text>
    </View>
    <View style={styles.caixaSeta}>
      <TouchableOpacity onPress={handleNext}>
        <Image
          source={require('../assets/tutorial/seta-direita.png')}
          style={styles.seta}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  botaoComeca: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  botaoComecaTxt: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backgroundContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    position: 'absolute',
    width: '90%',
    height: '95%',
  },
  caixinha: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -175 }],
    height: 220,
    backgroundColor: '#dcdcdc',
    padding: 10,
    borderRadius: 18,
    width: 350,
  },
  texto: {
    textAlign: 'justify',
    lineHeight: 22,
    fontSize: 16,
  },
  caixaTexto: {
    padding: 10,
  },
  caixaSeta: {
    alignItems: 'flex-end',
    marginTop: -20,
    marginLeft: 290,
    padding: 10,
    width: 10,
    height: 55,
    zIndex: 2,
  },
  seta: {
    width: 30,
    height: 30,
  },
  imgSegunda: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
  },
});

export default Tutorial;