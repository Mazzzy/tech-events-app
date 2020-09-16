import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { eventsReducer } from "./reducers/eventsReducer";
import { filtersReducer } from "./reducers/filtersReducer";

const rootReducer = combineReducers({
    techEvents: eventsReducer,
    filters: filtersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;
