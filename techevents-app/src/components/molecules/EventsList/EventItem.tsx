import React, { FC, FormEvent } from "react";
import { TechEvent } from "../../../store/types";
import { hoursFormat } from "../../../utils/utils";

import Badge from "../../atoms/Badge/Badge";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";
import Label from "../../atoms/Label/Label";

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
                    <Label className="box-item-head">{item?.name}</Label>
                </p>
                <Button
                    title={btnTitle}
                    onClick={(e: FormEvent<HTMLAnchorElement>) => handleSignUpClickHandler(e, id)}
                />
            </div>
            <div className="box-item">
                <p>
                    <Icon className="fa-map-marker" />
                    <Label>{cityName}</Label>
                </p>
                <p>
                    <Icon className="fa-thermometer-half" />
                    <Label>Temp</Label>
                </p>
                <p>
                    <Icon className="fa-clock" />
                    <Label>from: {startDate ? hoursFormat(new Date(startDate)) : ""} </Label>
                    <Label>to: {endDate ? hoursFormat(new Date(endDate)) : ""}</Label>
                </p>
            </div>
        </div>
    );
};

export default EventItem;
