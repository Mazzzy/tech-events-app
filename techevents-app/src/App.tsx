import React, { FC } from "react";
import { useDispatch } from "react-redux";

import { getTechEvents, setLoading } from "./store/actions";
import Dashboard from "./components/templates/Dashboard";

import "./App.css";

const App: FC = () => {
    const dispatch = useDispatch();
    dispatch(setLoading());
    dispatch(getTechEvents());

    return (
        <div className="container">
            <Dashboard />
        </div>
    );
};

export default App;
