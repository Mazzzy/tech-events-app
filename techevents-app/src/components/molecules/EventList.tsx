import React, { FC } from "react";
import { TechEvent, TechEventsData, FilterState, CityDetails } from "../../store/types";
import { getCityLabel, getVisibleEvents } from "../../utils/utils";
import DateGroup from "../atoms/DateGroup";
import EventItem from "./EventItem/EventItem";
interface EventListProps {
    data: TechEventsData;
    filters: FilterState;
}

const EventList: FC<EventListProps> = ({ data, filters }) => {
    const { events, cities } = data;
    const visibleEvents = getVisibleEvents(events, filters);
    const eventsCollection = visibleEvents.map((aTechEvent: TechEvent, index: number) => [
        <DateGroup key={`${aTechEvent.startDate}-date`} event={aTechEvent} prevEvent={visibleEvents[index - 1]} />,
        <EventItem key={aTechEvent?.id} item={aTechEvent} cityName={getCityLabel(cities, aTechEvent.city)} />,
    ]);

    return (
        <section>
            {events.length === 0 ? <p className="py-4 has-text-centered">No Events</p> : eventsCollection}
        </section>
    );
};

export default EventList;
