import React, { useEffect, useState } from "react";
import image from "./images/logo.png"
import Card from "./Card";

const Navbar = () => {
    const [text, setText] = useState("Delhi India");

    const [weather, setWeather] = useState({
        country: '',
        city: '',
        humidity: '',
        pressure: '',
        temp: '',
        temp_max: '',
        temp_min: '',
        sunrise: '',
        sunset: '',
        title: '',
        desc: '',
    })

    const inputEvent = (event) => {
        setText(event.target.value);
    }


    function convertUnixTimestampToTime(timestamp) {
        const milliseconds = timestamp * 1000;
        const dateObject = new Date(milliseconds);

        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1; // Month is zero-based, so add 1
        const day = dateObject.getDate();
        const hours = dateObject.getHours();
        const minutes = dateObject.getMinutes();
        const seconds = dateObject.getSeconds();

        // Format the date and time
        const formattedTime = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

        return formattedTime;
    }


    const ApiCall = async () => {
        try {
            const res = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&apiKey=cc4c88b448964d59a69a49036301173c`);
            const data = await res.json();
            const lat = data.features[0].bbox[1];
            const lon = data.features[0].bbox[0];
            const res1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=84b3ef7e6cc3cbda6e25907eb64340a0`);
            const data1 = await res1.json();
            console.log(data)
            console.log(data1)


            setWeather(prevWeather => ({
                ...prevWeather,
                country: data.features[0].properties.country,
                city: data.features[0].properties.city,
                humidity: data1.main.humidity,
                pressure: data1.main.pressure,
                temp: data1.main.temp,
                temp_max: data1.main.temp_max,
                temp_min: data1.main.temp_min,
                sunrise: convertUnixTimestampToTime(data1.sys.sunrise),
                sunset: convertUnixTimestampToTime(data1.sys.sunset),
                title: data1.weather[0].main,
                desc: data1.weather[0].description,
            }));
        } catch (error) {
            console.log(error)
        }
    }

    const find = (event) => {
        event.preventDefault();
        ApiCall();
    }

    useEffect(() => {
        ApiCall();
    }, []); // Empty dependency array to run effect only once after initial render


    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <img style={{ width: "2.5rem" }} src={image} alt="weather" />
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={inputEvent} />
                        <button className="btn btn-outline-success" type="submit" onClick={find}>Search</button>
                    </form>
                </div>
            </nav>
            <Card country={weather.country} city={weather.city} humidity={weather.humidity} pressure={weather.pressure} temp={weather.temp} temp_max={weather.temp_max} temp_min={weather.temp_min} sunrise={weather.sunrise} sunset={weather.sunset} title={weather.sunset} desc={weather.desc} />
        </>
    )
}
export default Navbar;