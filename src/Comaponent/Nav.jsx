import React from 'react';

const Nav = ({name, style}) => {
    return (
        <div style={{marginTop: "-120px", marginBottom: "20px"}} className="w-100 tac">
             <h1 className="head-text" style={style}>{name}</h1>
        </div>
    )
}

export default Nav;
