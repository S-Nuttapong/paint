import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

//
import { createStore, applyMiddleware } from "redux";

//log state and action from redux
import { logger } from "redux-logger";

//second agr: middlewares
//middlewares: function to performs sideeffect
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

