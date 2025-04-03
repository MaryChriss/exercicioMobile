import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

type HeaderProps = {
    title: string;
  };

  const logo = require('../assets/image.png');


export const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <View style={styles.header}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.title} >{ title }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        marginTop: 90,
        marginBottom: 40
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'purple',
      },
      logo: {
        width: 50,
        height: 50,
        borderRadius: 35
      },
});