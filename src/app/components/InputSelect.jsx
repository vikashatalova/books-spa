import React from 'react';

const InputSelect = ({ options, id, onChange, label }) => {

    return (
        <>
            <label
                className="form-label"
            >
                {label}
            </label>
            <select
                className="form-select"
                id={id}
                onChange={onChange}
                label={label}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.title}
                    </option>
                ))}
            </select>
        </>
    );
};

export default InputSelect;
