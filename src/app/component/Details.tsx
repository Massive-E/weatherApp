const Details = ({ data}) => {
  return (
    <div className="pt-2 text-base ">
     

      <div className="flex flex-row gap-16 pl-3">
        <div className=" "> 
        
            <h3>Humidity</h3>
            <h3>{data.current.humidity} %</h3>
        </div>
         <div className=" "> 
       
            <h3>Wind</h3>
            <h3>{data.current.wind_kph} KPH </h3>

        </div>
      </div>
    </div>
  )
}

export default Details