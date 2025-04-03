import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header';
import { SignoCard } from './components/SignoCard';

type typesSign = {
  signo: string;
  previsao: string;
  corDaSorte: string;
};

const signos: typesSign[] = [
  { signo: 'Áries', previsao: 'Hoje é um bom dia para novos começos!', corDaSorte: 'Vermelho' },
  { signo: 'Touro', previsao: 'Mantenha a calma e confie no processo.', corDaSorte: 'Verde' },
  { signo: 'Gêmeos', previsao: 'Uma surpresa agradável pode aparecer.', corDaSorte: 'Amarelo' },
  { signo: 'Câncer', previsao: 'A intuição será sua melhor guia hoje.', corDaSorte: 'Prata' },
  { signo: 'Leão', previsao: 'Brilhe sem medo e conquiste seu espaço.', corDaSorte: 'Dourado' },
  { signo: 'Virgem', previsao: 'A organização trará sucesso no seu dia.', corDaSorte: 'Azul' },
  { signo: 'Libra', previsao: 'O equilíbrio será essencial para resolver conflitos.', corDaSorte: 'Rosa' },
  { signo: 'Escorpião', previsao: 'Mantenha o foco e evite distrações desnecessárias.', corDaSorte: 'Preto' },
  { signo: 'Sagitário', previsao: 'Aventure-se e descubra algo novo.', corDaSorte: 'Laranja' },
  { signo: 'Capricórnio', previsao: 'A persistência será recompensada em breve.', corDaSorte: 'Marrom' },
]

export default function App() {
  return (
    <View style={styles.container}>
      <Header title='Previsão dos signos'/>
        <FlatList
        data={signos}
        keyExtractor={(item) => item.signo}
        renderItem={({ item }) => (
          <SignoCard signo={item.signo} previsao={item.previsao} corDaSorte={item.corDaSorte}/>
        )}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6d3ff',
  },
});
