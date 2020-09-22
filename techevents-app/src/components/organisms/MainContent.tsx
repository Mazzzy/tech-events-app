import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import HeadingText from "../molecules/HeadingText";
import EventList from "../molecules/EventsList/EventList";

const MainContent: FC = () => {
    const loading = useSelector((state: RootState) => state.techEvents?.loading);
    const techEventsData = useSelector((state: RootState) => state.techEvents?.data);
    const error = useSelector((state: RootState) => state.techEvents?.error);
    const filterData = useSelector((state: RootState) => state.filters);
    const activeTab = useSelector((state: RootState) => state.tabs?.activeName);
    const selectedEvents = useSelector((state: RootState) => state.techEvents?.selectedEvent);
    return (
        <div className="main-contents">
            {loading ? (
                <HeadingText title="Loading events..." />
            ) : (
                techEventsData && <EventList data={techEventsData} filters={filterData} activeTab={activeTab} />
            )}
            {error && <HeadingText title={error} />}
        </div>
    );
};

export default MainContent;
