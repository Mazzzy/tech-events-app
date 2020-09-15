import React, { FC } from "react";

interface ButtonProps {
    title?: string;
}

const Button: FC<ButtonProps> = ({ title }) => {
    return <a className="button is-small is-primary is-outlined">{title || ""}</a>;
};

export default Button;
