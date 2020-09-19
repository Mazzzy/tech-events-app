export const GET_EVENTS = "GET_EVENTS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_SELECTED_EVENT = "SET_SELECTED_EVENT";
export const DELETE_SELECTED_EVENT = "DELETE_SELECTED_EVENT";

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
    selectedEvent: TechEvent | object;
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

interface DeleteSelectedEventAction {
    type: typeof DELETE_SELECTED_EVENT;
    payload: string;
}
export type TechEventAction =
    | GetTechEventAction
    | SetLoadingAction
    | SetErrorAction
    | SetSelectedEventAction
    | DeleteSelectedEventAction;
