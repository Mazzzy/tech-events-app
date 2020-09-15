import React, { FC } from "react";
import Navbar from "../organisms/Navbar";
import Sidebar from "../organisms/Sidebar";
import MainContent from "../organisms/MainContent";

const Workspace: FC = () => {
    return (
        <div>
            <Navbar title="Tech events app" />
            <div className="columns px-5 mt-5">
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
};

export default Workspace;
