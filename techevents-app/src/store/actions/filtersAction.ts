import { FilterAction, FILTER_TEXT, FILTER_FREE, FILTER_CLEAR, FILTER_PARTS_OF_DAY } from "../types";

export const filterText = (text: string): FilterAction => {
    return {
        type: FILTER_TEXT,
        text,
    };
};

export const filterFree = (free: boolean): FilterAction => {
    return {
        type: FILTER_FREE,
        free,
    };
};

export const filterPartsOfDay = (dayPart: string): FilterAction => {
    return {
        type: FILTER_PARTS_OF_DAY,
        dayPart,
    };
};

const defaultFilter = {
    text: "",
    free: false,
    dayPart: "",
};

export const filterClear = (): FilterAction => {
    return {
        type: FILTER_CLEAR,
        defaultFilter,
    };
};
