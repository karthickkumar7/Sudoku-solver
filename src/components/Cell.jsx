import React, { useState } from 'react';
import { styles } from './iterationMaps';

const Cell = ({ num, flag, pos, enterVal }) => {
    const update = (e) => {
        enterVal(Number(e.target.value), pos);
    };

    return (
        <input
            className={`${
                styles[pos] && styles[pos]
            } w-[34px] h-[32px] md:w-[67px] md:h-[67px] md:px-5 text-xl border-black font-bold cursor-pointer outline-none hover:bg-teal-100 focus:bg-teal-200`}
            value={num}
            onChange={update}
        />
    );
};

export default Cell;
