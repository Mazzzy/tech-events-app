import React, { FC, MouseEvent } from "react";

interface ButtonProps {
    title?: string;
    onClick?: MouseEvent<HTMLAnchorElement> | any;
}

const Button: FC<ButtonProps> = ({ title, onClick }) => {
    return (
        <a className="button is-small is-primary is-outlined" onClick={onClick}>
            {title || ""}
        </a>
    );
};

export default Button;
