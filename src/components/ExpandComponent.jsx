import React, { useState } from "react";

const ExpandComponent = ({ day, holiday, date, i }) => {
    const [exp, setexp] = useState(false);

    // const expHandler = () => {
    //     setexp((pv) => !pv);
    //     setPvExp(id);
    // };

    return (
        // <li className="p-2 cursor-pointer" onClick={expHandler}>
        //     {name}
        //     {exp && (
        //         <div className="border">
        //             <p>{username}</p>
        //             <p>{email}</p>
        //         </div>
        //     )}
        // </li>
        <>
            <tr className={`${!(i % 2) && "bg-slate-200"}`}>
                <td className={""}>{day}</td>
                <td>{holiday.toString()}</td>
                <td>{date}</td>
            </tr>
        </>
    );
};

export default ExpandComponent;
