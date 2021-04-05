import React, { useState } from 'react';
import BaseEditor from 'react-simple-code-editor';
import PrismJS from 'prismjs';
import { thing } from './Editor.mode';
import 'prismjs/components/prism-stylus';
import 'prismjs/themes/prism.css';
import './Editor.css';

interface IEditor {
    content: string;
    language: string;
    tabSpaces: number;
}

export const Editor = ({ content, language, tabSpaces }: IEditor) => {
    const [code, setCode] = useState(
        `
burger
ml-model(science,0.99):*
lang:en
property(og_type):*:*
has:title
has:description:tag
distinct-window(domain):1000
        `
    );
    return (
        <BaseEditor
            value={code}
            onValueChange={(c) => setCode(c)}
            highlight={(c) => PrismJS.highlight(c, thing, 'thing')}
            padding={10}
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
            }}
        />
    );
};
