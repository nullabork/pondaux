import React from 'react';
import { Story } from '@storybook/react';
import { GroupCardAction, IGroupCardAction } from './GroupCardAction';

const meta = [
    { name: 'Results', value: 4 },
    { name: 'Queries', value: 49 },
];

// 👇 We create a “template” of how args map to rendering
const Template: Story<IGroupCardAction> = ({ ...tail }) => <GroupCardAction {...tail} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { icon: 'win', description: 'Description' };

const base = {
    title: 'components/GroupCardAction',
    component: GroupCardAction,
};

export default base;
