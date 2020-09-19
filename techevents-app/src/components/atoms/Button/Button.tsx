import React, { FC, MouseEvent } from "react";

interface ButtonProps {
    title?: string;
    dataVal?: string;
    onClick?: MouseEvent<HTMLAnchorElement> | any;
}

const Button: FC<ButtonProps> = ({ title, onClick, dataVal }) => {
    return (
        <a className="button is-small is-primary is-outlined" onClick={onClick} id={dataVal}>
            {title || ""}
        </a>
    );
};

export default Button;
