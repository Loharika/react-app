import React from 'react';
import {TodoFooter,FooterButtons,DisplayActiveTodos,ButtonGroup} from './styledComponents';


class FilterButton extends React.Component{
    
    render(){
        const {buttonText,onChangeSelectedFilter}=this.props;
        return (
            <FooterButtons onClick={()=>onChangeSelectedFilter(buttonText.toUpperCase())}>{buttonText}</FooterButtons>
            )
    }
}
class ClearCompletedButton extends React.Component{
    
    render(){
        const {buttonText,onClearCompleted}=this.props;
        return (
            <FooterButtons onClick={onClearCompleted}>{buttonText}</FooterButtons>
            );
    }
}


function Footer(props){
    return(
    <TodoFooter >
                <DisplayActiveTodos>{props.activeTodosCount} items left</DisplayActiveTodos>
                <ButtonGroup className='todo-list-details'>
                    <FilterButton buttonText={'all'} onChangeSelectedFilter={props.onChangeSelectedFilter}/>
                    <FilterButton buttonText={'active'} onChangeSelectedFilter={props.onChangeSelectedFilter}/>
                    <FilterButton buttonText={'completed'} onChangeSelectedFilter={props.onChangeSelectedFilter}/>
                </ButtonGroup>
                <ClearCompletedButton buttonText={'clear completed'} onClearCompleted={props.onClearCompleted} />
    </TodoFooter>);
        
}
export {Footer,ClearCompletedButton,FilterButton};