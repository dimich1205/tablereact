import React from "react";

const Switcher = ({btnHandler}) => {
    const smallUrl = 'http://www.filltext.com/?rows=32&id={...​|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    const bigUrl = 'http://www.filltext.com/?rows=1000&id...​|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    return (
        <div>
            <button className="btn btn-outline-dark" onClick={ () => btnHandler(smallUrl)  }>32 ROW</button>
            <button className="btn btn-outline-dark" onClick={ () => btnHandler(bigUrl)  }>1000 ROW</button>
        </div>
    )
}

export default Switcher;