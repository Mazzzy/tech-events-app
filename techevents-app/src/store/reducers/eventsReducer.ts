import { TechEventState, GET_EVENTS, SET_LOADING, TechEventAction, SET_ERROR } from "../types";

const initialState: TechEventState = {
    data: null,
    loading: false,
    error: "",
};

export const eventsReducer = (state = initialState, action: TechEventAction): TechEventState => {
    switch (action.type) {
        case GET_EVENTS:
            return {
                data: action.payload,
                loading: false,
                error: "",
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
        default:
            return state;
    }
};
