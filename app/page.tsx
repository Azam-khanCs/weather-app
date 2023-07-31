"use client"
import React, { useState } from "react"
import Input from "./components/Input"
import Current from "./components/Current"
import WeekForecost from "./components/WeekForecost"

const Home = () => {


  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const [error, setError] = useState("")

  const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=f4050ad72bf045f983a173337233007&q=${location}&days=10&aqi=yes&alerts=yes

`
  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      try {
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error()
        }
        const data = await response.json()
        setData(data)
        setLocation("")
        setError("")
      }
      catch (error) {
        setError("city not found")
        setData({})
      }
    }
  }

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="text-3xl font-bold text-slate-600 text-center pb-10">
        <h2>Welcome to the weather App</h2>
      </div>
    )
  }
  else if (error !== "") {
    content = (
      <div className="text-3xl font-bold text-red-500 text-center pb-10">
        <p>City not found</p>
        <p>Enter a valid city name</p>
      </div>
    )
  }
  else {
    content = (
      <>
        <div>
          <Current data={data} />
          <WeekForecost data={data} />

        </div>

      </>
    )
  }

  return (
    <div className=" bg-gradient-to-r from-blue-500 to-blue-200 h-auto p-12">
      <div className="w-full h-fi]] bg-white/25">
        <div className="flex flex-col md:flex-row justify-between items-center p-12">

          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className=" text-3xl text-white mb-8 md:mb-0 order-1 py-2 px-4 rounded-xl italic font-bold">Weather App</h1>
        </div>

        <div className="">
          {content}
        </div>
      </div>
    </div>
  )
}

export default Home