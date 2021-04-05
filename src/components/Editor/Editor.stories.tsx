import React from 'react';
import { Story } from '@storybook/react';
import { Editor } from '.';

export const Primary = () => {
    return <Editor content="asd" language="javascript" tabSpaces={4} />;
};

Primary.storyName = 'Primary';

const storyArgs = {
    title: 'Editor',
    component: Primary,
};

export default storyArgs;
