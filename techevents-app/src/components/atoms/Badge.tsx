import React, { FC } from "react";

interface BadgeProps {
    title?: string;
}

const Badge: FC<BadgeProps> = ({ title }) => {
    return <span className="tag is-success">{title || ""}</span>;
};

export default Badge;
