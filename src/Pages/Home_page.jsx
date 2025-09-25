import { useState, useEffect } from 'react'
import '../CSS/home.css'
import back from '../assets/back.jpg'
import clear from '../assets/sun.png'
import cloud from '../assets/cloudy.png'
import rain from '../assets/heavy-rain.png'
import snow from '../assets/snow.png'
import thunder from '../assets/storm.png'
import drizzle from '../assets/haze.png'
import mist from '../assets/mist.png'
import fog from '../assets/fog.png'
import haze from '../assets/haze.png'
const Home_page = () => {

    let [weather, setweather]=useState(null)
    let [search,setsearch]=useState('')
    
    const getWeather = async (city) => {
        if (!city) return;
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5ce1d419173d26726a9fbe51da396e3d`);
        let data = await res.json();
        setweather(data);
    };

    const sub = (e) => {
        e.preventDefault();
        getWeather(search);
    };

return (
    <div className="outer">
        <img src={back} alt="" className='background' />
        <form onSubmit={sub}>
            <input
                type="text"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
                placeholder="Enter city"
            />
            <button type="submit" className='btn'>Search</button>
        </form>
        <div className="inner">
            <h1>City :{weather && weather.main ? weather.name : "___"}</h1> <br /><br />
            <h2><span>Temperature :</span>{weather && weather.main ? (weather.main.temp - 273.15).toFixed(2) + " C" : "___"} </h2>
            <h2><span>Wind Speed :</span>{weather && weather.main ? weather.wind.speed + " kmph" : "___"}</h2>
            <h2>
                Climate :{" "}
                {weather && weather.weather ? (
                    (() => {
                        const climate = weather.weather[0].main;
                        if (climate === "Clear") return <div className='c1'><h3>Clear(sunny)</h3><img src={clear} alt="" className='climate' /></div>
                        if (climate === "Clouds") return <div className='c1'><h3>Clouds</h3><img src={cloud} alt="" className='climate' /></div>
                        if (climate === "Rain") return <div className='c1'><h3>Rain</h3><img src={rain} alt="" className='climate' /></div>
                        if (climate === "Snow") return <div className='c1'><h3>Snow</h3><img src={snow} alt="" className='climate' /></div>
                        if (climate === "Thunderstorm") return <div className='c1'><h3>ThunderStrom</h3><img src={thunder} alt="" className='climate' /></div>
                        if (climate === "Drizzle") return <div className='c1'><h3>Drizzle</h3><img src={drizzle} alt="" className='climate' /></div>
                        if (climate === "Mist") return <div className='c1'><h3>misty</h3><img src={mist} alt="" className='climate' /></div>
                        if (climate === "Fog") return <div className='c1'><h3>Foggy</h3><img src={fog} alt="" className='climate' /></div>
                        if (climate === "Haze") return <div className='c1'><h3>Hazey</h3><img src={haze} alt="" className='climate' /></div>
                        return climate;
                    })()
                ) : "___"}
            </h2>
        </div>
    </div>
)
}

export default Home_page