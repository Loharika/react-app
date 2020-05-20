import React from 'react';
import { action } from '@storybook/addon-actions';

class Button extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {this.props.children}
            </button>
            )
    }
}
export default {
  component: Button,
  title: 'Button',
};

export const text = () => <Button onClick={action('clicked')} className='border-4 border-red-500'>Hello Rgukt!</Button>;

export const emoji = () => (
  <Button onClick={action('clicked')} ><span>Hello React!😀 😎 👍 💯</span></Button>
);