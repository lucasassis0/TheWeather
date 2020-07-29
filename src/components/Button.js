import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles'

export default function Botao(props) {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress} >
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}