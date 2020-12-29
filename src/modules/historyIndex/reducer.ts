import { RootState } from "../../type";
import { HistoryIndexAction, endStroke, redo, undo } from "./action";
import { createReducer } from "@reduxjs/toolkit";

const initialState: RootState["historyIndex"] = 0;

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(endStroke, (state, action) => {
    //we can't do state = 0, because of immer
    //updating individual field, we can push, splice: operation to mutate state 
    // we can't re-define: state = 0
    return 0
  });
  builder.addCase(redo, (state, action) => {
    return state;
  });
  builder.addCase(undo, (state, action) => {
    return state;
  });
});

// export const reducer = (
//   state: RootState["historyIndex"] = 0,
//   action: HistoryIndexAction
// ): RootState["historyIndex"] => {
//   switch (action.type) {
//     case "END_STROKE": {
//       return 0;
//     }

//     case "REDO": {
//       return state;
//     }

//     case "UNDO": {
//       return state;
//     }

//     default: {
//       return state;
//     }
//   }
// };
