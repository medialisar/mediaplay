import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./song/songsSlice";

export const store = configureStore({
  reducer: { 
    songs: songsReducer
   },
});