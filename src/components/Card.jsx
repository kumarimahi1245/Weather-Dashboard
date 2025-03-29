import React, { useEffect, useState } from 'react';
import { SiAccuweather } from "react-icons/si";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";
import axios from "axios";

const Card = ({ area }) => {
  const [place, setPlace] = useState({});
  const [isLoading, setIsLoading] = useState(false);


  

  useEffect(() => {
    const key = "aa62b789ac77394f8bbea1cbc2027163";
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${key}&units=metric`;

    const getData = async () => {
      if (!area) return;
      setIsLoading(true);
      try {
        const response = await axios.get(API);
        setPlace(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [area]);

  return (
    <div >
   

      {isLoading ? (
        <div className="flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          <p className="text-lg font-semibold mt-3">Fetching weather...</p>
        </div>
      ) : (
        <div>
          <div className="weather-info">
            <img
              src={`https://openweathermap.org/img/wn/${place.weather?.[0]?.icon}@2x.png`}
              alt={place.weather?.[0]?.description ?? "N/A"}
              className="mx-auto float-animation"
            />
            <p className="temperature">{place.main?.temp ?? "N/A"}°C</p>
           
            <p className="location">{place.name}</p>
          </div>

          <div className="weather-data">
            <div className="col">
              <WiHumidity className="humidity-icon" />
              <div>
                <p>{place.main?.humidity ?? "N/A"} %</p>
                <span>Humidity</span>
              </div>
            </div>

            <div className="col">
              <FaWind className="wind-icon" />
              <div>
                <p>{place.wind?.speed ?? "N/A"} Km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
