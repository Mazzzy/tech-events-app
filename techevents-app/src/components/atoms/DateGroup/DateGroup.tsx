import React, { FC } from "react";
import moment from "moment";

interface DateGroupProps {
    event?: any;
    prevEvent?: any | undefined;
}

const DateGroup: FC<DateGroupProps> = ({ event, prevEvent }): any => {
    const isSame = moment(event?.startDate).isSame(prevEvent?.startDate, "day");
    return !isSame && <p className="is-size-6 mb-2">{moment(event?.startDate).format("dddd, Do MMM")}</p>;
};

export default DateGroup;
