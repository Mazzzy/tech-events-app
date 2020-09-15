export const GET_EVENTS = "GET_EVENTS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export interface TechEvent {
    id: number;
    isFree: boolean;
    name: string;
    city: number;
    startDate: string;
    endDate: string;
}
export interface CityDetails {
    id: number;
    name: string;
}
export interface TechEventsData {
    events: TechEvent[];
    cities: CityDetails[];
}

export interface APIError {
    code: string;
    message: string;
}

export interface TechEventState {
    data: TechEventsData | null;
    loading: boolean;
    error: string;
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

export type TechEventAction = GetTechEventAction | SetLoadingAction | SetErrorAction;
