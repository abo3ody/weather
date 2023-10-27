export interface WeatherDetailType {
   id: number;
   icon: JSX.Element;
   value: number;
   text: string;
   mesureType: string;
}

export interface DataType {
   location: {
      name: string;
      localtime: string;
   };
   current: {
      temp_c: number;
      condition: { text: string; icon: string };
      wind_kph: number;
      pressure_mb: number;
      humidity: number;
      feelslike_c: number;
      uv: number;
   };
   forecast: {
      forecastday: Array<{
         date: string;
         date_epoch: number;
         day: {
            avgtemp_c: number;
            condition: {
               text: string;
               icon: string;
            };
         };
         astro: {
            sunrise: string;
            sunset: string;
         };
         hour: Array<{
            time: string;
            temp_c: number;
            is_day: number;
            condition: {
               text: string;
               icon: string;
            };
         }>;
      }>;
   };
}
