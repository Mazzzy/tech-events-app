import React, { FC, FormEvent } from "react";

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
            <div className="control has-icons-left">
                <div className="select">
                    <select className={`${className}`} name={name} onChange={onChange} value={value}>
                        <option value="0">{defaultOption}</option>
                        {options.map((item: DefaultOptionType) => (
                            <option key={item.id} value={item.id}>
                                {" "}
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="icon is-small is-left">
                    <i className="fas fa-globe" />
                </div>
            </div>
        </div>
    );
};

export default Select;
