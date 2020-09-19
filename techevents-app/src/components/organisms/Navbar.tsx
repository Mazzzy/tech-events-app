import React, { FC, MouseEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setTabActive } from "../../store/actions";

import brandLogo from "../../trivago-logo.png";
import NavBrand from "../molecules/NavBrand";
import NavMenu from "../molecules/NavMenu";

const Navbar: FC = () => {
    const dispatch = useDispatch();
    const activeTab = useSelector((state: RootState) => state.tabs?.activeName);

    const setActiveTabClick = (e: MouseEvent<HTMLAnchorElement>, name: string) => {
        dispatch(setTabActive(name));
    };

    return (
        <header>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <NavBrand brandLogo={brandLogo} />
                <NavMenu activeTab={activeTab} setActiveTabClick={setActiveTabClick} />
            </nav>
        </header>
    );
};

export default Navbar;
