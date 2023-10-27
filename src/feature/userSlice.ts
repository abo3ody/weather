import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { DataType } from "../utils/types";

const getThemeFromLocalStorage = () => {
   const theme = localStorage.getItem("theme") || "light";
   if (theme === "dark") document.documentElement.classList.add("theme-dark");
   else document.documentElement.classList.remove("theme-dark");
   return theme;
};

interface userState {
   theme: string;
   data: DataType | null;
   query: string;
   isPending: boolean;
   error: null | string;
}

const initialState: userState = {
   theme: getThemeFromLocalStorage(),
   data: null,
   query: "moscow",
   isPending: false,
   error: null,
};

export const userSlice = createSlice({
   name: "user",

   initialState,
   reducers: {
      TOGGLE_THEME: (state) => {
         state.theme = state.theme === "light" ? "dark" : "light";
         if (state.theme === "dark") {
            document.documentElement.classList.add("theme-dark");
         } else {
            document.documentElement.classList.remove("theme-dark");
         }
         localStorage.setItem("theme", state.theme);
      },
      GET_DATA_BEGIN: (state) => {
         return { ...state, isPending: true };
      },
      GET_DATA_SUCCESS: (state, action) => {
         return {
            ...state,
            data: action.payload,
            isPending: false,
         };
      },
      GET_DATA_ERROR: (state, action) => {
         return { ...state, isPending: false, error: action.payload };
      },
      UPDATE_QUERY: (state, action) => {
         return { ...state, query: action.payload };
      },
   },
});

export const {
   TOGGLE_THEME,
   GET_DATA_SUCCESS,
   UPDATE_QUERY,
   GET_DATA_ERROR,
   GET_DATA_BEGIN,
} = userSlice.actions;

export const selectCount = (state: RootState) => state.user;

export default userSlice.reducer;
