import React from 'react';
import { Story } from '@storybook/react';
import faker from 'faker';
import { ColumnGroup, IColumnGroup } from './ColumnGroup';
import { GroupCard, IGroupCard } from '../GroupCard';

const meta = [
    { name: 'Results', value: 4 },
    { name: 'Queries', value: 49 },
];

export const Primary = () => {
    return (
        <ColumnGroup title="title" description="description">
            <GroupCard title="Add" icon="add" />
            <GroupCard>
                <GroupCard title="Add" icon="add" />
                <GroupCard title="Win" icon="win" />
            </GroupCard>
            <GroupCard
                title="metrics"
                description="Distributed next generation ability"
                meta={meta}
            />
        </ColumnGroup>
    );
};

Primary.storyName = 'Primary';

// 👇 We create a “template” of how args map to rendering
const Template: Story<IColumnGroup & { rows: number }> = ({
    children,
    rows,
    ...tail
}) => (
    <ColumnGroup {...tail}>
        {[...Array(rows)].map((e, i) => {
            if (!i) {
                return <GroupCard key={e} title="add" icon="add" />;
            }

            return (
                <GroupCard
                    key={e}
                    title={faker.company.bsBuzz()}
                    description={faker.company.catchPhrase()}
                    meta={[...Array(Math.floor(Math.random() * 10))].map(() => {
                        return {
                            name: faker.company.bsNoun(),
                            value: Math.floor(Math.random() * 100),
                        };
                    })}
                />
            );
        })}
    </ColumnGroup>
);

// 👇 Each story then reuses that template
export const Long = Template.bind({});
Long.args = {
    title: 'Long Title',
    description: 'Description',
    rows: 5,
};

const storyArgs = {
    title: 'Column Group',
    component: ColumnGroup,
    argTypes: {
        rows: {
            control: { type: 'range', min: 0, max: 10, step: 1 },
        },
    },
};

export default storyArgs;
