import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { TOGGLE_THEME } from "../feature/userSlice";

const ThemeSwitcher = () => {
   const { theme } = useAppSelector((state) => state.user);
   const dispatch = useAppDispatch();

   const handleClick = () => {
      dispatch(TOGGLE_THEME());
   };

   return (
      <button className="text-center outline-none" onClick={handleClick}>
         <div className="relative flex items-center self-start w-20 border border-black shadow-lg md:w-24 color-effect-300 bg-skin-fill h-9 rounded-3xl">
            <div
               className={`w-6 h-6 rounded-full bg-skin-themeBtn absolute transition-transform duration-500  ${
                  theme === "light"
                     ? "translate-x-1"
                     : "translate-x-12 md:translate-x-16"
               }`}
            ></div>
         </div>
         <span className="font-extrabold text-skin-base color-effect-200">
            {theme === "light" ? "Light" : "Dark"} Mode
         </span>
      </button>
   );
};

export default ThemeSwitcher;
