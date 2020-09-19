import React, { FC } from "react";
import NavItem from "../atoms/NavItem/NavItem";
import Logo from "../atoms/Logo/Logo";
import Hamburger from "../atoms/Hamburger/Hamburger";
interface NavBrandProps {
    brandLogo?: string;
}

const NavBrand: FC<NavBrandProps> = ({ brandLogo }) => {
    return (
        <div className="navbar-brand">
            <NavItem href="#">
                <Logo url={brandLogo} />
            </NavItem>
            <Hamburger />
        </div>
    );
};

export default NavBrand;
