import React from 'react';
import { styles } from './iterationMaps';

const Cell = ({ num, flag, pos, enterVal }) => {
    const update = (e) => {
        enterVal(Number(e.target.value), pos);
    };

    return (
        <input
            className={`w-[36px] h-[38px] md:w-[67px] md:h-[67px] md:px-5 text-xl text-center md:text-2xl border-gold text-gold bg-slate-800 font-bold cursor-pointer outline-none hover:bg-slate-700 focus:bg-gold/ duration-200 ${
                styles[pos] && styles[pos]
            }`}
            value={num}
            onChange={update}
        />
    );
};

export default Cell;
