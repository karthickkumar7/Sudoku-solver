import React, { useState } from "react";
import { styles } from "./iterationMaps";

const Cell = ({ num, flag, pos, enterVal }) => {
    const update = (e) => {
        enterVal(Number(e.target.value), pos);
    };

    return (
        <input
            className={`${
                styles[pos] && styles[pos]
            } w-[67px] h-[67px] px-5 text-xl border-black font-bold cursor-pointer outline-none hover:bg-teal-100 focus:bg-teal-200`}
            value={num}
            onChange={update}
        />
    );
};

export default Cell;
