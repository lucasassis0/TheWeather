import axios from 'axios'
const key = "f5f9700117b34e38806c480cf54424e3"

export function apiData(lat, lon) {
    const adress = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
    return axios.get(adress)
}