"use client"
import { getCurrentDate } from "../utils/currentDate"
import { MdLocationOn } from 'react-icons/md'

interface WeatherData {
  current: {
    condition: {
      icon: string;
      text: string;
    };
    temp_c: number;
    feelslike_c: number;
    wind_mph: number;
    last_updated: string;
  };
  location: {
    name: string;
    country: string;
  };
}


const Current = ({ data }: { data: WeatherData }) => {

  const currentDate = getCurrentDate()


  const weatherIcon = data?.current?.condition?.icon ?? null;
  const weatherDay = data?.current?.condition?.text ?? null;
  const CurrentTemperature = data?.current?.temp_c ?? null;
  const feelsLike = data?.current?.feelslike_c ?? null;
  const wind_mph = data?.current?.wind_mph ?? null;
  const last_updated = data?.current?.last_updated ?? null;
  const locationName = data?.location?.name ?? null;
  const locationCountryName = data?.location?.country ?? null;



  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2 p-12 ">
      <div className="flex flex-col gap-4  text-white">
        <div className="flex items-center gap-10">
          <h1 className=" text-3xl uppercase font-bold ">today</h1>
          <p className="">{currentDate}</p>
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="flex flex-col items-center justify-center">
            <p className="flex items-center font-bold text-xl gap-4">
              <span>Location</span>
              < MdLocationOn />
            </p>
            <p className="flex items-center gap-4 font-bold">
              <span>{locationName}</span>
              <span>{locationCountryName}</span>
            </p>
          </div>
          <p className="flex items-center justify-center gap-5">
            <span>{weatherDay}</span>
            <span><img src={weatherIcon} alt="weatherIcon" /></span>
          </p>
          <p className="flex flex-col gap-3">
            <span> <b>Current Temperature: </b> {CurrentTemperature.toFixed()}°</span>
            <span><b>Feels Like: </b> {feelsLike.toFixed()}°</span>
          </p>
          <p><b>Wind/m: </b> {wind_mph}</p>
          <p> <b>Last Updated: </b> {last_updated}</p>

          <div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Current