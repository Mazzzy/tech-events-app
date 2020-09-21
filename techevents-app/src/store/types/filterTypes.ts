export const FILTER_TEXT = "FILTER_TEXT";
export const FILTER_CITY = "FILTER_CITY";
export const FILTER_FREE = "FILTER_FREE";
export const FILTER_PARTS_OF_DAY = "FILTER_PARTS_OF_DAY";
export const FILTER_CLEAR = "FILTER_CLEAR";

export interface FilterState {
    text: string;
    city: number;
    free: boolean;
    dayPart: string[];
}
interface FilterTextAction {
    type: typeof FILTER_TEXT;
    text: string;
}
interface FilterCityAction {
    type: typeof FILTER_CITY;
    city: number;
}
interface FilterFreeAction {
    type: typeof FILTER_FREE;
    free: boolean;
}
interface FilterPartsOfDayAction {
    type: typeof FILTER_PARTS_OF_DAY;
    dayPart: string[];
}
interface FilterClearAction {
    type: typeof FILTER_CLEAR;
    defaultFilter: FilterState;
}

export type FilterAction =
    | FilterTextAction
    | FilterCityAction
    | FilterFreeAction
    | FilterPartsOfDayAction
    | FilterClearAction;
