import { createSlice } from "@reduxjs/toolkit";
import { Stroke } from "../../type";
import { endStroke } from "../shared/sharedAction";

const initialState: Stroke[] = [];

const slice = createSlice({
  name: "stroke",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(endStroke, (state, action) => {
      if (action.payload.points.length) {
        state.push(action.payload);
      }
    });
  },
});

export const stroke = slice.reducer
