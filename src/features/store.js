import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./song/songsSlice";
import playlistReducer from "./playlist/playlistSlice";

export const store = configureStore({
  reducer: { 
    songs: songsReducer,
    playlist: playlistReducer
   },
});