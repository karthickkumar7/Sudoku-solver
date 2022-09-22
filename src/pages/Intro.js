import React from "react";

const Intro = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="title p-4 rounded-lg bg-orange-600">
                <h1 className="text-6xl font-bold text-white">Sudoku Solver</h1>
            </div>
            <h1 className="link my-8 text-white text-xl cursor-pointer">
                Github Link
            </h1>
        </div>
    );
};

export default Intro;
