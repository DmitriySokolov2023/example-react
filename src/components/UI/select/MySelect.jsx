import React from 'react';
import classes from "./MySelect.module.css";

const MySelect = ({option, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            className={classes.mySelect}
            onChange={e => onChange(e.target.value)}
        >
            <option value='def' disabled className={classes.myOption}>{defaultValue}</option>
            {option.map(opt =>
                <option className={classes.myOption} value={opt.value} key={opt.name}>{opt.name}</option>
            )}
        </select>
    );
};

export default MySelect;