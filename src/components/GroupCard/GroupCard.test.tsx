import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { GroupCard } from '.';

const meta = [
    { name: 'Results', value: 4 },
    { name: 'Queries', value: 49 },
];

test('List card renders', async () => {
    const { container } = render(<GroupCard title="list name" description="list description" meta={meta} />);
    expect(screen.getByText('list name')).toBeInTheDocument();
    expect(container.querySelectorAll('.meta')).toHaveLength(2);
});
