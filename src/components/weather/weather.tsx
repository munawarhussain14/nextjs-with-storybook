"use client";
import { useGetWeatherQuery } from "@/store/api/weatherApi";
import { useState } from "react";

export default function WeatherWidget() {
  const [city, setCity] = useState("London");
  const { isLoading, data, error } = useGetWeatherQuery(city);
  return <>{isLoading ? "Loading..." : JSON.stringify(data)}</>;
}
