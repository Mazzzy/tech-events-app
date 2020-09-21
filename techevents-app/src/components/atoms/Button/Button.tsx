import React, { FC, MouseEvent } from "react";

interface ButtonProps {
    title?: string;
    dataVal?: string;
    onClick?: MouseEvent<HTMLAnchorElement> | any;
}

const Button: FC<ButtonProps> = ({ title, onClick, dataVal }) => {
    return (
        <a role="button" className="button is-small is-primary is-outlined" onClick={onClick} id={dataVal} href="/#">
            {title || ""}
        </a>
    );
};

export default Button;
