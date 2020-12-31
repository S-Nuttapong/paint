import { createSlice } from "@reduxjs/toolkit";
import { endStroke } from "../shared/sharedAction";

const slice = createSlice({
  name: "historyIndex",
  initialState: 0,
  reducers: {
    undo: (state) => {
      return state;
    },

    redo: (state) => {
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(endStroke, () => {
      return 0;
    });
  },
});

export const historyIndex = slice.reducer;

export const { undo, redo } = slice.actions;
