import { useAppSelector } from "../utils/hooks";

const HourlyForecast = () => {
   const { data } = useAppSelector((state) => state.user);

   return (
      <div className="flex flex-col items-center px-2 py-4 shadow-lg md:w-9/12 color-effect-300 bg-skin-fill rounded-3xl shadow-black gap-y-2 text-skin-base scro">
         <h1 className="text-xl font-bold md:text-2xl color-effect-200">
            {" "}
            Hourly Forecast:
         </h1>
         <div className="flex w-10/12 overflow-x-scroll gap-x-2 md:gap-x-4 color-effect-200">
            {data?.forecast?.forecastday[0]?.hour.map((hour) => (
               <div
                  className={`flex flex-col items-center px-2 py-4 my-2 shadow-md is-night gap-y-3 rounded-3xl ${
                     hour.is_day ? "is-day" : "is-night"
                  }`}
               >
                  <p className="text-lg font-bold">{hour.time.split(" ")[1]}</p>
                  {/* <SunIcon className="w-8 h-8 md:h-10 md:w-10" /> */}
                  <img
                     src={hour.condition.icon}
                     alt={hour.condition.text}
                     className="object-cover w-8 h-8 md:h-16 md:w-16"
                  />
                  <p className="font-bold">{Math.round(hour.temp_c)}°C</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default HourlyForecast;
