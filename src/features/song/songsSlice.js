import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: {},
}

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    addSongs: (state, { payload }) => {
      state.songs = payload;
    }
  }
})

export const { addSongs } = songsSlice.actions;
export const getAllSongs = (state) => state.songs.songs;
export default songsSlice.reducer;