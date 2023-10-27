import { useAppSelector } from "../utils/hooks";

const DateTimeInfo = () => {
   const { data } = useAppSelector((state) => state.user);
   // // const { name, localtime } = location;
   const time = data?.location?.localtime.split(" ")[1];
   const date = data?.location?.localtime?.split(" ")[0] as string;
   const formatedDate = new Date(date).toLocaleDateString("en-us", {
      weekday: "long",
      day: "numeric",
      month: "short",
   });

   return (
      <div className="flex flex-col items-center py-4 shadow-lg md:gap-y-0 gap-y-2 md:py-12 color-effect-300 bg-skin-fill text-skin-base rounded-3xl shadow-black md:w-4/12">
         <h4 className="text-3xl font-bold md:text-4xl color-effect-200">
            {data?.location?.name}
         </h4>
         <p className="text-6xl font-bold color-effect-200 md:text-8xl">
            {time}
         </p>
         <p className="text-sm font-normal md:text-xl color-effect-200">
            {formatedDate}
         </p>
      </div>
   );
};

export default DateTimeInfo;
