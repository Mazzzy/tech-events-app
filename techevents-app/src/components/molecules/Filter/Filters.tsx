import React, { FC, useState, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../store/store";
import { filterText, filterCity, filterFree, filterPartsOfDay, filterClear } from "../../../store/actions";

import FilterHead from "./FilterHead";
import FilterContent from "./FilterContent";
import "./Filters.css";

const Filters: FC = () => {
    const dispatch = useDispatch();

    const techEventsData = useSelector((state: RootState) => state.techEvents?.data);
    const cities = techEventsData?.cities || [];
    const timeFilter = useSelector((state: RootState) => state.filters?.dayPart);

    const dayArr: string[] = [];
    const filterCompInitialState = {
        eventName: "",
        cityId: 0,
        freeEvent: false,
        dayPart: dayArr,
    };

    const [filterCompState, setFilterCompState] = useState(filterCompInitialState);

    const filterTextChange = (txtVal: string) => {
        dispatch(filterText(txtVal));
    };

    const filterCitySelect = (cityId: string) => {
        dispatch(filterCity(Number(cityId)));
    };

    const filterOnlyFreeOnes = (checkVal: boolean) => {
        dispatch(filterFree(checkVal));
    };

    const filterDayParts = (checkVal: boolean, time: string) => {
        dispatch(
            filterPartsOfDay(
                checkVal ? [...(timeFilter || []), time] : (timeFilter || []).filter((v: string) => v !== time)
            )
        );
    };

    const clickClearHandler = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setFilterCompState({ ...filterCompInitialState });
        // trigger to update store
        dispatch(filterClear());
    };

    return (
        <div className="card">
            <FilterHead title="Filter by" clickClearHandler={clickClearHandler} />
            <FilterContent
                cities={cities}
                filterCompState={filterCompState}
                setFilterCompState={setFilterCompState}
                filterTextChange={filterTextChange}
                filterCitySelect={filterCitySelect}
                filterOnlyFreeOnes={filterOnlyFreeOnes}
                filterDayParts={filterDayParts}
            />
        </div>
    );
};

export default Filters;
