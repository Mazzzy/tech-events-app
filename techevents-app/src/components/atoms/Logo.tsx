import React, { FC } from "react";
import defaultLogo from "../../trivago-logo.png";

interface LogoProps {
    url?: string;
}

const Logo: FC<LogoProps> = ({ url }) => {
    return <img src={url || defaultLogo} />;
};

export default Logo;
