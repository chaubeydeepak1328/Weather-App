import React from "react";
import Image from "./images/logo.png";

const Card = () => {
    return (
        <>
            <div className="container " id="main_container">
                <div id="w_card" className="card card mt-5 col-sm-12 col-md-4" >
                    <img src={Image} id="img" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div className="weatherInfo">
                            <p>Moscow ,RU</p>
                            <h3>Clouds:broken clouds   </h3>
                            <p>Temp:277.31</p>
                            <p>humidity:100</p>

                            <div className="extraInfo">
                                <p>Temp_min:276.06</p>
                                <p>Temp_max:278.44</p>
                                <p>pressure:1022</p>
                                <p>sea_level:1022</p>
                                <p>grnd_level:1004</p>
                            </div>

                            <div className="wind">
                                <p>speed:3.74</p>
                                <p>deg:204</p>
                                <p>gust:6.9</p>
                            </div>

                            <div className="sun">
                                <p>sunrise:13:20</p>
                                <p>sunrise:14:23</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;