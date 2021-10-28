import axios from 'axios'
console.log(process.env.REACT_APP_WEATHER_API_KEY)
const apiKey = process.env.REACT_APP_WEATHER_API_KEY
const apiBase = REACT_APP_WEATHER_API_BASE

const getData = async (location = 'Kampala')=>{
    const API_URL = `?${apiBase}?key=${apiKey}&q=${location}`
    let response = ''

    try {
        response = await axios.get(API_URL)
        // console.log(response)
        let { data } = response
        return(data)
        // console.log(data)
    } catch (error) {

        console.log(error)
        console.log(response)
        return {'error':'resource not found'}
    }
}
export default getData
