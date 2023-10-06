// import Sunny from './Assets/sunny.jpg'
// import Snow from './Assets/snow.jpg'
// import Rain from './Assets/rainy.jpg'
// import Storm from './Assets/storm.jpg'

import './App.css'

import React, { useState } from 'react'
import axios from 'axios'

function App() {

  const [data,setData]=useState({})

  const [location,setLocation]=useState('')

  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=0cf3d05c6cb443424f42856d18e090b3`
const searchLocation=(e)=>{
  if(e.key === 'Enter'){
  axios.get(url).then((res)=>{
    setData(res.data)
    console.log(res.data);

    
  
  })
  setLocation('')
}
}
  return (

    
    <div className='app' >
      

      <div className="search">

      <input type='text' value={location} onChange={event=>setLocation(event.target.value)} placeholder='Enter Location...' onKeyPress={searchLocation}/>

      </div>
      <div className='container'> 
      <div className="top">
        <div className="location">
          <h3>{data.name}</h3>
        </div>
        <div className="temp">
          {data.main?<h1>{data.main.temp.toFixed()}°F</h1>: null}
        </div>
        <div className="discription">
          {data.weather? <p className='weather'>{data.weather[0].main}</p>: null}
        </div>
      </div>
      {data.name !== undefined &&
      <div className="bottom">
        <div className="feels">
          {data.main ? <p className='bold'>{data.main.feels_like}°F</p>:null}
        
         <p>feels Like</p>
        </div>
        <div className="humid">
          {data.main? <p className='bold'>{data.main.humidity}%</p>:null}
         
          <p>humidity</p>
        </div>
        <div className="wind">
         {data.wind?<p className='bold'>{data.wind.speed}MPH</p>:null  } 
          <p>Winds</p>
          </div>
      </div>

}


      </div>


     
        

     


      </div>
     
      
      


    
    
  )
}

export default App