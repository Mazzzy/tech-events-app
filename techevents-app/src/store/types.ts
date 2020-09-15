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
    data: {
        events: TechEvent[],
        cities: CityDetails[]
    }
}
