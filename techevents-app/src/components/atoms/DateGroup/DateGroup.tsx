import React, { FC } from "react";
import moment from "moment";
import "./DateGroup.css";
interface DateGroupProps {
    event?: any;
    prevEvent?: any | undefined;
}

const DateGroup: FC<DateGroupProps> = ({ event, prevEvent }): any => {
    const isSame = moment(event?.startDate).isSame(prevEvent?.startDate, "day");
    return !isSame && <p className="date-group">{moment(event?.startDate).format("dddd, Do MMM")}</p>;
};

export default DateGroup;
