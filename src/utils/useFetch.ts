import axios from "axios";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import {
   GET_DATA_BEGIN,
   GET_DATA_ERROR,
   GET_DATA_SUCCESS,
} from "../feature/userSlice";

const API_KEY = import.meta.env.VITE_API_KEY;

export const useFetch = (query: string) => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      const fetchData = async () => {
         dispatch(GET_DATA_BEGIN());
         try {
            const response = await axios.get(
               `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=3`
            );
            dispatch(GET_DATA_SUCCESS(response.data));
         } catch (error) {
            //   setError(`${error.message}`);
            console.log(error);

            dispatch(GET_DATA_ERROR(error));
         }
      };
      fetchData();
   }, [query]);
};
