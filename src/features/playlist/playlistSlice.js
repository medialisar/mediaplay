import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playlists: []
};

const playlistsSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {
    addPlaylists: (state, action) => {
      state.songs = action.payload;
    }
  }
});

const { actions, reducer } = playlistsSlice;
export const { addPlaylists } = actions;
export default reducer;
