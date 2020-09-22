import React, { FC } from "react";
import Filters from "../molecules/Filter/Filters";

const Sidebar: FC = () => {
    return (
        <div className="side-bar">
            <Filters />
        </div>
    );
};

export default Sidebar;
