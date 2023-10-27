import { useAppSelector } from "../utils/hooks";

const WindIcon = () => {
   const { theme } = useAppSelector((state) => state.user);

   return (
      <svg
         className={`h-8 w-8 md:h-10 md:w-10  ${
            theme === "light" ? "text-black" : "text-white"
         }color-effect-200`}
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
      >
         {" "}
         <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
      </svg>
   );
};

export default WindIcon;
