import { RootState } from "../../type";
import { strokeAction, endStroke } from "./action";
import { createReducer } from "@reduxjs/toolkit";

const initialState: RootState["strokes"] = [];

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(endStroke, (state, action) => {
    if (action.payload.points.length) {
      state.push(action.payload)
    }
  });
});

// export const reducer = (
//   state: RootState["strokes"] = [],
//   action: strokeAction
// ): RootState["strokes"] => {
//   if (action.type === "END_STROKE") {
//     if (action.payload.points.length) {
//       return state;
//     }
//     return state.concat(action.payload)
//   }

//   return state;
// };
