type Props = {
   icon: JSX.Element;
   text: string;
   mesureType: string;
   wind: number;
   pressure: number;
   humidity: number;
   uv: number;
};

const SingleWeatherDetail = ({
   icon,
   text,
   mesureType,
   wind,
   pressure,
   humidity,
   uv,
}: Props) => {
   let value = 0;
   if (text === "humidity") value = humidity;
   else if (text === "wind") value = wind;
   else if (text === "pressure") value = pressure;
   else value = uv;

   return (
      <div className="flex flex-col items-center justify-center gap-y-1 ">
         {icon}
         <p className="font-bold">
            {value}
            {mesureType}
         </p>
         <p className="text-sm font-semibold capitalize md:text-base">{text}</p>
      </div>
   );
};

export default SingleWeatherDetail;
