export interface IKeywords {
    keywords: IKeyword[];
}

export interface IKeyword {
    keyword: string;
    type: Type;
}

export enum Type {
    Function = 'function',
    Keyword = 'keyword',
}
