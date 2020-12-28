import { RootState } from "./type";
import { Action } from "./actions";

const initState: RootState = {
  currentStroke: { points: [], color: "#000" },
  strokes: [],
  historyIndex: 0,
};

//BEGIN_STROKE: overwrite points
//UPDATE_STROKE: append new points
export const rootReducer = (state: RootState = initState, action: Action) => {
  switch (action.type) {
    case "BEGIN_STROKE": {
      return {
        ...state,
        currentStroke: {
          ...state.currentStroke,
          points: [action.payload],
        },
      };
    }

    case "UPDATE_STROKE": {
      return {
        ...state,
        currentStroke: {
          ...state.currentStroke,
          points: [...state.currentStroke.points, action.payload],
        },
      };
    }

    case "END_STROKE": {
      if (!state.currentStroke.points.length) {
        return state;
      }
      return {
        ...state,
        //reset the points to empty array
        currentStroke: { ...state.currentStroke, points: [] },
        //add currentStroke into our all previous strokes
        strokes: [...state.strokes, state.currentStroke],
      };
    }

    default:
      return state;
  }
};
