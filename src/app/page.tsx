"use client"; 
import React from "react";
import { useState, useEffect } from "react";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import Input from "./component/Input";
import Current from "./component/Current";
import WeekForecast from "./component/WeekForecast"
import Details from "./component/Details";
import AirQualityGraph from "./component/AirQualityGraph";


const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  // I tried hiding my api key in the .env file however it did not seem to work at that point. 
  const url = `http://api.weatherapi.com/v1/forecast.json?key=ac7f8568561e49058b0122906231107&q=${location}&days=5&aqi=yes&alerts=yes`;
  const defaultUrl = `http://api.weatherapi.com/v1/forecast.json?key=ac7f8568561e49058b0122906231107&q=London&days=5&aqi=yes&alerts=yes`;

  const searchHandle = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("Location Not Found!");
        setData({});
      }
    }
  
  };

  
  // this will display weather for london as a default city when the page is loaded. 
   useEffect(() => {
    const fetchDefaultWeather = async () => {
      try {
        const response = await fetch(defaultUrl);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError("Error fetching default weather.");
      }
    };

    fetchDefaultWeather();
  }, []);
  

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = <div>Todays Weather</div>;
  } else if (error !== "") {
    content = (
      <div>
        <p>Please Enter A Valid City Name</p>
      </div>
    );
  } else {
    content = (
      <div>
        <div className="flex flex-row gap-10">
          <div className="w-1/2 bg-white/20 pl-4 pt-5 rounded-lg">
            <div className=" flex flex-row">
            <div className="pb-5 w-1/2 "> 
              <Current data={data} />
              <Details data={data} />
            </div>
            <div className="w-1/2">
                <AirQualityGraph
                  co={data.current.air_quality.co}
                  o3={data.current.air_quality.o3}
                  no2={data.current.air_quality.no2} />
            </div>
          </div>
          </div>
          <div className="w-1/2">
            
            <p className="font-light">Week Forecast</p>
            <WeekForecast data={data} />
          </div>
        </div>
        <div>
            

        </div>
      </div>
    );
  }

  return (
    <div className="bg-cover bg-gradient-to-t from-sky-800 to-sky-100 h-screen text-slate-600">
      <div className="bg-white/25 w-full rounded-lg flex flex-col h-full">
        <div className="flex flex-col md:flex-row justify-between items-center  p-5 pt-12 ">
          <Input searchHandle={searchHandle} setLocation={setLocation} />
          <h1 className="mb-8 md:-0 order-1 py-2 px-4 rounded-1 w-1/4 text-3xl">
            WEATHER APP
          </h1>
        </div>
        <div className="pl-5 pr-8 pt-4	">{content}</div>
      </div>
    </div>
  );
};

export default Home;
