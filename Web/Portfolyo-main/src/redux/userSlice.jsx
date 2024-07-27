import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawer: false,
};

export const userSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    setDrawer: (state) => {
      state.drawer = !state.drawer;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDrawer } = userSlice.actions;

export default userSlice.reducer;
