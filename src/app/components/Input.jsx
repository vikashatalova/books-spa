import React from 'react';
import { CiSearch } from 'react-icons/ci';
const Input = ({ type, name, icon, value, onChange }) => {
    return (
        <div className="form__input">
            <input
                autoComplete="off"
                className="form__input-input"
                onChange={onChange}
                type={type ? type : 'text'}
                name={name}
                id={name}
                value={value}
            />
            <label className="form__input-label" htmlFor={name}>
                {!icon ? <CiSearch /> : icon}
            </label>
        </div>
    );
};

export default Input;
