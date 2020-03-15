
import React from 'react';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import { css, jsx } from '@emotion/core';

interface Props {
    toggleTheme: () => void,
    theme: string
}

const darkCss = `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #eee;
    padding: 32px;
`;

const lightCss = `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f8f541;
    padding: 24px 32px;
    box-shadow: 0px -2px 8px #000;
    font-size: 16px;
`;


const Header: React.FC<Props> = ({ theme, toggleTheme }) => {
    return (
        <header css={ css(( theme === 'dark' ) ? `${darkCss}` : `${lightCss}`) }>
            <div className="header-title">
                Markdown Editor v1
            </div>
            <div css={css`cursor: pointer`}
                onClick={ toggleTheme }>

                { theme === 'night' ? <FaMoon/> : <FiSun/> }
            </div>
        </header>
    )
}

export default Header;