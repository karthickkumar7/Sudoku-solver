import React, { useState } from 'react';
import Cell from '../components/Cell';

import { maps } from '../components/iterationMaps';

const SudokuSolver = () => {
    const [iter, setIter] = useState([]);
    const [board, setBoard] = useState([
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ]);

    const checkIterablehandler = (pos) => {
        const res = [];
        for (let i = 0; i < maps[pos].length; i++) {
            for (let j = 0; j < maps[pos][i].length; j++) {
                res.push(maps[pos][i][j]);
            }
        }
        setIter(res);
    };

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

    // useEffect(() => {
    //     console.log('ran');
    //     let count = 0;
    //     if (count < 8)
    //     for (let i = 0; i < board.length; i++) {
    //         if (board[i] === '') {
    //             solvePuzzle();
    //             count++;
    //         }
    //     }
    // }, [board]);

    return (
        <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-r from-teal-600 to-orange-500">
            <h1 className="absolute top-[10px] md:block text-4xl text-white font-semibold">
                SUDOKU <span className="border-b">SOLVER</span>
            </h1>
            <div className="w-full h-full md:w-[800px] md:h-[800px] flex justify-center items-center">
                <div className="w-[350px] h-[375px] md:w-[628px] md:h-[628px] flex flex-wrap rounded">
                    {board.map((cell, i) => (
                        <div key={i} className="border">
                            <Cell
                                num={cell}
                                pos={i}
                                flag={iter.includes(i) ? true : false}
                                enterVal={enterVal}
                                onClick={solvePuzzle}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex mb-4">
                <button
                    className="mr-2 px-8 py-3 uppercase text-slate-600 font-semibold bg-yellow-300 rounded"
                    onClick={resetBoardHandler}
                >
                    reset
                </button>
                <button
                    className=" md:relative px-8 py-3 uppercase font-semibold bg-green-500 text-white rounded"
                    onClick={solvePuzzle}
                >
                    solve
                </button>
            </div>
        </div>
    );
};

export default SudokuSolver;
