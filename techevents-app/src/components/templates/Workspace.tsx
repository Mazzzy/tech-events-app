import React, { FC } from "react";
import Navbar from "../organisms/Navbar";
import Sidebar from "../organisms/Sidebar";
import MainContent from "../organisms/MainContent";

interface WorkspaceProps {
    title?: string;
    subtitle?: string;
}

const Workspace: FC<WorkspaceProps> = ({ title, subtitle }) => {
    return (
        <div>
            <Navbar title="Hello" />
            <div className="columns px-5 mt-5">
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
};

export default Workspace;
