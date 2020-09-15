import React, { FC } from "react";
import { TechEvent, TechEventsData } from "../../store/types";
import EventItem from "./EventItem/EventItem";
interface EventListProps {
    data: TechEventsData;
}

const EventList: FC<EventListProps> = ({ data }) => {
    const { events, cities } = data;
    const eventsCollection = events.map((aTechEvent: TechEvent) => (
        <EventItem key={aTechEvent?.id} item={aTechEvent} />
    ));

    return (
        <section>
            {events.length === 0 ? <p className="py-4 has-text-centered">No Events</p> : eventsCollection}
        </section>
    );
};

export default EventList;
