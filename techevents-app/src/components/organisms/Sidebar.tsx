import React, { FC } from "react";
import Filters from "../molecules/Filters";

const Sidebar: FC = () => {
  return(
    <div className="column is-3">
    <Filters />
      <p>
          Sidebar
      </p>
    </div>
  );
} 

export default Sidebar;