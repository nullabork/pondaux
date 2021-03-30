import React from 'react';
import './data/style.css';

export enum IconSize {
    DEFAULT = '4xl',
    SMALL = 'lg',
    MEDIUM = '2xl',
    BIG = '4xl',
}

export interface IIcon {
    name: string;
    title?: string;
    size?: IconSize;
}

export const Icon = ({ name, title, size = IconSize.DEFAULT }: IIcon) => {
    return <span className={`icon-${name} text-${size}`} />;
};
