import React, { FC } from "react";

interface NavMenuProps {
    title?: string;
}

const NavMenu: FC<NavMenuProps> = ({ title }) => {
    return (
        <div className="navbar-menu">
            <div className="navbar-end">
                <a className="navbar-item">All events</a>
                <a className="navbar-item">My events</a>
                <a className="navbar-item">About</a>
            </div>
        </div>
    );
};

export default NavMenu;
