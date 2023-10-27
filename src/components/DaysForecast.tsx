import { useAppSelector } from "../utils/hooks";

const DaysForecast = () => {
   const { data } = useAppSelector((state) => state.user);

   return (
      <div className="flex flex-col items-center py-4 shadow-lg md:w-3/12 color-effect-300 bg-skin-fill text-skin-base gap-y-2 rounded-3xl shadow-black">
         <h1 className="text-xl font-bold md:text-2xl color-effect-200">
            3 Days Forecast:
         </h1>
         <div className="w-10/12 color-effect-200">
            {data?.forecast?.forecastday.map((day, index) => (
               <div
                  className="flex items-center justify-between "
                  key={day?.date_epoch}
               >
                  <img
                     src={
                        data?.forecast?.forecastday[index]?.day?.condition?.icon
                     }
                     alt={
                        data?.forecast?.forecastday[index]?.day?.condition?.text
                     }
                     className="w-12 h-12 "
                  />

                  <p className="font-bold">
                     {new Date(
                        data?.forecast?.forecastday[index]?.date
                     ).toLocaleDateString("en-us", {
                        weekday: "long",

                        day: "numeric",
                        month: "short",
                     })}
                  </p>
                  <p className="text-lg font-bold">
                     {Math.round(
                        data?.forecast?.forecastday[index]?.day?.avgtemp_c
                     )}
                     °C
                  </p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default DaysForecast;
