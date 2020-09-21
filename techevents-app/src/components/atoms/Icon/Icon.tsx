import React, { FC } from "react";

interface IconProps {
    className?: string;
}

const Icon: FC<IconProps> = ({ className }) => {
    return (
        <span className="icon">
            <i className={`fas ${className}`} />
        </span>
    );
};

export default Icon;
