
import React from 'react';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';

import { css, jsx } from '@emotion/core';

function header () {
    const theme = 'night';

    return (
        <header
        css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #eee;
        padding: 32px;
        `}>
            <div className="header-title">
                Markdown Editor v1
            </div>
            <div>
                { theme === 'night' ? <FaMoon/> : <FiSun/> }
            </div>
        </header>
    )
}

export default header;