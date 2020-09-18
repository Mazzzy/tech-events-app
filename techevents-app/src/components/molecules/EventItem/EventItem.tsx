import React, { FC, FormEvent } from "react";
import { useDispatch } from "react-redux";

import { TechEvent } from "../../../store/types";
import { hoursFormat } from "../../../utils/utils";
import { setSelectedEvent } from "../../../store/actions/eventsAction";

import Badge from "../../atoms/Badge";
import Button from "../../atoms/Button";

import "./EventItem.css";

interface EventItemProps {
    item: TechEvent;
    cityName: string;
}

const EventItem: FC<EventItemProps> = ({ item, cityName }) => {
    const dispatch = useDispatch();
    const signUpClickHandler = (e: FormEvent<HTMLAnchorElement>) => {
        dispatch(setSelectedEvent(e.currentTarget?.id));
    };
    const { startDate, endDate, id } = item;
    return (
        <div className="box">
            <div className="box-item">
                <p>
                    {item.isFree ? <Badge title="Free" /> : ""}
                    <span className="px-4 is-size-6 has-text-weight-bold">{item?.name} </span>
                </p>
                <Button title="Sign up" onClick={signUpClickHandler} dataVal={String(id)} />
            </div>
            <div className="box-item mt-4">
                <p>
                    <span className="icon">
                        <i className="fas fa-map-marker" />
                    </span>
                    <span>{cityName}</span>
                </p>
                <p>
                    <span className="icon">
                        <i className="fas fa-thermometer-half" />
                    </span>
                    Temp
                </p>
                <p>
                    <span className="icon">
                        <i className="fa fa-clock" aria-hidden="true" />
                    </span>
                    <span>from: {startDate ? hoursFormat(new Date(startDate)) : ""} </span>
                    <span>to: {endDate ? hoursFormat(new Date(endDate)) : ""}</span>
                </p>
            </div>
        </div>
    );
};

export default EventItem;
