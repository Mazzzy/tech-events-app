import React, { FC } from "react";
import { TechEvent } from "../../../store/types"; 
import { hoursFormat } from "../../../utils/utils";
import Badge from "../../atoms/Badge";
import Button from "../../atoms/Button";

import "./EventItem.css";

interface EventItemProps {
    item: TechEvent
}

const EventItem: FC<EventItemProps> = ({ item }) => {
    const { startDate, endDate } = item;
    return (
        <div className="box">
            <div className="box-item">
                <p>
                    { item.isFree ? <Badge title="Free"/> : "" }
                    <span className="px-4">{ item?.name } </span>
                </p>
                <Button title="Sign up" />
            </div>
            <div className="box-item mt-4">
                <p>
                    <span>{ item?.city }</span>
                </p>
                <p>
                    Temp
                </p>
                <p>
                  <span>from: { startDate ? hoursFormat(new Date(startDate)) : '' } </span>
                  <span>to: { endDate ? hoursFormat(new Date(endDate)) : '' }</span>
                </p>
            </div>
        </div>
    );
};

export default EventItem;

/**
 * 
 * <tr key={task.id} className={task.completed ? 'completed' : ''}>
              <td>{task.name}</td>
              <td className="has-text-centered">
                <button className="button is-primary is-small" onClick={() => setTaskToEditHandler(task)}>
                  <span className="icon">
                    <i className="fas fa-edit"></i>
                  </span>
                </button>
              </td>
              <td className="has-text-centered">
                <button className="button is-danger is-small" onClick={() => setTaskToDeleteHandler(task)}>
                  <span className="icon">
                    <i className="fas fa-times"></i>
                  </span>
                </button>
              </td>
            </tr>
 */
