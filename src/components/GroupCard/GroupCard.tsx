import React, { ReactElement } from 'react';
import { Icon } from '../Icon';

export interface ICardMeta {
    name: string;
    value?: string | number;
}

export interface IGroupCard {
    title?: string;
    description?: string;
    icon?: string;
    meta?: ICardMeta[];
    children?: ReactElement | ReactElement[];
    onAction?: () => {};
}

export const GroupCard = ({
    title,
    icon,
    description,
    meta = [],
    onAction,
    children,
}: IGroupCard) => {
    let props = {};
    if (onAction) {
        props = {
            tabIndex: 0,
            onClick: () => onAction?.(),
            onKeyDown: () => onAction?.(),
        };
    }

    return (
        <div className="bg-gray-300 p-2" role="button" {...props}>
            <div className="flex">
                {icon && <Icon name={icon} />}
                <h3 className="text-lg leading-9 font-medium">{title}</h3>
            </div>
            {children && <div className="flex flex-row">{children}</div>}
            {description && <p className="text-base"> {description} </p>}
            <div className="text-xs flex flex-wrap">
                {meta.map(({ name, value }, i) => (
                    <div key={`${name}`} className="meta mr-2">
                        <span className="mr-1">{name}</span>
                        {value && <span>{value}</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};
