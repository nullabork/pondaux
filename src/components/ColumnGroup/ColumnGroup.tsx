import React, { ReactElement } from 'react';

export interface IColumnGroup {
    title: string;
    description?: string;
    children: ReactElement | ReactElement[];
}

export const ColumnGroup = ({ title, description, children }: IColumnGroup) => {
    return (
        <div className="bg-gray-200 p-4 flex flex-col max-h-screen">
            <h2 className="text-2xl font-semibold">{title}</h2>
            {description && <p> {description} </p>}
            <div className="mt-2 overflow-y-auto flex-grow flex flex-col space-y-2">{children}</div>
        </div>
    );
};
