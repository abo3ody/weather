import { DateTimeInfo, DaysForecast, HourlyForecast, WeatherDetails } from ".";

const Dashborad = () => {
   return (
      <main className="flex flex-col w-11/12 pb-8 mx-auto md:gap-y-10 gap-y-3 ">
         <section className="flex flex-col md:gap-x-12 md:flex-row gap-y-3">
            <DateTimeInfo />
            <WeatherDetails />
         </section>
         <section className="flex flex-col gap-y-3 md:gap-x-12 md:flex-row ">
            <DaysForecast />
            <HourlyForecast />
         </section>
      </main>
   );
};

export default Dashborad;
