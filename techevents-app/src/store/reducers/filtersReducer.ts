import {
    FilterState,
    FILTER_TEXT,
    FILTER_CITY,
    FILTER_FREE,
    FILTER_PARTS_OF_DAY,
    FILTER_CLEAR,
    FilterAction,
} from "../types";

const initialFilterState: FilterState = {
    text: "",
    city: 0,
    free: false,
    dayPart: [],
};

export const filtersReducer = (state = initialFilterState, action: FilterAction): FilterState => {
    switch (action.type) {
        case FILTER_TEXT:
            return {
                ...state,
                text: action.text,
            };
        case FILTER_CITY:
            return {
                ...state,
                city: action.city,
            };
        case FILTER_FREE:
            return {
                ...state,
                free: action.free,
            };
        case FILTER_PARTS_OF_DAY:
            return {
                ...state,
                dayPart: action.dayPart,
            };
        case FILTER_CLEAR:
            return {
                ...state,
                text: action.defaultFilter.text,
                free: action.defaultFilter.free,
                dayPart: action.defaultFilter.dayPart,
            };
        default:
            return state;
    }
};
