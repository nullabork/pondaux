import React from 'react';
import { Story } from '@storybook/react';
import { Icon, IIcon, IconSize } from './Icon';
import { IFontSelection } from './data/selection.interface';
import selection from './data/selection.json';

const fonts = selection as IFontSelection;

// 👇 We create a “template” of how args map to rendering
const Template: Story<IIcon> = ({ ...tail }) => <Icon {...tail} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { name: 'win' };

export const All = () => {
    return (
        <div className="flex flex-row flex-wrap">
            {fonts.icons.map(({ properties: { name, id } }) => {
                return (
                    <div
                        className="w-1/2 md:w-1/4 lg:w-1/6 flex flex-col content-center justify-center content-center"
                        key={id}
                    >
                        <Icon name={name} size={IconSize.BIG} />
                        <span>{name}</span>
                    </div>
                );
            })}
        </div>
    );
};

All.storyName = 'All Icons';

const storyArgs = {
    title: 'components/Icon',
    component: Icon,
};

export default storyArgs;
