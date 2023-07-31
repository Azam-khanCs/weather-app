"use client"

interface WeatherForecast {
  forecast: {
    forecastday: {
      date: string;
      day: {
        condition: {
          text: string;
          icon: string;
        };
        maxtemp_c: number;
        mintemp_c: number;
        maxwind_mph: number;
        avghumidity: number;
      };
    }[];
  };
}


const WeekForecost = ({ data }: { data: WeatherForecast }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 w-full  p-12">
      {
        data.forecast.forecastday.map((day, index) => (
          <div key={index} className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center">
            <p className="font-bold text-xl text-[#4F755E]">
              {
                new Date(day.date).toLocaleString("en-US", { weekday: "short" })
              }
            </p>
            <div>
              <p className="flex items-center">
                <span>{day.day.condition.text}</span>
                <img src={day.day.condition.icon} alt="hhdohdofhdofh" />
              </p>
              <p className="flex gap-6 items-center">
                <p className="text-sm" > Max Temp :<span className="font-bold text-xl text-[#4F755E]">{day.day.maxtemp_c.toFixed()}°</span></p>
                <p className="text-sm" > Min Temp :<span className="font-bold text-xl text-[#4F755E]">{day.day.mintemp_c.toFixed()}°</span></p>

              </p>
              <div className="flex gap-6">
                <p className="text-sm">Wind/m : <span className="font-bold text-xl text-[#4F755E]">{day.day.maxwind_mph.toFixed()}</span></p>
                <p className="text-sm">Humadity : <span className="font-bold text-xl text-[#4F755E]">{day.day.avghumidity.toFixed()}</span></p>
              </div>
            </div>


          </div>
        ))
      }
    </div>
  )
}

export default WeekForecost