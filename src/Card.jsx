import React from "react";
// import Image from "./images/logo.png";

const Card = (props) => {

    const Image = `https://source.unsplash.com/random/300×300/?${props.desc},${props.country},weather,sky`
    return (
        <>
            <div className="container " id="main_container">
                <div id="w_card" className="card card mt-5 col-sm-12 col-md-4" >
                    <img src={Image} id="img" className="card-img-top p-1" alt="..." />
                    <div className="card-body">
                        <div className="weatherInfo">
                            <p>{props.city} ,{props.country}</p>
                            <h3>{props.title}:{props.desc}</h3>
                            <p>Temp:{props.temp}°C</p>
                            <p>humidity:{props.humidity}</p>

                            <div className="extraInfo">
                                <p>Temp_min:{props.temp_min}°C</p>
                                <p>Temp_max:{props.temp_max}°C</p>
                                <p>pressure:{props.pressure}</p>
                            </div>

                            <div className="sun">
                                <p>sunrise:{props.sunrise}</p>
                                <p>sunrise:{props.sunset}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;