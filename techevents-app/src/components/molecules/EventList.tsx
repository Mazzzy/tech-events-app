import React, { FC, useState, FormEvent } from "react";
import { useDispatch } from "react-redux";

import { TechEvent, TechEventsData, FilterState } from "../../store/types";
import { setSelectedEvent } from "../../store/actions/eventsAction";
import { getCityLabel, getVisibleEvents } from "../../utils/utils";

import DateGroup from "../atoms/DateGroup";
import EventItem from "./EventItem/EventItem";
import Modal from "./Modal";

interface EventListProps {
    data: TechEventsData;
    filters: FilterState;
    activeTab: string;
}

const EventList: FC<EventListProps> = ({ data, filters, activeTab }) => {
    const dispatch = useDispatch();
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [eventIdToSignUp, setEventIdToSignUp] = useState("");

    const signUpClickHandler = (e: FormEvent<HTMLAnchorElement>, id: any) => {
        setShowConfirmModal(true);
        setEventIdToSignUp(id);
    };

    const { events, cities } = data;
    const visibleEvents = getVisibleEvents(events, filters, activeTab);
    const eventsCollection = visibleEvents.map((aTechEvent: TechEvent, index: number) => [
        <DateGroup key={`${aTechEvent.startDate}-date`} event={aTechEvent} prevEvent={visibleEvents[index - 1]} />,
        <EventItem
            key={aTechEvent?.id}
            item={aTechEvent}
            cityName={getCityLabel(cities, aTechEvent.city)}
            handleSignUpClickHandler={signUpClickHandler}
        />,
    ]);

    // modal related

    const confirmSignUp = (e: FormEvent<HTMLAnchorElement>): void => {
        dispatch(setSelectedEvent(eventIdToSignUp));
        setShowConfirmModal(false);
    };
    const closeModal = (e: FormEvent<HTMLButtonElement>): void => {
        setShowConfirmModal(false);
    };
    return (
        <section>
            {eventsCollection.length === 0 ? <h3 className="is-size-4 py-2">No events available</h3> : eventsCollection}
            {showConfirmModal && (
                <Modal title="Confirm to add event?" okClick={confirmSignUp} cancelClick={closeModal}>
                    Are you want to sign up for this event?
                </Modal>
            )}
        </section>
    );
};

export default EventList;
