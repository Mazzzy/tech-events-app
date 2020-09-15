import React, { FC, useState, FormEvent } from "react";

const Filters: FC = () => {
    const [eventName, setEventName] = useState("");
    const [cityName, setCityName] = useState("");
    const [onlyState, setOnlyState] = useState(false);

    const inputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        setEventName(e.currentTarget.value);
    };

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEventName("");
        setCityName("");
    };

    const stateChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        setOnlyState(e.currentTarget.checked);
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
                                onChange={inputChangeHandler}
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
                                onChange={inputChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="checkbox">
                            <input type="checkbox" checked={onlyState} onChange={stateChangeHandler} /> Only
                        </label>
                    </div>
                    <div className="field">
                        <label className="checkbox">
                            <input type="checkbox" checked={onlyState} onChange={stateChangeHandler} /> Morning
                        </label>
                    </div>
                    <div className="field">
                        <label className="checkbox">
                            <input type="checkbox" checked={onlyState} onChange={stateChangeHandler} /> Afternoon
                        </label>
                    </div>
                    <div className="field">
                        <label className="checkbox">
                            <input type="checkbox" checked={onlyState} onChange={stateChangeHandler} /> Evening
                        </label>
                    </div>
                    <div className="field">
                        <label className="checkbox">
                            <input type="checkbox" checked={onlyState} onChange={stateChangeHandler} /> Night
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Filters;
