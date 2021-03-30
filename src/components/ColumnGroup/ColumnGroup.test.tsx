import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ColumnGroup } from '.';

test('List card renders', async () => {
    render(
        <ColumnGroup title="list name" description="list description">
            <div>list item1</div>
            <div>list item2</div>
        </ColumnGroup>
    );
    expect(screen.getByText('list name')).toBeInTheDocument();
    expect(screen.getByText('list description')).toBeInTheDocument();
    expect(screen.getByText('list item1')).toBeInTheDocument();
    expect(screen.getByText('list item2')).toBeInTheDocument();
});
