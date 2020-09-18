import React, { FC, MouseEvent } from "react";

interface NavMenuProps {
    activeTab?: string;
    setActiveTabClick: (e: MouseEvent<HTMLAnchorElement>, name: string) => void;
}

const NavMenu: FC<NavMenuProps> = ({ activeTab, setActiveTabClick }) => {
    return (
        <div className="navbar-menu">
            <div className="navbar-end">
                <a
                    className={`navbar-item ${activeTab === "all" ? "is-active is-tab" : ""}`}
                    onClick={(e: MouseEvent<HTMLAnchorElement>) => setActiveTabClick(e, "all")}
                >
                    All events
                </a>
                <a
                    className={`navbar-item ${activeTab === "my" ? "is-active is-tab" : ""}`}
                    onClick={(e: MouseEvent<HTMLAnchorElement>) => setActiveTabClick(e, "my")}
                >
                    My events
                </a>
                <a className="navbar-item">About</a>
            </div>
        </div>
    );
};

export default NavMenu;
