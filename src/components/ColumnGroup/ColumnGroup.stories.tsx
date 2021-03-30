import React from 'react';
import { Story } from '@storybook/react';
import { ColumnGroup, IColumnGroup } from './ColumnGroup';
import { GroupCard, IGroupCard } from '../GroupCard';
import { GroupCardAction } from '../GroupCardAction';

const meta = [
    { name: 'Results', value: 4 },
    { name: 'Queries', value: 49 },
];

// 👇 We create a “template” of how args map to rendering
const Template: Story<IColumnGroup> = ({ children, ...tail }) => <ColumnGroup {...tail}>{children}</ColumnGroup>;

// 👇 Each story then reuses that template
export const Long = Template.bind({});
Long.args = {
    title: 'Long Title',
    description: 'Description',
    children: [
        <GroupCardAction key="0" icon="add" title="Add" />,
        <GroupCard key="1" title="eyeballs" description="Reactive full-range moratorium" meta={meta} />,
        <GroupCard key="2" title="e-business" description="Profound real-time array" meta={meta} />,
        <GroupCard key="3" title="vortals" description="Multi-layered intermediate initiative" meta={meta} />,
        <GroupCard key="4" title="markets" description="Adaptive 3rd generation process improvement" meta={meta} />,
        <GroupCard key="5" title="blockchains" description="Synchronised system-worthy complexity" meta={meta} />,
        <GroupCard key="6" title="systems" description="Seamless system-worthy support" meta={meta} />,
        <GroupCard key="7" title="synergies" description="Profound analyzing pricing structure" meta={meta} />,
        <GroupCard key="8" title="networks" description="Profit-focused contextually-based paradigm" meta={meta} />,
        <GroupCard key="9" title="web-readiness" description="Programmable global hub" meta={meta} />,
        <GroupCard key="10" title="communities" description="Front-line global hierarchy" meta={meta} />,
        <GroupCard key="11" title="content" description="Programmable maximized standardization" meta={meta} />,
        <GroupCard key="12" title="metrics" description="Networked responsive workforce" meta={meta} />,
    ],
};

export const Short = Template.bind({});
Short.args = {
    ...Long.args,
    title: 'Short Title',
    children: [
        <GroupCardAction key="0" icon="add" title="Add" />,
        <GroupCard key="1" title="models" description="Decentralized non-volatile instruction set" meta={meta} />,
        <GroupCard key="2" title="metrics" description="Distributed next generation ability" meta={meta} />,
    ],
};

const base = {
    title: 'components/ColumnGroup',
    component: ColumnGroup,
};

export default base;
