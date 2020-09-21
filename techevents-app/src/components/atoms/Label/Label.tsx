import React, { FC } from "react";

interface LabelProps {
    className?: string;
    children?: any;
}

const Label: FC<LabelProps> = ({ className, children }) => {
    return <span className={className}>{children}</span>;
};

export default Label;
