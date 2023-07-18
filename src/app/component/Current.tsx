import { getCurrentDate } from "../utils/CurrentDate";

interface WeatherProp {
  current: {
    condition: {
      icon: string;
       text: string;
    };
    temp_c: number;
    
  };
 
}

const Current = ({ data }: { data: WeatherProp }) => {
    const currentDate = getCurrentDate();
    const weatherIcon = data.current.condition.icon;
    return (
        <div>
        <div className="">
            <div className="pl-3">
                <h1 className="text-2xl " >Today</h1>
                <p className="">{currentDate}</p>
                </div>
            </div>

            <div className="flex flex-row pr-5">
                {
                    weatherIcon && (
                    <div > 
                        <img className="w-32" src={weatherIcon} alt={data.current.condition.text}  />
                        </div>
                    )}
                <p className="text-3xl pt-12">{data.current.temp_c.toFixed()} ° C</p>
                
            </div>
            
        </div>
    )
};

export default Current;
