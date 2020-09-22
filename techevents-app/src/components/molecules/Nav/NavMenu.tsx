import React, { FC, MouseEvent } from "react";
import NavItem from "../../atoms/NavItem/NavItem";
interface NavMenuProps {
    activeTab?: string;
    setActiveTabClick: (e: MouseEvent<HTMLAnchorElement>, name: string) => void;
}

const NavMenu: FC<NavMenuProps> = ({ activeTab, setActiveTabClick }) => {
    return (
        <div className="navbar-menu">
            <div className="navbar-end">
                <NavItem
                    className={`${activeTab === "all" ? "is-active" : ""}`}
                    clickHandler={(e: MouseEvent<HTMLAnchorElement>) => setActiveTabClick(e, "all")}
                >
                    All events
                </NavItem>
                <NavItem
                    className={`${activeTab === "my" ? "is-active" : ""}`}
                    clickHandler={(e: MouseEvent<HTMLAnchorElement>) => setActiveTabClick(e, "my")}
                >
                    My events
                </NavItem>
                <NavItem>About</NavItem>
            </div>
        </div>
    );
};

export default NavMenu;
