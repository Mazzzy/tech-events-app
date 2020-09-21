import React, { FC } from "react";

interface HamburgerProps {
    title?: string;
}

const Hamburger: FC<HamburgerProps> = ({ title }) => {
    return (
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" href="/#">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
        </a>
    );
};

export default Hamburger;
