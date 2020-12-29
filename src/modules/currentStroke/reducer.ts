import { RootState } from "../../type";

import { currentStrokeAction } from "./action";

type currentStrokeState = RootState["currentStroke"];

const initialState: currentStrokeState = {
  points: [],
  color: "black",
};

export const reducer = (
  state: currentStrokeState = initialState,
  action: currentStrokeAction
): currentStrokeState => {
  switch (action.type) {
    case "BEGIN_STROKE": {
      return {
        ...state,
        points: [action.payload],
      };
    }

    case "UPDATE_STROKE": {
      return {
        ...state,
        points: [...state.points, action.payload],
      };
    }

    case "END_STROKE": {
      return {
        ...state,
        points: [],
      };
    }

    default: {
      return state;
    }
  }
};
