
import React, { useState } from 'react';

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { RowFlex } from './shared';
import Editor from './editor';
import Preview from './preview';

interface Props {
    theme: string
}

const Main: React.FC<Props> = ({ theme }) => {
    const [ markdownContent, setMarkdownContent ] = useState<string>(``);

    return (
        <RowFlex
        css={css`
            padding: 32px;
            padding-top: 0px;
            height: calc(100vh - 170px);
            `}>
      <Editor theme={theme} markdownContent={markdownContent} setMarkdownContent={setMarkdownContent}/>
      <Preview theme={theme} markdownContent={markdownContent}/>
    </RowFlex>
    )
}

export default Main;