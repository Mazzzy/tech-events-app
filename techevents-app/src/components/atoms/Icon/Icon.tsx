import React, { FC } from "react";
import "./Icon.css";
interface IconProps {
    placeIconClass?: string;
    className?: string;
}

const Icon: FC<IconProps> = ({ placeIconClass, className }) => {
    return (
        <span className={`icon ${placeIconClass || ""}`}>
            <i className={`fas ${className || ""}`} />
        </span>
    );
};

export default Icon;
