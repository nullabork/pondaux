import data from '../../api/keywords.json';
import { IKeywords, Type } from '../../api/keywords';

const items = data as IKeywords;
const keywords = items.keywords
    .filter(({ type }) => type === Type.Keyword)
    .map(({ keyword }) => keyword)
    .join('|');

const functions = items.keywords
    .filter(({ type }) => type === Type.Function)
    .map(({ keyword }) => keyword)
    .join('|');

export const thing = {
    editor_function_args: {
        pattern: /(?![a-zA-Z0-9-]+\()[a-zA-Z0-9,.-_ ]+(?=\))/,
        lookbehind: true,
        inside: {
            editor_params: /[a-zA-Z0-9._]+/,
            editor_punctuation: /,/,
        },
    },

    editor_function: /(?:[a-zA-Z-0-9])+(?=\()/,

    editor_tag: /(?<=:[a-zA-Z0-9-*_]*:)[a-zA-Z0-9-*_]+/,

    editor_punctuation: /\(|\)/,

    // editor_middle2: /(?<=:)[a-zA-Z0-9-*_]+/,

    editor_middle: /(?<=:)[a-zA-Z0-9-*_]+/,

    editor_keyword: new RegExp(keywords),
    editor_keyword_funcs: new RegExp(functions),

    editor_divider: /:/,

    editor_text: /[a-zA-Z0-9-_"']+/,
};

(function (Prism) {
    Prism.languages.thing = thing;
})(Prism);
