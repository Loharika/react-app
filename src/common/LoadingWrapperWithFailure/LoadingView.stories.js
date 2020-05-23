import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs,color,border} from '@storybook/addon-knobs';

import '../../styles/tailwind.css';
import LoadingView from './LoadingView.js';

import Loader from '../Icons/Loader/SvgFile.js';

export default {
   component: LoadingView,
   title: 'Common/LoadingView',
   decorators: [storyFn => <div>{storyFn()}</div>],
};

export const defaultView = () => <LoadingView />;

export const withBorder = () => <LoadingView />;

withBorder.story = {
  decorators: [storyFn => <div style={{ border: '5px solid green' }}>{storyFn()}</div>],
};


export const loader = () => <Loader fill={color('fill','#5aeb5c')} />;

loader.story={
    decorators:[withKnobs]
};