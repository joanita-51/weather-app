import React from 'react'
import getData from '../helpers/fetchData'
import '../../styles/posts.css'

const Hero = () => {
    const [stateLocation, setStateLocation]= React.useState('')
    const [weatherInfo, setWeatherInfo]= React.useState({})
    const [error, setError]= React.useState('')
    const handleInput =event=>{
        const {value: inputLocation}= event.target
        //console.log(event.target.value)
        setStateLocation(inputLocation)
    }
    const handleSubmit =async event=>{
        event.preventDefault()
        // console.log(event)
        // console.log('Form Submitted')
        setWeatherInfo({})
        const response = await getData(stateLocation)
        console.log(response)

        if (response) {
            const {location:{country, lon, lat }} = response
            const {current:{temp_c, temp_f, condition:{text, icon, code}}} =response
            setWeatherInfo({country,lon,lat,temp_c,temp_f,text,icon,code})
            
        }
        else {
            setError('Technical challenges encountered , Please try again')
        }
    }
    const {country, lon, lat, temp_c,temp_f,text, icon,code} = weatherInfo
    return (
        <div className='container'>
           <h1>Weather App</h1> 
           <p><b>Use this app to find out the current weather information of a location.</b></p>
           <div className='location'>
           <form action="#" method="post" onSubmit={handleSubmit}>
           <input
            type="text"
            placeholder = "Location"
            onChange ={handleInput}
           />
           <input type ="submit" value= "Go"/>
           </form>
           <div className="content">
           {error}
           {icon && <img src ={icon}/>}
           {country}
           <em>{text}</em>
           <h2>{temp_c} &#8451;</h2>
           Longitude: {lon}<br/>
           Latitude:  {lat}<br/>
           
           <h2>{temp_f} &#8457;</h2>
           
           <h5>{code}</h5> 
           </div>

           </div>


        </div>
    )
}

export default Hero
