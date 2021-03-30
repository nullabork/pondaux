import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Icon } from '.';

test('Icon renders', async () => {
    render(<Icon name="upload" title="thing" />);
    expect(screen.getByText('thing')).toBeInTheDocument();
});
