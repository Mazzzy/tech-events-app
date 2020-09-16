import React, { FC, useState, FormEvent } from "react";
import { useDispatch } from "react-redux";

import { filterText, filterFree } from "../../store/actions/filtersAction";
import Badge from "../atoms/Badge";

const Filters: FC = () => {
    const dispatch = useDispatch();

    const [eventName, setEventName] = useState("");
    const [cityName, setCityName] = useState("");
    const [onlyFreeEvent, setOnlyFreeEvent] = useState(false);

    const nameInputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        const nameText = e.currentTarget.value;
        setEventName(nameText);
        dispatch(filterText(nameText));
    };

    const cityInputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        setCityName(e.currentTarget.value);
    };

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEventName("");
        setCityName("");
    };

    const onlyFreeChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        const checkStatus = e.currentTarget.checked;
        setOnlyFreeEvent(checkStatus);
        dispatch(filterFree(checkStatus));
    };

    return (
        <div className="card mb-5">
            <div className="card-header">
                <p className="card-header-title">
                    <span className="icon">
                        <i className="fas fa-filter" />
                    </span>
                    Filter by
                </p>
            </div>
            <div className="card-content">
                <form onSubmit={submitHandler}>
                    <div className="field">
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                placeholder="Event Name"
                                name="eventName"
                                value={eventName}
                                onChange={nameInputChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                placeholder="Event City"
                                name="cityName"
                                value={cityName}
                                onChange={cityInputChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="checkbox">
                            <input type="checkbox" checked={onlyFreeEvent} onChange={onlyFreeChangeHandler} /> Only{" "}
                            <Badge title="Free" />
                        </label>
                    </div>
                    <div className="field">
                        <label className="checkbox">
                            <input type="checkbox" /> Morning
                        </label>
                    </div>
                    <div className="field">
                        <label className="checkbox">
                            <input type="checkbox" /> Afternoon
                        </label>
                    </div>
                    <div className="field">
                        <label className="checkbox">
                            <input type="checkbox" /> Evening
                        </label>
                    </div>
                    <div className="field">
                        <label className="checkbox">
                            <input type="checkbox" /> Night
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Filters;
