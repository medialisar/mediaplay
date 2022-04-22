import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlist: {},
}

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    updatePlaylist: (state, { payload }) => {
      state.playlist = payload;
    }
  }
})

export const { updatePlaylist } = playlistSlice.actions;
export const getAllPlaylist = (state) => state.playlist.playlist;
export default playlistSlice.reducer;