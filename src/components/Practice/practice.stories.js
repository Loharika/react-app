/*import React from 'react';
import { action } from '@storybook/addon-actions';

import { addDecorator } from '@storybook/react';


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


addDecorator(storyFn => <div style={{ justifyContent: 'center',width:'500px',display:'flex',backgroundColor:'lightgrey' }}>{storyFn()}</div>);

export const text = () => <Button onClick={action('clicked')} >Hello Rgukt!</Button>;

export const emoji = () => (
  <Button onClick={action('clicked')} ><span>Hello React!😀 😎 👍 💯</span></Button>
);*/

import React from 'react';


class MyComponent extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {this.props.text}
            </button>
            )
    }
}

export default {
  title: 'MyComponent',
  decorators: [storyFn => <div style={{ backgroundColor: 'yellow' }}>{storyFn()}</div>],
};

export const normal = () => <MyComponent />;
export const special = () => <MyComponent text="The Boss" />;

special.story = {
  decorators: [storyFn => <div style={{ border: '5px solid red',textDecoration:'strike-through' }}>{storyFn()}</div>],
};