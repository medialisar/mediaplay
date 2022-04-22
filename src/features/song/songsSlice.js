import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs: []
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    addSongs: (state, action) => {
      state.songs = action.payload;
    }
  }
});

const { actions, reducer } = songsSlice;
export const { addSongs } = actions;
export default reducer;
