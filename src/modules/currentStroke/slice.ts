import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { endStroke } from "../shared/sharedAction";
import { Point, Stroke } from "../../type";

const initialState: Stroke = {
  points: [],
  color: "black",
};

const slice = createSlice({
  name: "currentStroke",
  initialState: initialState,
  reducers: {
    beginStroke: (state, action: PayloadAction<Point>) => {
      state.points = [action.payload];
    },

    updateStroke: (state, action: PayloadAction<Point>) => {
      state.points.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(endStroke, (state) => {
      state.points = [];
    });
  },
});

export const currentStroke = slice.reducer;

export const {beginStroke, updateStroke} = slice.actions
