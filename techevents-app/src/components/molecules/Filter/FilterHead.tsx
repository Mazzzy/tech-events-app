import React, { FC, MouseEvent } from "react";
import Button from "../../atoms/Button/Button";

interface FilterHeadProps {
    title?: string;
    clickClearHandler?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const FilterHead: FC<FilterHeadProps> = ({ title, clickClearHandler }) => {
    return (
        <div className="card-header">
            <p className="card-header-title arrange-flex-lr">
                <span>
                    <span className="icon">
                        <i className="fas fa-filter" />
                    </span>
                    {title}
                </span>
                <Button title="Clear" onClick={clickClearHandler} />
            </p>
        </div>
    );
};

export default FilterHead;
