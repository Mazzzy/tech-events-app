import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import EventList from "../molecules/EventList";

const MainContent: FC = () => {
    const loading = useSelector((state: RootState) => state.techEvents.loading);
    const techEventsData = useSelector((state: RootState) => state.techEvents.data);
    const error = useSelector((state: RootState) => state.techEvents.error);

    return (
        <div className="column is-9">
            {loading ? (
                <h2 className="is-size-3 py-2">Loading events...</h2>
            ) : (
                techEventsData && <EventList data={techEventsData} />
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default MainContent;
