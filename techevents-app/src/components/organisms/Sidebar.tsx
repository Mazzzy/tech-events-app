import React, { FC } from "react";
import Filters from "../molecules/Filters";

const Sidebar: FC = () => {
    return (
        <div className="column is-3 is-size-6">
            <Filters />
        </div>
    );
};

export default Sidebar;
