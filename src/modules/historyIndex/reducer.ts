import { RootState } from "../../type";
import { HistoryIndexAction } from "./action";

export const reducer = (
  state: RootState["historyIndex"] = 0,
  action: HistoryIndexAction
): RootState["historyIndex"] => {
  switch (action.type) {
    case "END_STROKE": {
      return 0;
    }

    case "REDO": {
      return state;
    }

    case "UNDO": {
      return state;
    }

    default: {
      return state;
    }
  }
};
