import { RootState } from "../../type";
import { createAction } from "@reduxjs/toolkit";

const END_STROKE = "END_STROKE";

export type strokeAction = {
  type: typeof END_STROKE;
  payload: RootState["currentStroke"];
};

// export const endStroke = (currentStroke: RootState["currentStroke"]) => ({
// type: END_STROKE,
// payload: currentStroke,
// });

export const endStroke = createAction<RootState["currentStroke"]>("END_STROKE");
