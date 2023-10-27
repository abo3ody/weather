import { weatherDetails } from "../utils";
import { WeatherDetailType } from "../utils/types";
import { SingleWeatherDetail } from ".";
import { SunriseIcon, SunsetIcon } from "../icons";
import { useAppSelector } from "../utils/hooks";

const WeatherDetails = () => {
   const { data } = useAppSelector((state) => state.user);

   return (
      <div className="flex flex-wrap py-2 shadow-lg gap-y-2 md:gap-y-0 md:flex-nowrap md:w-8/12 color-effect-300 bg-skin-fill rounded-3xl shadow-black text-skin-base">
         {/* left */}
         <div className="flex flex-col items-center order-1 w-1/2 gap-y-2 md:gap-y-0 md:w-1/3 color-effect-200 md:order-none">
            <div className="flex flex-col justify-center text-center h-1/2">
               <p className="text-5xl font-bold md:text-7xl">
                  {data?.current?.temp_c && Math.round(data?.current?.temp_c)}°C
               </p>
               <p className="text-sm md:text-base">
                  Feels like:{" "}
                  <span className="font-semibold md:text-lg">
                     {data?.current?.feelslike_c &&
                        Math.round(data?.current?.feelslike_c)}
                     °C
                  </span>
               </p>
            </div>
            <div className="flex flex-col justify-center text-sm h-1/2 md:text-base">
               <div className="flex items-center gap-x-2 ">
                  {/* <img
                     src={theme === "light" ? sunRiseLight : sunRiseDark}
                     alt="sun-rise"
                     className="w-10 h-10"
                  /> */}
                  <SunriseIcon />
                  <div className="font-bold ">
                     <p>Sunrise</p>
                     <p>{data?.forecast?.forecastday[0]?.astro?.sunrise}</p>
                  </div>
               </div>
               <div className="flex items-center gap-x-2">
                  {/* <img
                     src={theme === "light" ? sunSetLight : sunSetDark}
                     alt="sun-set"
                     className="w-10 h-10"
                  /> */}
                  <SunsetIcon />
                  <div className="font-bold">
                     <p>Sunset</p>
                     <p>{data?.forecast?.forecastday[0]?.astro?.sunset}</p>
                  </div>
               </div>
            </div>
         </div>
         {/* center */}
         <div className="flex flex-col items-center justify-center w-full md:w-1/3 gap-y-1 md:gap-y-2 color-effect-200">
            {/* <SunIcon className="w-24 h-24 md:w-32 md:h-32" /> */}
            {data?.current?.condition?.icon && (
               <img
                  src={data?.current?.condition?.icon}
                  alt="data?.current?.condition?.text"
                  className="object-fill w-24 h-24 md:w-32 md:h-32"
               />
            )}
            <p className="text-2xl font-bold text-center md:text-3xl">
               {data?.current?.condition?.text}
            </p>
         </div>
         {/* right */}
         <div className="grid order-2 w-1/2 grid-cols-2 md:gap-y-0 gap-y-2 md:w-1/3 color-effect-200 md:order-none">
            {weatherDetails.map(
               (detail: WeatherDetailType) =>
                  data?.current && (
                     <SingleWeatherDetail
                        key={detail.id}
                        {...detail}
                        wind={data?.current?.wind_kph}
                        pressure={data?.current?.pressure_mb}
                        humidity={data?.current?.humidity}
                        uv={data?.current?.uv}
                     />
                  )
            )}
         </div>
      </div>
   );
};

export default WeatherDetails;
