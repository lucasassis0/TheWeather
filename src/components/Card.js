import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

export default function Card (props) {
    return (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.titleCard}>{props.title}</Text>
            <Text style={styles.textCard}>{props.text}</Text>
        </TouchableOpacity>
    )
}