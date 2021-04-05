import React, { HTMLAttributes } from 'react';

import './data/style.css';

export enum IconSize {
    DEFAULT = '4xl',
    SMALL = 'lg',
    MEDIUM = '2xl',
    BIG = '4xl',
}
export interface IIcon extends HTMLAttributes<HTMLSpanElement> {
    name: string;
    size?: IconSize;
}

export const Icon = ({
    name,
    title,
    size = IconSize.DEFAULT,
    className,
    children,
    ...tail
}: IIcon) => {
    return (
        <span className={`icon-${name} text-${size} ${className}`} {...tail} />
    );
};
