import React, { FC } from "react";
import Logo from "../atoms/Logo";

interface NavBrandProps {
    title?: string;
}

const NavBrand: FC<NavBrandProps> = ({ title }) => {
    return (
        <div className="navbar-brand">
            <a className="navbar-item" href="#">
                <Logo />
            </a>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
            </a>
        </div>
    );
};

export default NavBrand;
