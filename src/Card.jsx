import React from "react";
import Image from "./images/logo.png";

const Card = (props) => {

    
    return (
        <>
            <div className="container " id="main_container">
                <div id="w_card" className="card card mt-5 col-sm-12 col-md-4" >
                    <img src={Image} id="img" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div className="weatherInfo">
                            <p>{props.city} ,{props.country}</p>
                            <h3>{props.title}:{props.desc}</h3>
                            <p>Temp:{props.temp}</p>
                            <p>humidity:{props.humidity}</p>

                            <div className="extraInfo">
                                <p>Temp_min:{props.temp_min}</p>
                                <p>Temp_max:{props.temp_max}</p>
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