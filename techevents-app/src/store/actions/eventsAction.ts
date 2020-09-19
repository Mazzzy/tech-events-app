import { ThunkAction } from "redux-thunk";
import {
    GET_EVENTS,
    TechEventAction,
    SET_LOADING,
    SET_ERROR,
    TechEventsData,
    APIError,
    SET_SELECTED_EVENT,
    DELETE_SELECTED_EVENT,
} from "../types";
import { RootState } from "../store";
import API from "../../config/API";

export const getTechEvents = (): ThunkAction<void, RootState, null, TechEventAction> => {
    return async (dispatch) => {
        try {
            const res = await API.getTechEvents();

            if (!res.ok) {
                const resData: APIError = await res.json();
                throw new Error(resData.data);
            }

            const resData: TechEventsData = await res.json();
            dispatch({
                type: GET_EVENTS,
                payload: resData,
            });
        } catch (err) {
            dispatch({
                type: SET_ERROR,
                payload: err.message,
            });
        }
    };
};

export const setLoading = (): TechEventAction => {
    return {
        type: SET_LOADING,
    };
};

export const setError = (): TechEventAction => {
    return {
        type: SET_ERROR,
        payload: "",
    };
};

export const setSelectedEvent = (id: string): TechEventAction => {
    return {
        type: SET_SELECTED_EVENT,
        payload: id,
    };
};

export const deleteSelectedEvent = (id: string): TechEventAction => {
    return {
        type: DELETE_SELECTED_EVENT,
        payload: id,
    };
};
