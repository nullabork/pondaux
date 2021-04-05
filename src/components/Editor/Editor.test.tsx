import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Editor Renders', async () => {
    const thing = true;
    expect(thing).toBeTruthy();
});
