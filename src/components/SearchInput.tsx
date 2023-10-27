import { useRef } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { UPDATE_QUERY } from "../feature/userSlice";
import { useAppDispatch } from "../utils/hooks";

const SearchInput = () => {
   const inputRef = useRef<HTMLInputElement>(null);

   const dispatch = useAppDispatch();

   const handleSubmit = (e: any) => {
      e.preventDefault();
      dispatch(UPDATE_QUERY(inputRef.current?.value as string));
   };

   const handleReset = () => {
      if (inputRef.current !== null) inputRef.current.value = "";
   };
   return (
      <div className="w-full md:w-7/12 ">
         <form
            action=""
            className="flex items-center py-2 transition-colors duration-300 border border-black bg-skin-fill rounded-3xl px-9 gap-x-2"
            onSubmit={handleSubmit}
         >
            <button
               type="submit"
               className="w-6 h-6 md:w-8 md:h-8 text-skin-base"
            >
               <MagnifyingGlassIcon />
            </button>

            <input
               ref={inputRef}
               type="text"
               placeholder="Search for your preffered city..."
               className="flex-1 bg-transparent outline-none md:text-lg text-skin-base "
            />
            {
               <button
                  type="button"
                  className="w-5 h-5 text-skin-base"
                  onClick={handleReset}
               >
                  <XMarkIcon />
               </button>
            }
         </form>
      </div>
   );
};

export default SearchInput;
