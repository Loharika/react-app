import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import '../../styles/tailwind.css';
import LoadingView from './LoadingView.js';



export default {
   component: LoadingView,
   title: 'Common/LoadingView',
   decorators: [storyFn => <div style={{ backgroundColor: 'yellow' }}>{storyFn()}</div>],
};

export const defaultView = () => <LoadingView />;

export const withBorder = () => <LoadingView />;

withBorder.story = {
  decorators: [storyFn => <div style={{ border: '5px solid green' }}>{storyFn()}</div>],
};