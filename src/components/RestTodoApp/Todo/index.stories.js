import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import '../../../styles/tailwind.css';


import TodoComponent from '.';

const todoObjectNotChecked={
                id:Math.random(),
                title:'Hello Rgukt!!',
                isCompleted:false,
            };
const todoObjectChecked={
                id:Math.random(),
                title:'Hello Rgukt!!',
                isCompleted:true,
            };
            
export default {
  title: 'TodoComponent',
  component:TodoComponent,
};

export const normal = () => <TodoComponent todo={todoObjectNotChecked} onRemoveTodo={action('removebutton clicked')}/>;
export const checked = () => <TodoComponent todo={todoObjectChecked}  onRemoveTodo={action('removebutton clicked')} />;

checked.story = {
   decorators: [withKnobs]
};
