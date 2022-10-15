import { useState, useEffect } from 'react';
import SudokuSolver from './SudokuSolver';
import Intro from './Intro';

import '../components/style.css';

const Main = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const showContent = setTimeout(() => {
            setShow(true);
        }, [2000]);

        return () => clearTimeout(showContent);
    }, []);

    return (
        <div className="w-screen h-screen bg-gradient-to-r from-teal-600 to-orange-600">
            {show ? <SudokuSolver /> : <Intro />}
        </div>
    );
};

export default Main;
