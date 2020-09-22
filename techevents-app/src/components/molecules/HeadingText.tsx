import React, { FC } from "react";
import Heading from "../atoms/Heading/Heading";

interface HeadingTextProps {
    title?: string;
    className?: string;
}

const HeadingText: FC<HeadingTextProps> = ({ title, className }) => {
    return <Heading className={`${className || ""}`} title={title} />;
};

export default HeadingText;
