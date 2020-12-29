import { RootState } from "../../type";
import { createAction } from "@reduxjs/toolkit";

const END_STROKE = "END_STROKE";
const REDO = "REDO";
const UNDO = "UNDO";

export type HistoryIndexAction =
  | { type: typeof END_STROKE; payload: RootState["currentStroke"] }
  | { type: typeof REDO }
  | { type: typeof UNDO };

// export const endStroke = (currentStroke: RootState["currentStroke"]) => ({
// type: END_STROKE,
// payload: currentStroke,
// });

//createAction return whatever passed in as payload
//we only need to specify type of action
export const endStroke = createAction<{
  currentStroke: RootState["currentStroke"];
}>("END_STROKE");

//export const redo = () => ({ type: REDO });
export const redo = createAction("REDO");

//export const undo = () => ({ type: UNDO });
export const undo = createAction("UNDO");
