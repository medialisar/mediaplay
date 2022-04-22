import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./song/songsSlice";
import playlistsReducer from "./playlist/playlistSlice";

export const store = configureStore({
  reducer: { 
    songs: songsReducer,
    playlists: playlistsReducer,
   },
});