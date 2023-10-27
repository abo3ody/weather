import { useAppSelector } from "../utils/hooks";

const PressureIcon = () => {
   const { theme } = useAppSelector((state) => state.user);

   return (
      <svg
         className={`h-8 w-8 md:h-10 md:w-10  ${
            theme === "light" ? "text-black" : "text-white"
         }color-effect-200`}
         width="24"
         height="24"
         viewBox="0 0 24 24"
         stroke="currentColor"
         fill="none"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
      >
         {" "}
         <path stroke="none" d="M0 0h24v24H0z" />{" "}
         <circle cx="12" cy="12" r="9" /> <circle cx="12" cy="12" r="1" />{" "}
         <line x1="13.41" y1="10.59" x2="16" y2="8" />{" "}
         <path d="M7 12a5 5 0 0 1 5 -5" />
      </svg>
   );
};

export default PressureIcon;
