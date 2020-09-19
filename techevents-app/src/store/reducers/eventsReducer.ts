import {
    TechEventState,
    GET_EVENTS,
    SET_LOADING,
    TechEventAction,
    SET_ERROR,
    SET_SELECTED_EVENT,
    DELETE_SELECTED_EVENT,
} from "../types";
import { getEventsFromLS, saveEventsToLS } from "../../utils/utils";

const initialEventsState: TechEventState = {
    data: null,
    loading: false,
    error: "",
    selectedEvent: {},
};

export const eventsReducer = (state = initialEventsState, action: TechEventAction): TechEventState => {
    const eventsFromLS = getEventsFromLS();
    switch (action.type) {
        case GET_EVENTS:
            return {
                data: action.payload,
                loading: false,
                error: "",
                selectedEvent: eventsFromLS,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case SET_SELECTED_EVENT:
            const clonedSelectedEventsFromLS = { ...eventsFromLS };
            clonedSelectedEventsFromLS[action.payload] = action.payload;
            saveEventsToLS(clonedSelectedEventsFromLS);
            return {
                ...state,
                selectedEvent: clonedSelectedEventsFromLS,
            };
        case DELETE_SELECTED_EVENT:
            const clonedSelectedEventsFromLSForDelete = { ...eventsFromLS };
            delete clonedSelectedEventsFromLSForDelete[action.payload];
            saveEventsToLS(clonedSelectedEventsFromLSForDelete);
            return {
                ...state,
                selectedEvent: clonedSelectedEventsFromLSForDelete,
            };
        default:
            return state;
    }
};
