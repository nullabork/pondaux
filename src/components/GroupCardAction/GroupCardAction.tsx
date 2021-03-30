import React from 'react';
import { Icon, IIcon, IconSize } from '../Icon';

export interface IGroupCardAction {
    title: string;
    description?: string;
    icon: string;
    action?: () => void;
}

export const GroupCardAction = ({ action, icon, title, description }: IGroupCardAction) => {
    return (
        <button type="button" className="bg-gray-300 p-2 flex flex-col" onClick={action} onKeyDown={action}>
            <div className="flex flex-row">
                <Icon name={icon} /> <h3 className="text-lg leading-9 font-medium">{title}</h3>
            </div>
        </button>
    );
};
