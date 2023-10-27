import { Dashborad, Header } from "./components";
import { useAppSelector } from "./utils/hooks";
import { useFetch } from "./utils/useFetch";

export default function App() {
   const { query, isPending } = useAppSelector((state) => state.user);

   useFetch(query);
   return (
      <div
         className={`${
            isPending ? "h-screen" : "h-full"
         } transition-colors duration-300 app-bg bg-skin-bgColor`}
      >
         <Header />
         {isPending ? <div className=" loading" /> : <Dashborad />}
      </div>
   );
}
