import { Alert } from 'react-native';
import { apiData } from '../api/apiData'

export default function getData(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const lat = await position.coords.latitude
        const lon = await position.coords.longitude
        console.log('position.coords.latitude: ', position.coords.latitude);
        console.log('position.coords.longitude: ', position.coords.longitude);
        apiData(lat, lon)
          .then(res => {
            const result = res.data
            console.log('result: ', result);
            
          })
          .catch(err => {
            Alert.alert('erro: ', err);
          })
      });
    }
  }