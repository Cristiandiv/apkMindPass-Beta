import React, { useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

export default function App() {
    const corpo = [
        "require('../assets/assetsPersonagem/personagem/Base/base1.png')",
        "require('../assets/assetsPersonagem/personagem/Base/base2.png')",
        "require('../assets/assetsPersonagem/personagem/Base/base3.png')",
        "require('../assets/assetsPersonagem/personagem/Base/base4.png')",
        "require('../assets/assetsPersonagem/personagem/Base/base5.png')"
    ];

    const cabelo = [
        "require('../assets/assetsPersonagem/personagem/Hair/hair3_6.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair3_9.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair4_1.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair4_10.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair4_11.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair4_12.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair4_13.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair4_14.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair4_2.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair4_4.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair4_5.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair4_6.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair4_7.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair4_8.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair5_10.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair5_11.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair5_15.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair5_2.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair5_3.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair5_4.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair5_6.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair5_7.png')",
        "require('../assets/assetsPersonagem/personagem/Hair/hair5_8.png')",
    ];

    const sobrancelha = [
        "require('../assets/assetsPersonagem/personagem/Eyebrows/eyebrows1_1.png')",
        "require('../assets/assetsPersonagem/personagem/Eyebrows/eyebrows3_1.png')",
        "require('../assets/assetsPersonagem/personagem/Eyebrows/eyebrows4_1.png')",
        "require('../assets/assetsPersonagem/personagem/Eyebrows/eyebrows5_1.png')",
    ];

    const olhos = [
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes1_1.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes1_10.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes1_2.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes1_3.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes1_4.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes1_5.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes1_6.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes1_7.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes1_8.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes1_9.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes2_1.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes2_10.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes2_2.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes2_3.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes2_4.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes2_5.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes2_6.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes2_7.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes2_8.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes2_9.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes3_1.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes3_10.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes3_2.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes3_3.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes3_4.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes3_5.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes3_6.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes3_7.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes3_8.png')",
        "require('../assets/assetsPersonagem/personagem/Eyes/eyes3_9.png')",
    ];

    const boca = [
        "require('../assets/assetsPersonagem/personagem/Mouth/mouth1_1.png')",
        "require('../assets/assetsPersonagem/personagem/Mouth/mouth2_1.png')",
        "require('../assets/assetsPersonagem/personagem/Mouth/mouth4_1.png')",
        "require('../assets/assetsPersonagem/personagem/Mouth/mouth5_1.png')",
    ];

    const cima = [
        "require('../assets/assetsPersonagem/personagem/Tops/top1_2.png')",
        "require('../assets/assetsPersonagem/personagem/Tops/top1_4.png')",
        "require('../assets/assetsPersonagem/personagem/Tops/top1_6.png')",
        "require('../assets/assetsPersonagem/personagem/Tops/top2_2.png')",
        "require('../assets/assetsPersonagem/personagem/Tops/top2_4.png')",
        "require('../assets/assetsPersonagem/personagem/Tops/top2_5.png')",
        "require('../assets/assetsPersonagem/personagem/Tops/top3_2.png')",
        "require('../assets/assetsPersonagem/personagem/Tops/top3_3.png')",
        "require('../assets/assetsPersonagem/personagem/Tops/top3_4.png')",
        "require('../assets/assetsPersonagem/personagem/Tops/top3_5.png')",
        "require('../assets/assetsPersonagem/personagem/Tops/top3_6.png')",
        "require('../assets/assetsPersonagem/personagem/Tops/top4_1.png')",
        "require('../assets/assetsPersonagem/personagem/Tops/top4_2.png')",
        "require('../assets/assetsPersonagem/personagem/Tops/top4_5.png')",
        "require('../assets/assetsPersonagem/personagem/Tops/top4_6.png')",
        "require('../assets/assetsPersonagem/personagem/Tops/top5_1.png')",
        "require('../assets/assetsPersonagem/personagem/Tops/top5_2.png')",
        "require('../assets/assetsPersonagem/personagem/Tops/top5_3.png')",
        "require('../assets/assetsPersonagem/personagem/Tops/top5_4.png')",
        "require('../assets/assetsPersonagem/personagem/Tops/top5_5.png')",
        "require('../assets/assetsPersonagem/personagem/Tops/top5_6.png')",
    ];

    const baixo = [
        "require('../assets/assetsPersonagem/personagem/Bottoms/bottom1_1.png')",
        "require('../assets/assetsPersonagem/personagem/Bottoms/bottom1_2.png')",
        "require('../assets/assetsPersonagem/personagem/Bottoms/bottom1_3.png')",
        "require('../assets/assetsPersonagem/personagem/Bottoms/bottom1_4.png')",
        "require('../assets/assetsPersonagem/personagem/Bottoms/bottom1_5.png')",
        "require('../assets/assetsPersonagem/personagem/Bottoms/bottom1_6.png')",
        "require('../assets/assetsPersonagem/personagem/Bottoms/bottom2_1.png')",
        "require('../assets/assetsPersonagem/personagem/Bottoms/bottom2_2.png')",
        "require('../assets/assetsPersonagem/personagem/Bottoms/bottom2_3.png')",
        "require('../assets/assetsPersonagem/personagem/Bottoms/bottom2_4.png')",
        "require('../assets/assetsPersonagem/personagem/Bottoms/bottom2_5.png')",
        "require('../assets/assetsPersonagem/personagem/Bottoms/bottom2_6.png')",
        "require('../assets/assetsPersonagem/personagem/Bottoms/bottom3_1.png')",
        "require('../assets/assetsPersonagem/personagem/Bottoms/bottom3_3.png')",
        "require('../assets/assetsPersonagem/personagem/Bottoms/bottom3_4.png')",
        "require('../assets/assetsPersonagem/personagem/Bottoms/bottom3_5.png')",
        "require('../assets/assetsPersonagem/personagem/Bottoms/bottom3_6.png')",
        "require('../assets/assetsPersonagem/personagem/Bottoms/bottom3_7.png')",
    ];

    const [roupasAtuais, setRoupasAtuais] = useState({
        base: 0,
        cabelo: 0,
        sobrancelha: 0,
        olhos: 0,
        boca: 0,
        cima: 0,
        baixo: 0,
    });

    const [roupasEditadas, setRoupasEditadas] = useState({
        base: 0,
        cabelo: 0,
        sobrancelha: 0,
        olhos: 0,
        boca: 0,
        cima: 0,
        baixo: 0,
    });
    

    const [mostrarSalvar, setMostrarSalvar] = useState(false);
    const [mostrarCancelar, setMostrarCancelar] = useState(false);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [telaPersonagemVisivel, setTelaPersonagemVisivel] = useState(false);
    const [botaoEditarVisivel, setBotaoEditarVisivel] = useState(false);

    const changeBaseImage = (step) => {
        const newIndex = roupasEditadas.base + step;
        if (newIndex >= 0 && newIndex < corpo.length) {
            setRoupasEditadas((prev) => ({ ...prev, base: newIndex }));
        }
    };

    const changeCabeloImage = (step) => {
        const newIndex = roupasEditadas.cabelo + step;
        if (newIndex >= 0 && newIndex < cabelo.length) {
            setRoupasEditadas((prev) => ({ ...prev, cabelo: newIndex }));
        }
    };

    const changeSobrancelhaImage = (step) => {
        const newIndex = roupasEditadas.sobrancelha + step;
        if (newIndex >= 0 && newIndex < sobrancelha.length) {
            setRoupasEditadas((prev) => ({ ...prev, sobrancelha: newIndex }));
        }
    };

    const changeOlhosImage = (step) => {
        const newIndex = roupasEditadas.olhos + step;
        if (newIndex >= 0 && newIndex < olhos.length) {
            setRoupasEditadas((prev) => ({ ...prev, olhos: newIndex }));
        }
    };

    const changeBocaImage = (step) => {
        const newIndex = roupasEditadas.boca + step;
        if (newIndex >= 0 && newIndex < boca.length) {
            setRoupasEditadas((prev) => ({ ...prev, boca: newIndex }));
        }
    };

    const changeCimaImage = (step) => {
        const newIndex = roupasEditadas.cima + step;
        if (newIndex >= 0 && newIndex < cima.length) {
            setRoupasEditadas((prev) => ({ ...prev, cima: newIndex }));
        }
    };

    const changeBaixoImage = (step) => {
        const newIndex = roupasEditadas.baixo + step;
        if (newIndex >= 0 && newIndex < baixo.length) {
            setRoupasEditadas((prev) => ({ ...prev, baixo: newIndex }));
        }
    };

    const salvarEscolhas = () => {
        setRoupasAtuais({ ...roupasEditadas });
        setMostrarSalvar(false);
        setMostrarCancelar(false);
        setModoEdicao(false);
    };

    const cancelarEscolhas = () => {
        setRoupasEditadas({ ...roupasAtuais });
        setMostrarSalvar(false);
        setMostrarCancelar(false);
        setModoEdicao(false);
    };

    return (
        <SafeAreaView style={styles.container}>

            {telaPersonagemVisivel && (
                <View style={styles.containerPersonagem}>
                    <Image source={corpo[roupasEditadas.base]} style={styles.base} />
                    <Image source={cabelo[roupasEditadas.cabelo]} style={styles.cabelo} />
                    <Image
                        source={sobrancelha[roupasEditadas.sobrancelha]}
                        style={styles.sobrancelha}
                    />
                    <Image source={olhos[roupasEditadas.olhos]} style={styles.olhos} />
                    <Image source={boca[roupasEditadas.boca]} style={styles.boca} />
                    <Image source={cima[roupasEditadas.cima]} style={styles.cima} />
                    <Image source={baixo[roupasEditadas.baixo]} style={styles.baixo} />

                    {telaPersonagemVisivel && !modoEdicao && (
                        <TouchableOpacity
                            onPress={() => setTelaPersonagemVisivel(false)}
                            style={styles.containerBotaoFechar}>
                            <Text style={styles.textoBotaoFechar}>Fechar</Text>
                        </TouchableOpacity>
                    )}

                    {!mostrarSalvar && !mostrarCancelar && (
                        <TouchableOpacity
                            onPress={() => {
                                setRoupasEditadas({ ...roupasAtuais });
                                setMostrarSalvar(true);
                                setMostrarCancelar(true);
                                setModoEdicao(true);
                            }}
                            style={styles.botaoEditar}>
                            <Text style={styles.textoBotaoEditar}>Editar Personagem</Text>
                        </TouchableOpacity>
                    )}
                </View>
            )}

            {(mostrarSalvar || mostrarCancelar) && (
                <View style={styles.containerOpcoes}>
                    <View style={styles.containerOpcoes0}>
                        <TouchableOpacity onPress={() => changeCabeloImage(-1)}>
                            <Image
                                source={require('../assets/assetsPersonagem/seta1.png')}
                                style={styles.seta}
                            />
                        </TouchableOpacity>
                        <Text> Cabelo </Text>
                        <TouchableOpacity onPress={() => changeCabeloImage(1)}>
                            <Image
                                source={require('../assets/assetsPersonagem/seta2.png')}
                                style={styles.seta}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.containerOpcoes1}>
                        <TouchableOpacity onPress={() => changeSobrancelhaImage(-1)}>
                            <Image
                                source={require('../assets/assetsPersonagem/seta1.png')}
                                style={styles.seta}
                            />
                        </TouchableOpacity>
                        <Text> Sobrancelha </Text>
                        <TouchableOpacity onPress={() => changeSobrancelhaImage(1)}>
                            <Image
                                source={require('../assets/assetsPersonagem/seta2.png')}
                                style={styles.seta}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.containerOpcoes2}>
                        <TouchableOpacity onPress={() => changeOlhosImage(-1)}>
                            <Image
                                source={require('../assets/assetsPersonagem/seta1.png')}
                                style={styles.seta}
                            />
                        </TouchableOpacity>
                        <Text> Olhos </Text>
                        <TouchableOpacity onPress={() => changeOlhosImage(1)}>
                            <Image
                                source={require('../assets/assetsPersonagem/seta2.png')}
                                style={styles.seta}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.containerOpcoes3}>
                        <TouchableOpacity onPress={() => changeBocaImage(-1)}>
                            <Image
                                source={require('../assets/assetsPersonagem/seta1.png')}
                                style={styles.seta}
                            />
                        </TouchableOpacity>
                        <Text> Boca </Text>
                        <TouchableOpacity onPress={() => changeBocaImage(1)}>
                            <Image
                                source={require('../assets/assetsPersonagem/seta2.png')}
                                style={styles.seta}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.containerOpcoes4}>
                        <TouchableOpacity onPress={() => changeBaseImage(-1)}>
                            <Image
                                source={require('../assets/assetsPersonagem/seta1.png')}
                                style={styles.seta}
                            />
                        </TouchableOpacity>
                        <Text> Corpo </Text>
                        <TouchableOpacity onPress={() => changeBaseImage(1)}>
                            <Image
                                source={require('../assets/assetsPersonagem/seta2.png')}
                                style={styles.seta}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.containerOpcoes5}>
                        <TouchableOpacity onPress={() => changeCimaImage(-1)}>
                            <Image
                                source={require('../assets/assetsPersonagem/seta1.png')}
                                style={styles.seta}
                            />
                        </TouchableOpacity>
                        <Text> Camiseta </Text>
                        <TouchableOpacity onPress={() => changeCimaImage(1)}>
                            <Image
                                source={require('../assets/assetsPersonagem/seta2.png')}
                                style={styles.seta}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.containerOpcoes6}>
                        <TouchableOpacity onPress={() => changeBaixoImage(-1)}>
                            <Image
                                source={require('../assets/assetsPersonagem/seta1.png')}
                                style={styles.seta}
                            />
                        </TouchableOpacity>
                        <Text> Calças </Text>
                        <TouchableOpacity onPress={() => changeBaixoImage(1)}>
                            <Image
                                source={require('../assets/assetsPersonagem/seta2.png')}
                                style={styles.seta}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {(mostrarSalvar || mostrarCancelar) && (
                <View style={styles.containerAcao}>
                    {mostrarSalvar && (
                        <TouchableOpacity
                            onPress={salvarEscolhas}
                            style={styles.botaoSalvar}>
                            <Text style={styles.textoBotaoSalvar}>Salvar</Text>
                        </TouchableOpacity>
                    )}
                    {mostrarCancelar && (
                        <TouchableOpacity
                            onPress={cancelarEscolhas}
                            style={styles.botaoCancelar}>
                            <Text style={styles.textoBotaoCancelar}>Cancelar</Text>
                        </TouchableOpacity>
                    )}
                </View>
            )}

            {!telaPersonagemVisivel && (
                <TouchableOpacity
                    onPress={toggleTelaPersonagem}
                    style={styles.containerBotao}></TouchableOpacity>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        position: 'absolute',
    },
    containerPersonagem: {
        flex: 1,
        padding: 2,
        width: 280,
        marginLeft: 30,
        backgroundColor: 'rgba(15, 130, 98, 0.4)',
        position: 'relative',
        zIndex: 1,
    },
    base: {
        marginTop: 100,
        width: '70%',
        height: '70%',
        position: 'absolute',
        top: 0,
    },
    cabelo: {
        marginTop: 100,
        width: '70%',
        height: '70%',
        position: 'absolute',
        top: 0,
        zIndex: 4,
    },
    sobrancelha: {
        marginTop: 100,
        width: '70%',
        height: '70%',
        position: 'absolute',
        top: 0,
        zIndex: 3,
    },
    olhos: {
        marginTop: 100,
        width: '70%',
        height: '70%',
        position: 'absolute',
        top: 0,
    },
    boca: {
        marginTop: 100,
        width: '70%',
        height: '70%',
        position: 'absolute',
        top: 0,
    },
    cima: {
        marginTop: 100,
        width: '70%',
        height: '70%',
        position: 'absolute',
        top: 0,
        zIndex: 2,
    },
    baixo: {
        marginTop: 99.99,
        width: '70%',
        height: '70%',
        position: 'absolute',
        top: 0,
    },
    containerOpcoes: {
        zIndex: 4,
    },
    containerOpcoes0: {
        position: 'relative',
        bottom: 540,
        left: 200,
        width: 160,
        flexDirection: 'row',
        zIndex: 2,
        backgroundColor: 'rgba(35, 150, 48, 0.8)',
        borderRadius: 45,
    },
    containerOpcoes1: {
        position: 'relative',
        bottom: 530,
        left: 180,
        width: 200,
        flexDirection: 'row',
        zIndex: 2,
        backgroundColor: 'rgba(35, 150, 48, 0.8)',
        borderRadius: 45,
    },
    containerOpcoes2: {
        position: 'relative',
        bottom: 520,
        left: 200,
        width: 150,
        flexDirection: 'row',
        zIndex: 2,
        backgroundColor: 'rgba(35, 150, 48, 0.8)',
        borderRadius: 45,
    },

    containerOpcoes3: {
        position: 'relative',
        bottom: 510,
        left: 200,
        width: 150,
        flexDirection: 'row',
        zIndex: 2,
        backgroundColor: 'rgba(35, 150, 48, 0.8)',
        borderRadius: 45,
    },
    containerOpcoes4: {
        position: 'relative',
        bottom: 500,
        left: 200,
        width: 160,
        flexDirection: 'row',
        zIndex: 2,
        backgroundColor: 'rgba(35, 150, 48, 0.8)',
        borderRadius: 45,
    },

    containerOpcoes5: {
        position: 'relative',
        bottom: 490,
        left: 180,
        width: 180,
        flexDirection: 'row',
        zIndex: 2,
        backgroundColor: 'rgba(35, 150, 48, 0.8)',
        borderRadius: 45,
    },
    containerOpcoes6: {
        position: 'relative',
        bottom: 480,
        left: 190,
        width: 150,
        flexDirection: 'row',
        zIndex: 2,
        backgroundColor: 'rgba(35, 150, 48, 0.8)',
        borderRadius: 45,
    },
    seta: {
        width: 32,
        height: 32,
        marginHorizontal: 10,
    },
    botaoEditar: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: 'rgba(35, 150, 48, 0.8)',
        padding: 10,
        borderRadius: 10,
        zIndex: 4,
    },
    textoBotaoEditar: {
        color: '#fff',
        fontWeight: 'bold',
    },
    botaoSalvar: {
        position: 'absolute',
        left: 10,
        backgroundColor: 'rgba(35, 150, 48, 0.8)',
        padding: 10,
        borderRadius: 10,
    },
    textoBotaoSalvar: {
        color: '#fff',
        fontWeight: 'bold',
    },
    botaoCancelar: {
        position: 'absolute',
        right: 10,
        backgroundColor: 'rgba(35, 150, 48, 0.8)',
        padding: 10,
        borderRadius: 10,
    },
    textoBotaoCancelar: {
        color: '#fff',
        fontWeight: 'bold',
    },
    containerBotao: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 200,
        width: 90,
        height: 90,
        zIndex: -5,
    },
    containerBotaoFechar: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 200,
        width: 75,
        height: 75,
        zIndex: -5,
    },
    textoBotaoFechar: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
