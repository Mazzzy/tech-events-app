import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import EventList from "../molecules/EventList";

const MainContent: FC = () => {
    const loading = useSelector((state: RootState) => state.techEvents.loading);
    const techEventsData = useSelector((state: RootState) => state.techEvents.data);
    const error = useSelector((state: RootState) => state.techEvents.error);
    const filterData = useSelector((state: RootState) => state.filters);

    return (
        <div className="column is-9">
            {loading ? (
                <h3 className="is-size-4 py-2">Loading events...</h3>
            ) : (
                techEventsData && <EventList data={techEventsData} filters={filterData} />
            )}
            {error && <h3 className="is-size-4 py-2">{error}</h3>}
        </div>
    );
};

export default MainContent;
