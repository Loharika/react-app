import React from 'react';
import {action} from 'mobx';
import {observer} from 'mobx-react';
@observer
class DisplayLives extends React.Component{
    @action.bound
    displayLives(){
        let hearts=[];
        const {intialLives}=this.props;
        for(let i=0;i<intialLives;i++){
            hearts.push(<i className='far fa-heart'></i>);
        }
        let heartsNumber=hearts.map(heart=>{
            return <li key={Math.random()}>{heart}  &nbsp; </li>;
        });
        return heartsNumber;
    }
    render(){
        return(
            <ul className='flex'>
                {this.displayLives()}
            </ul>
            );
    }
        
}
export default DisplayLives;