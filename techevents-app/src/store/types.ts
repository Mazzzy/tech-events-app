export const GET_EVENTS = "GET_EVENTS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const FILTER_TEXT = "FILTER_TEXT";
export const FILTER_CITY = "FILTER_CITY";
export const FILTER_FREE = "FILTER_FREE";
export const FILTER_PARTS_OF_DAY = "FILTER_PARTS_OF_DAY";
export const FILTER_CLEAR = "FILTER_CLEAR";
export const SET_SELECTED_EVENT = "SET_SELECTED_EVENT";
export const SET_TAB_ACTIVE = "SET_TAB_ACTIVE";

// events specific
export interface TechEvent {
    id: number;
    isFree: boolean;
    name: string;
    city: number;
    startDate: string;
    endDate: string;
}
export interface TechEventsData {
    events: TechEvent[];
    cities: CityDetails[];
}

// city details
export interface CityDetails {
    id: number;
    name: string;
}

// complete event data load specific
export interface TechEventState {
    data: TechEventsData | null;
    loading: boolean;
    error: string;
    selectedEvent: TechEvent | null;
}

// error handling during API call
export interface APIError {
    code: string;
    message: string;
    data: string;
}
interface GetTechEventAction {
    type: typeof GET_EVENTS;
    payload: TechEventsData;
}
interface SetLoadingAction {
    type: typeof SET_LOADING;
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}

interface SetSelectedEventAction {
    type: typeof SET_SELECTED_EVENT;
    payload: string;
}

export type TechEventAction = GetTechEventAction | SetLoadingAction | SetErrorAction | SetSelectedEventAction;

// filter specific
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

// tabs specific
export interface TabsState {
    activeName: string;
}
interface TabActiveAction {
    type: typeof SET_TAB_ACTIVE;
    activeName: string;
}

export type TabsAction = TabActiveAction;
