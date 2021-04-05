import React from 'react';
import { Story } from '@storybook/react';
import { GroupCard, IGroupCard } from './GroupCard';

const meta = [
    { name: 'Results', value: 4 },
    { name: 'Queries', value: 49 },
];

// 👇 We create a “template” of how args map to rendering
const Template: Story<IGroupCard> = ({ ...tail }) => <GroupCard {...tail} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { title: 'Title', description: 'Description', meta };

const storyArgs = {
    title: 'components/GroupCard',
    component: GroupCard,
};

export default storyArgs;
