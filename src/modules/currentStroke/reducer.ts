import { RootState } from "../../type";
import { createReducer } from "@reduxjs/toolkit";
import { beginStroke, updateStroke, endStroke } from "./action";


type currentStrokeState = RootState["currentStroke"];

const initialState: currentStrokeState = {
  points: [],
  color: "black",
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(beginStroke, (state, action) => {
    state.points = [action.payload]
  })
  builder.addCase(updateStroke, (state, action) => {
    state.points = state.points.concat(action.payload)
  })
  builder.addCase(endStroke, (state, action) => {
    state.points = []
  })
})

// export const reducer = (
//   state: currentStrokeState = initialState,
//   action: currentStrokeAction
// ): currentStrokeState => {
//   switch (action.type) {
//     case "BEGIN_STROKE": {
//       return {
//         ...state,
//         points: [action.payload],
//       };
//     }

//     case "UPDATE_STROKE": {
//       return {
//         ...state,
//         points: [...state.points, action.payload],
//       };
//     }

//     case "END_STROKE": {
//       return {
//         ...state,
//         points: [],
//       };
//     }

//     default: {
//       return state;
//     }
//   }
// };
