/* Header.js */
import React from 'react';

const Header = () => {
    return (
        <header>
            <img src={process.env.PUBLIC_URL+'/와이어프레임 2.jpeg'} width={'300px'}/>
            <hr/>
        </header>
    );
};

export default Header;