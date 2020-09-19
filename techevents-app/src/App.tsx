import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getTechEvents, setLoading } from "./store/actions";
import Workspace from "./components/templates/Workspace";

import "./App.css";

const App: FC = () => {
    const dispatch = useDispatch();
    dispatch(setLoading());
    dispatch(getTechEvents());

    return (
        <div className="container is-size-7">
            <Workspace />
        </div>
    );
};

export default App;
