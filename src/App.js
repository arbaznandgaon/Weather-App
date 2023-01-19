import React, { useState } from "react";
import axios from "axios";

function App() {
  const[data,setData]= useState({});
  const[location,setLocation]= useState()

  const MyAPI=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=331a54698054b6219871663dccdff33c`;
  
  const searchLocation = (event)=>{
 if(event.key === 'Enter'){
  axios.get(MyAPI).then((responce)=>{
    setData(responce.data)
    console.log(responce.data)
  })
  setLocation("")
 }
  }
  
  
  return (
    <div className="App px-4 h-screen bg-cover bg-[url('https://res.cloudinary.com/practicaldev/image/fetch/s--vqF9LVka--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://images.unsplash.com/photo-1545193544-312983719627%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26auto%3Dformat%26fit%3Dcrop%26w%3D1650%26q%3D80')]">
     <input
        value={location}
        onChange={event =>setLocation(event.target.value)}
        onKeyDown={searchLocation}
        className="w-96 h-10 rounded-lg mt-10 bg-white/40 font-semibold pl-2 text-white text-2xl ml-[60rem]" 
        placeholder="Enter City ">
       </input>
     <div>
     <div className="text-7xl font-black text-red-400 flex">
        <p className="pl-8 pt-12">{data.name} </p> 
       
      </div>
      <div className="text-7xl font-bold text-yellow-300">
        <p className="pl-12 pt-8"> {data.main?  <h1>{data.main.temp}°F</h1>: null}</p>
      </div>
      {/* <div className="flex justify-end text-white text-5xl font-minibold rotate-"> 
        <p>Clouds</p>
      </div> */}
     </div>
     <div className="flex mt-[10rem] space-x-16 pt-2 ml-[33rm]  px-4  rounded-xl w-[auto]  h-28 bg-white/20
     text-white font-bold">
      <div className="text-3xl">
     <p className="ml-4">  {data.weather ? <p>{data.weather[0].main}</p>: null}</p>
        <a className="text-2xl font-semibold">Feels Like</a>
      </div>
      <div className="text-3xl">
       {data.main ? <p>{data.main.humidity}%</p>: null}
        <a className="text-2xl font-semibold">Humidity</a>
      </div>
      <div className="text-3xl">
      {data.wind ? <p>{data.wind.speed}MPH</p>: null}
        <a className="text-2xl font-semibold ml-8">Wind</a>
      </div>
      <div className="text-3xl">
      <p className="ml-3">{data.main ? <p>{data.main.sea_level}</p>: null}</p>
        <a className="text-2xl font-semibold ml-">Sea Level</a>
      </div>
      <div className="text-3xl">
      <p className="ml-3">{data.main? <h1>{data.main.temp_max}°F</h1>: null}</p>
        <a className="text-2xl font-semibold ml-4">Max Temp</a>
      </div>
      <div className="text-3xl">
      <p className="ml-3">{data.main? <h1>{data.main.temp_min}°F</h1>: null}</p>
        <a className="text-2xl font-semibold ml-4">Min Temp</a>
      </div>
      <div className="text-3xl">
      <p className="ml-10">{data.sys? <h1>{data.sys.country}</h1>: null}</p>
        <a className="text-2xl font-semibold ml-4">Country</a>
      </div>
      <div className="text-3xl">
      <p className="ml-10">{data.wind ? <p>{data.wind.deg}°F</p>: null}</p>
        <a className="text-2xl font-semibold ml-4">Wind Deg</a>
      </div>
     </div>
    </div>
  );
}

export default App;
