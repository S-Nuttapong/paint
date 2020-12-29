import { RootState, Point } from "../../type";

const BEGIN_DRAWING = "BEGIN_STROKE";
const UPDATE_STROKE = "UPDATE_STROKE";
const END_STROKE = "END_STROKE";

export type currentStrokeAction =
  | { type: typeof BEGIN_DRAWING; payload: Point }
  | { type: typeof UPDATE_STROKE; payload: Point }
  | { type: typeof END_STROKE; payload: RootState["currentStroke"] };

export const beginStroke = (x: number, y: number) => ({
  type: BEGIN_DRAWING,
  payload: { x, y },
});

export const updateStroke = (x: number, y: number) => ({
  type: UPDATE_STROKE,
  payload: { x, y },
});

export const endStroke = (currentStroke: RootState["currentStroke"]) => ({
  type: END_STROKE,
  payload: currentStroke,
});
