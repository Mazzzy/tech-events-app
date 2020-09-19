import React, { FC, MouseEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setTabActive } from "../../store/actions/tabsAction";

import NavBrand from "../molecules/NavBrand";
import NavMenu from "../molecules/NavMenu";

interface NavbarProps {
    title: string;
    subtitle?: string;
}

const Navbar: FC<NavbarProps> = ({ title, subtitle }) => {
    const dispatch = useDispatch();
    const activeTab = useSelector((state: RootState) => state.tabs?.activeName);

    const setActiveTabClick = (e: MouseEvent<HTMLAnchorElement>, name: string) => {
        dispatch(setTabActive(name));
    };

    return (
        <header>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <NavBrand />
                <NavMenu activeTab={activeTab} setActiveTabClick={setActiveTabClick} />
            </nav>
        </header>
    );
};

export default Navbar;
