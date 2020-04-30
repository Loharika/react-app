import React,{Component} from 'react';

class HelloMessage extends React.Component{
    render(){
        return (<div>{this.props.message}</div>);
    }
}
export {HelloMessage};

<HelloMessage message='world'/>;
<HelloMessage message='helloe'/>;