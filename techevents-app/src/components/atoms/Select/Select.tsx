import React, { FC, FormEvent } from "react";
import Icon from "../Icon/Icon";
import "./Select.css";
interface DefaultOptionType {
    id: string;
    name: string;
}
interface SelectProps {
    name?: string;
    value?: string;
    className?: string;
    defaultOption?: string;
    options: DefaultOptionType[] | any;
    onChange?: (e: FormEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> = ({ name, value, className, defaultOption, options, onChange }) => {
    return (
        <div className="field">
            <div className="has-icons-left">
                <div className="select">
                    <select className={`${className || ""}`} name={name} onChange={onChange} value={value}>
                        <option value="0">{defaultOption}</option>
                        {options.map((item: DefaultOptionType) => (
                            <option key={item.id} value={item.id}>
                                {" "}
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
                <Icon placeIconClass="is-left" className="fa-globe" />
            </div>
        </div>
    );
};

export default Select;
