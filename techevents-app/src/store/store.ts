import { createStore, combineReducers } from "redux";
import { eventsReducer } from "./reducers/eventsReducer";

const reducers = combineReducers({
    events: eventsReducer
});

export const store = createStore(reducers);