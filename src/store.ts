import { rootReducer } from "./rootReducer";
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import { reducer as historyIndex } from "./modules/historyIndex/reducer";
import { reducer as currentStroke } from "./modules/currentStroke/reducer";
import { reducer as stroke } from "./modules/stroke/reducer";
//log state and action from redux
import { logger } from "redux-logger";

const middleware = [...getDefaultMiddleware(), logger];

//second agr: middlewares
//middlewares: function to performs sideeffect
export const store = configureStore({
  reducer: combineReducers({
    historyIndex,
    currentStroke,
    stroke,
  }),
  middleware,
});
