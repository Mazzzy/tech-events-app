import React, { FC } from "react";
import { TechEvent, TechEventsData, FilterState } from "../../store/types";
import { getVisibleEvents } from "../../utils/utils";

import EventItem from "./EventItem/EventItem";
interface EventListProps {
    data: TechEventsData;
    filters: FilterState;
}

const EventList: FC<EventListProps> = ({ data, filters }) => {
    const { events, cities } = data;
    const { text, free } = filters;
    const visibleEvents = getVisibleEvents(events, text, free);
    const eventsCollection = visibleEvents.map((aTechEvent: TechEvent) => (
        <EventItem key={aTechEvent?.id} item={aTechEvent} />
    ));

    return (
        <section>
            {events.length === 0 ? <p className="py-4 has-text-centered">No Events</p> : eventsCollection}
        </section>
    );
};

export default EventList;
