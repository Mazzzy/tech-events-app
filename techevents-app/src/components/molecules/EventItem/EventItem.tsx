import React, { FC, FormEvent } from "react";
import { TechEvent } from "../../../store/types";
import { hoursFormat } from "../../../utils/utils";

import Badge from "../../atoms/Badge/Badge";
import Button from "../../atoms/Button/Button";

import "./EventItem.css";

interface EventItemProps {
    item: TechEvent;
    cityName: string;
    activeTab: string;
    handleSignUpClickHandler: (e: FormEvent<HTMLAnchorElement>, id: number) => void;
}

const EventItem: FC<EventItemProps> = ({ item, cityName, activeTab, handleSignUpClickHandler }) => {
    const { startDate, endDate, id } = item;
    const btnTitle = activeTab === "my" ? "Cancel" : "Sign up";
    return (
        <div className="box">
            <div className="box-item">
                <p>
                    {item.isFree ? <Badge title="Free" /> : ""}
                    <span className="px-4 is-size-6 has-text-weight-bold">{item?.name} </span>
                </p>
                <Button
                    title={btnTitle}
                    onClick={(e: FormEvent<HTMLAnchorElement>) => handleSignUpClickHandler(e, id)}
                />
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
