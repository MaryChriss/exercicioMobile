import React from "react";
import { View, StyleSheet, Text } from "react-native";

type SignoCardProps = {
    signo: string;
    previsao: string;
    corDaSorte: string;
  };

export const SignoCard: React.FC<SignoCardProps> =({ signo, corDaSorte, previsao }) =>{
    return (
        <View style={styles.card}>
            <Text style={styles.signo}>{signo}</Text>
            <Text style={styles.previsao}>{previsao}</Text>
            <Text style={styles.cor}>Cor da Sorte: {corDaSorte}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
      backgroundColor: '#f9efff',
      padding: 15,
      margin: 10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    signo: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    previsao: {
      fontSize: 16,
      marginVertical: 5,
    },
    cor: {
      fontSize: 14,
      fontStyle: 'italic',
    },
  });
  