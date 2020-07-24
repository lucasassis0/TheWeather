import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function Botao(props) {
    return (
        <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={props.onPress} >
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    containerButton: {
        padding: 10
    },
    button: {
        width: 80,
        height: 20,
        borderWidth: 1,
        borderColor: "black",
    },
    buttonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: "bold",
    }
})