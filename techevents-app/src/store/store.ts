import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { eventsReducer, filtersReducer, tabsReducer } from "./reducers";

const rootReducer = combineReducers({
    techEvents: eventsReducer,
    filters: filtersReducer,
    tabs: tabsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;
