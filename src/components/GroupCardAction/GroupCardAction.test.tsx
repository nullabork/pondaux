import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { GroupCardAction } from '.';

test('List card renders', async () => {
    render(<GroupCardAction icon="win" action={() => {}} title="list description" />);
    expect(screen.getByText('list description')).toBeInTheDocument();
});
