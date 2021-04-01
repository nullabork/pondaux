import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Icon } from '.';

test('Icon renders', async () => {
    const { container } = render(<Icon name="upload" id="test" />);
    expect(container.querySelector('#test')).toBeDefined();
});
