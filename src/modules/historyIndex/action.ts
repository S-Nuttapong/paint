import { RootState } from "../../type";

const END_STROKE = "END_STROKE";
const REDO = "REDO";
const UNDO = "UNDO";

export type HistoryIndexAction =
  | { type: typeof END_STROKE; payload: RootState["currentStroke"] }
  | { type: typeof REDO }
  | { type: typeof UNDO };

export const endStroke = (currentStroke: RootState["currentStroke"]) => ({
  type: END_STROKE,
  payload: currentStroke,
});
export const redo = () => ({ type: REDO });
export const undo = () => ({ type: UNDO });
