import { RootState } from "../../type";
import { strokeAction } from "./action";

export const reducer = (
  state: RootState["strokes"] = [],
  action: strokeAction
): RootState["strokes"] => {
  if (action.type === "END_STROKE") {
    if (action.payload.points.length) {
      return state;
    }
    return state.concat(action.payload)
  }

  return state;
};
