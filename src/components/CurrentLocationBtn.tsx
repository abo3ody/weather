import { MapPinIcon } from "@heroicons/react/24/outline";
import { UPDATE_QUERY } from "../feature/userSlice";
import { useAppDispatch } from "../utils/hooks";

const CurrentLocationBtn = () => {
   const dispatch = useAppDispatch();

   const getLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
         const lat = position.coords.latitude.toString();
         const long = position.coords.longitude.toString();
         const location = `${lat},${long}`;

         dispatch(UPDATE_QUERY(location));
      });
   };
   return (
      <button
         className="flex px-5 py-3 font-extrabold text-white bg-green-600 rounded-full gap-x-2 hover:bg-green-500"
         onClick={getLocation}
      >
         <MapPinIcon className="w-6 h-6 text-black" />
         Current Location
      </button>
   );
};

export default CurrentLocationBtn;
