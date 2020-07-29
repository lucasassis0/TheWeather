import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Image } from 'react-native';
import Button from './src/components/Button';
import styles from './src/styles/styles';
import Card from './src/components/Card'
import logo from './src/img/logo_size.jpg'
import { apiData } from './src/api/apiData'

export default function App() {
  const [city, setCity] = useState('')
  const [temp, setTemp] = useState(0)
  const [fl, setFl] = useState(0)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [ws, setWs] = useState(0)
  const [dp, setDp] = useState('none')
  
  const getData = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const lat = await position.coords.latitude
        const lon = await position.coords.longitude
        const res = await apiData(lat, lon)
        const result = res.data
        const { name, main, wind } = result

        setCity(name)
        setTemp(main.temp - 273.15)
        setFl(main.feels_like - 273.15)
        setHumidity(main.humidity)
        setMax(main.temp_max - 273.15)
        setMin(main.temp_min - 273.15)
        setWs(wind.speed * 3.6)
        setDp('flex')
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.containerButton}>
        <Button
          title="Atualizar"
          onPress={() => { getData() }}
        />
      </View>
      <View style={{ flex: 3, display: dp }}>
        <View style={styles.stats}>
          <Card title={city} text={temp.toFixed(1) + 'ºC'} />
        </View>
        <View style={{ borderColor: '#c8c8c8', borderWidth: 1, marginHorizontal: 30 }} />
        <View style={styles.stats}>
          <Card title='Min/Máx' text={min.toFixed(1) + 'ºC/' + max.toFixed(1) + 'ºC'} />
          <Card title="Sensação Térmica" text={fl.toFixed(1) + "ºC"} />
        </View>
        <View style={{ borderColor: '#c8c8c8', borderWidth: 1, marginHorizontal: 30 }} />
        <View style={styles.stats}>
          <Card title="Humidade" text={humidity + "%"} />
          <Card title="Velocidade do vento" text={ws.toFixed(1) + " km/h"} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}