import React, { FC, FormEvent } from "react";
import { CityDetails } from "../../../store/types";

import TextField from "../../atoms/TextField/TextField";
import Select from "../../atoms/Select/Select";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Badge from "../../atoms/Badge/Badge";

interface FilterContentProps {
    cities: CityDetails[];
    filterCompState: any;
    setFilterCompState: any;
    filterTextChange: (txtVal: string) => void;
    filterCitySelect: (cityId: string) => void;
    filterOnlyFreeOnes: (checkVal: boolean) => void;
    filterDayParts: (checkVal: boolean, time: string) => void;
}

const FilterContent: FC<FilterContentProps> = ({
    cities,
    filterCompState,
    setFilterCompState,
    filterTextChange,
    filterCitySelect,
    filterOnlyFreeOnes,
    filterDayParts,
}) => {
    const partOfDaysArr = ["morning", "afternoon", "evening", "night"];
    const { eventName, cityId, freeEvent, dayPart } = filterCompState;

    const nameInputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setFilterCompState((prevState: object) => ({ ...prevState, [name]: value }));
        // trigger to update store
        filterTextChange(value);
    };

    const citySelectChangeHandler = (e: FormEvent<HTMLSelectElement>) => {
        const { name, value } = e.currentTarget;
        setFilterCompState((prevState: object) => ({ ...prevState, [name]: value }));
        // trigger to update store
        filterCitySelect(value);
    };

    const onlyFreeChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        const { name, checked } = e.currentTarget;
        setFilterCompState((prevState: object) => ({ ...prevState, [name]: checked }));
        // trigger to update store
        filterOnlyFreeOnes(checked);
    };

    const dayPartsChangeHandler = (e: FormEvent<HTMLInputElement>, time: string) => {
        dayPart.includes(time)
            ? setFilterCompState((prevState: object) => ({
                  ...prevState,
                  dayPart: dayPart.filter((x: string) => x !== time),
              }))
            : setFilterCompState((prevState: object) => ({ ...prevState, dayPart: [...dayPart, time] }));
        // trigger to update store
        filterDayParts(e.currentTarget.checked, time);
    };
    return (
        <div className="card-content">
            <form>
                <div className="field">
                    <TextField
                        name="eventName"
                        placeholder="Event Name"
                        value={eventName}
                        onChange={nameInputChangeHandler}
                    />
                </div>
                <div className="field">
                    <Select
                        name="cityId"
                        value={cityId}
                        defaultOption="City name"
                        options={cities}
                        onChange={citySelectChangeHandler}
                    />
                </div>
                <div className="field">
                    <label className="checkbox">
                        <Checkbox name="freeEvent" checked={freeEvent} onChange={onlyFreeChangeHandler} /> Only{" "}
                        <Badge title="Free" />
                    </label>
                </div>
                {partOfDaysArr.map((time) => (
                    <div key={time} className="field">
                        <label className="checkbox">
                            <Checkbox
                                name={time}
                                checked={dayPart.includes(time)}
                                onChange={(e) => dayPartsChangeHandler(e, time)}
                            />
                            <span className="filter-label">{" " + time}</span>
                        </label>
                    </div>
                ))}
            </form>
        </div>
    );
};

export default FilterContent;
