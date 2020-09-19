import React, { FC, useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/store";
import { filterText, filterCity, filterFree, filterPartsOfDay, filterClear } from "../../store/actions/filtersAction";
import Badge from "../atoms/Badge";
import Button from "../atoms/Button";

const Filters: FC = () => {
    const dispatch = useDispatch();
    const techEventsData = useSelector((state: RootState) => state.techEvents?.data);
    const cities = techEventsData?.cities || [];
    const timeFilter = useSelector((state: RootState) => state.filters?.dayPart);

    const partOfDaysArr = ["morning", "afternoon", "evening", "night"];
    const dayArr: string[] = [];
    const filterCompInitialState = {
        eventName: "",
        cityId: 0,
        freeEvent: false,
        dayPart: dayArr,
    };

    const [{ eventName, cityId, freeEvent, dayPart }, setFilterCompState] = useState(filterCompInitialState);

    const nameInputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setFilterCompState((prevState) => ({ ...prevState, [name]: value }));
        dispatch(filterText(value));
    };

    const citySelectChangeHandler = (e: FormEvent<HTMLSelectElement>) => {
        const { name, value } = e.currentTarget;
        setFilterCompState((prevState) => ({ ...prevState, [name]: value }));
        dispatch(filterCity(Number(value)));
    };

    const onlyFreeChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        const { name, checked } = e.currentTarget;
        setFilterCompState((prevState) => ({ ...prevState, [name]: checked }));
        dispatch(filterFree(checked));
    };

    const dayPartsChangeHandler = (e: FormEvent<HTMLInputElement>, time: string) => {
        dayPart.includes(time)
            ? setFilterCompState((prevState) => ({ ...prevState, dayPart: dayPart.filter((x) => x !== time) }))
            : setFilterCompState((prevState) => ({ ...prevState, dayPart: [...dayPart, time] }));

        dispatch(
            filterPartsOfDay(
                e.currentTarget.checked ? [...(timeFilter || []), time] : (timeFilter || []).filter((v) => v !== time)
            )
        );
    };

    const clickClearHandler = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setFilterCompState({ ...filterCompInitialState });
        dispatch(filterClear());
    };

    return (
        <div className="card mb-5">
            <div className="card-header">
                <p className="card-header-title arrange-flex-lr">
                    <span>
                        <span className="icon">
                            <i className="fas fa-filter" />
                        </span>
                        Filter by
                    </span>
                    <Button title="Clear" onClick={clickClearHandler} />
                </p>
            </div>
            <div className="card-content">
                <form>
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
                        <div className="control has-icons-left">
                            <div className="select">
                                <select name="cityId" onChange={citySelectChangeHandler} value={cityId}>
                                    <option value="0">City name</option>
                                    {cities.map((city) => (
                                        <option key={city.id} value={city.id}>
                                            {" "}
                                            {city.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="icon is-small is-left">
                                <i className="fas fa-globe" />
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                name="freeEvent"
                                checked={freeEvent}
                                onChange={onlyFreeChangeHandler}
                            />{" "}
                            Only <Badge title="Free" />
                        </label>
                    </div>
                    {partOfDaysArr.map((time) => (
                        <div key={time} className="field">
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name={time}
                                    checked={dayPart.includes(time)}
                                    onChange={(e) => dayPartsChangeHandler(e, time)}
                                />
                                {time}
                            </label>
                        </div>
                    ))}
                </form>
            </div>
        </div>
    );
};

export default Filters;
