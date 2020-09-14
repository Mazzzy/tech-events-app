import React, { FC } from "react";
import { TechEvent } from "../../store/types";
import EventItem from "./EventItem/EventItem";

interface EventListProps {
  techEvents: TechEvent[];
}

const EventList: FC<EventListProps> = ({ techEvents }) => {
    const eventsCollection = (
        techEvents.map((aTechEvent: TechEvent) => (
            <EventItem key={aTechEvent?.id} item={aTechEvent} />
        
        ))
    );

  return(
    <section>
      {techEvents.length === 0 ? <p className="py-4 has-text-centered">No Events</p> : eventsCollection}
    </section>
  );
}

export default EventList;