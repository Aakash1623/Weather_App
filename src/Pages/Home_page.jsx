import { useState, useEffect } from 'react'
import '../CSS/home.css'
import back from '../assets/back.jpg'
const Home_page = () => {

    let [weather, setweather]=useState(null)
    let [search,setsearch]=useState('')
    


    const sub = (e) => {
        e.preventDefault();
        
    };

    useEffect(() => {
        if (search) {
            let getdata = async () => {
                let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5ce1d419173d26726a9fbe51da396e3d`);
                let data = await res.json();
                setweather(data);
            };
            getdata();
        }
    }, [search]);

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
            <h1>City :{weather && weather.main ? weather.name : "___"}</h1>
            <h2><span>Temperature :</span>{weather && weather.main ? (weather.main.temp - 273.15).toFixed(2) + " C" : "___"} </h2>
            <h2><span>Wind Speed :</span>{weather && weather.main ? weather.wind.speed + " kmph" : "___"}</h2>
            <h2>Climate :{weather && weather.weather ? weather.weather[0].main : "___"}</h2>
        </div>
    </div>
)
}

export default Home_page