import React, { FC } from "react";
import NavBrand from "../molecules/NavBrand";
import NavMenu from "../molecules/NavMenu";

interface NavbarProps {
    title: string;
    subtitle?: string;
}

const Navbar: FC<NavbarProps> = ({ title, subtitle }) => {
    return (
        <header>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <NavBrand />
                <NavMenu />
            </nav>
        </header>
    );
};

export default Navbar;
