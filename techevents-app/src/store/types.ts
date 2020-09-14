export const GET_EVENTS = "GET_EVENTS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export interface TechEvent {
    id: number,
    isFree: boolean,
    name: string,
    city: number,
    startDate: string,
    endDate: string
}
