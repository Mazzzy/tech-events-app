import React, { FC } from "react";
import Heading from "../atoms/Heading/Heading";

interface HeadingTextProps {
    title?: string;
}

const HeadingText: FC<HeadingTextProps> = ({ title }) => {
    return <Heading className="is-size-4 py-2" title={title} />;
};

export default HeadingText;
