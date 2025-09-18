import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "8871d924d6f80cd83e76221752fe57ba";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  }),
  endpoints: (builder) => ({
    getWeather: builder.query<any, string>({
      query: (city) => `weather?q=${city}&appid=${API_KEY}&units=metric`,
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
