import React from 'react';

export interface ICardMeta {
    name: string;
    value?: string | number;
}

export interface IGroupCard {
    title: string;
    description?: string;
    meta: ICardMeta[];
}

export const GroupCard = ({ title, description, meta }: IGroupCard) => {
    return (
        <div className="bg-gray-300 p-2">
            <h3 className="text-lg font-medium ">{title}</h3>
            {description && <p className="text-base"> {description} </p>}
            <div className="text-xs flex">
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
