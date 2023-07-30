import { createSlice } from '@reduxjs/toolkit';

export type User = {
  name: string | undefined;
};

const initialState: User = {
  name: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addName(state, action) {
      state.name = action.payload;
    },
  },
});

export default userSlice.reducer;
