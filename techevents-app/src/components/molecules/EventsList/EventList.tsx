import React, { FC, useState, FormEvent } from "react";
import { useDispatch } from "react-redux";

import { TechEvent, TechEventsData, FilterState } from "../../../store/types";
import { setSelectedEvent, deleteSelectedEvent } from "../../../store/actions";
import { getCityLabel, getVisibleEvents } from "../../../utils/utils";

import DateGroup from "../../atoms/DateGroup/DateGroup";
import EventItem from "./EventItem";
import Modal from "../Modal/Modal";
import HeadingText from "../HeadingText";
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
        if (activeTab !== "my") {
            setShowConfirmModal(true);
            setEventIdToSignUp(id);
        } else {
            dispatch(deleteSelectedEvent(id));
        }
    };

    const { events, cities } = data;
    const visibleEvents = getVisibleEvents(events, filters, activeTab);
    const eventsCollection = visibleEvents.map((aTechEvent: TechEvent, index: number) => [
        <DateGroup key={`${aTechEvent.startDate}-date`} event={aTechEvent} prevEvent={visibleEvents[index - 1]} />,
        <EventItem
            key={aTechEvent?.id}
            item={aTechEvent}
            cityName={getCityLabel(cities, aTechEvent.city)}
            activeTab={activeTab}
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
            {eventsCollection.length === 0 ? <HeadingText title="No events available" /> : eventsCollection}
            {showConfirmModal && (
                <Modal title="Confirm to SignUp" okClick={confirmSignUp} cancelClick={closeModal}>
                    Are you want to sign up for this event?
                </Modal>
            )}
        </section>
    );
};

export default EventList;
