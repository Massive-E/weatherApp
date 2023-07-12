import React from 'react'

interface DayForecast{
  date: string; 
  day: {
    condition: {
      icon: string;
      text: string;
    }; 
    maxtemp_c: number; 
    mintemp_c: number; 
  }
}
interface WeekForecastProps{
  data: {
    forecast?: {
      forecastday: DayForecast[];

    };
  }; 

}
const WeekForecast = ({ data } : WeekForecastProps) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 '>
      {data.forecast.forecastday.map( (day, index) =>
      (
        <div key={index} className='bg-white/20 p-1 pt-8 text-center rounded-lg flex flex-col items-center  h-64'>
          <p>{new Date(day.date).toLocaleString("en-US", { weekday: "short" })}</p>
          <img src={day.day.condition.icon} alt={day.day.condition.text}></img>
          <div className='pt-10'>
            <p>High {day.day.maxtemp_c.toFixed()}° C</p>
            <p>Low {day.day.mintemp_c.toFixed()}° C</p>
          </div>
        </div>
      )
      )}
      </div>
  );
};

export default WeekForecast;