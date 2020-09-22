import React, { FC, MouseEvent } from "react";
import Icon from "../../atoms/Icon/Icon";
import Button from "../../atoms/Button/Button";

interface FilterHeadProps {
    title?: string;
    clickClearHandler?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const FilterHead: FC<FilterHeadProps> = ({ title, clickClearHandler }) => {
    return (
        <div className="card-header">
            <p className="card-header-title">
                <span>
                    <Icon className="fa-filter" />
                    {title}
                </span>
                <Button title="Clear" onClick={clickClearHandler} />
            </p>
        </div>
    );
};

export default FilterHead;
