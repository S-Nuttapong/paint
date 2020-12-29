import { RootState, Point } from "../../type";
import { createAction } from "@reduxjs/toolkit";

const BEGIN_DRAWING = "BEGIN_STROKE";
const UPDATE_STROKE = "UPDATE_STROKE";
const END_STROKE = "END_STROKE";

export type currentStrokeAction =
  | { type: typeof BEGIN_DRAWING; payload: Point }
  | { type: typeof UPDATE_STROKE; payload: Point }
  | { type: typeof END_STROKE; payload: RootState["currentStroke"] };

// export const beginStroke = (x: number, y: number) => ({
// type: BEGIN_DRAWING,
// payload: { x, y },
// });

export const beginStroke = createAction<Point>("BEGIN_STROKE");

// export const updateStroke = (x: number, y: number) => ({
  // type: UPDATE_STROKE,
  // payload: { x, y },
// });


//using createAction we will need to pass by named argument
//instead of positional argument
//pros: more declarative  
export const updateStroke = createAction<Point>("UPDATE_STROK")

// export const endStroke = (currentStroke: RootState["currentStroke"]) => ({
  // type: END_STROKE,
  // payload: currentS`troke,
// });`

export const endStroke = createAction<RootState["currentStroke"]>("END_STROKE")
