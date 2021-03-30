import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { GroupCardAction } from '.';

test('List card renders', async () => {
    render(<GroupCardAction icon="win" action={() => {}} description="list description" />);
    expect(screen.getByText('Results 4')).toBeInTheDocument();
});
