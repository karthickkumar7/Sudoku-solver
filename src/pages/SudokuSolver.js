import React, { useEffect, useState } from 'react';
import Cell from '../components/Cell';

import { maps } from '../components/iterationMaps';

const SudokuSolver = () => {
    const [board, setBoard] = useState([]);

    const enterVal = (num, i) => {
        const temp = [...board];
        temp[i] = num ? num : '';
        setBoard(temp);
    };

    const solvePuzzle = () => {
        const temp = [...board];
        for (let i = 0; i < temp.length; i++) {
            let possibleNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            if (!temp[i]) {
                for (let j = 0; j < maps[i].length; j++) {
                    for (let k = 0; k < maps[i][j].length; k++) {
                        if (possibleNums.includes(temp[maps[i][j][k]])) {
                            possibleNums = possibleNums.filter(
                                (n) => n !== temp[maps[i][j][k]]
                            );
                        }
                    }
                }
                if (possibleNums.length === 1) {
                    temp[i] = possibleNums[0];
                }
            }
        }
        setBoard(temp);
    };

    const resetBoardHandler = () => {
        const res = [];
        for (let i = 0; i < 81; i++) {
            res.push('');
        }
        setBoard(res);
    };

    useEffect(() => {
        resetBoardHandler();
    }, []);

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-900 relative">
            <h1 className="absolute top-[80px] md:top-[30px] md:block text-4xl text-white font-semibold">
                SUDOKU <span className="border-b italic text-gold">SOLVER</span>
                <span className="text-xs absolute top-12 italic text-slate-500 right-10">
                    karthick
                </span>
            </h1>

            {/* BOARD */}
            <div className="w-full h-full md:w-[800px] md:h-[800px] flex justify-center items-center relative">
                <div className="w-[350px] h-[375px] md:w-[628px] md:h-[628px] flex flex-wrap rounded overflow-hidden">
                    {board.map((cell, i) => (
                        <div key={i} className="border border-slate-500">
                            <Cell
                                num={cell}
                                pos={i}
                                enterVal={enterVal}
                                onClick={solvePuzzle}
                            />
                        </div>
                    ))}

                    {/* BIGGER CELL */}
                    <div className="absolute -z-10 w-[210px] h-[210px] top-[85px] left-[84px] border-2 border-slate-200"></div>
                </div>
            </div>

            {/* BUTTONS */}
            <div className="flex absolute bottom-[100px] md:bottom-[70px]">
                <button
                    className="mr-2 px-8 py-3 uppercase font-semibold border border-gold text-gold duration-300 hover:bg-gold/50 hover:border-gold/50 hover:text-yellow-100 rounded"
                    onClick={resetBoardHandler}
                >
                    reset
                </button>
                <button
                    className="mr-2 px-8 py-3 uppercase font-semibold border border-emerald-600 text-emerald-300 duration-300 hover:bg-emerald-600/50 hover:border-emerald-600/50 hover:text-emerald-100-100 rounded"
                    onClick={solvePuzzle}
                >
                    solve
                </button>
            </div>
        </div>
    );
};

export default SudokuSolver;
