import React from 'react';
import {TodoFooter,FooterButtons,DisplayActiveTodos,ButtonGroup} from './styledComponents';
function Footer(props){
    return(
    <TodoFooter >
                <DisplayActiveTodos>{props.activeTodosCount} items left</DisplayActiveTodos>
                <ButtonGroup className='todo-list-details'>
                <FooterButtons onClick={()=>props.onChangeSelectedFilter('ALL')}>all</FooterButtons>
                <FooterButtons  onClick={()=>props.onChangeSelectedFilter('ACTIVE')}>active</FooterButtons>
                <FooterButtons onClick={()=>props.onChangeSelectedFilter('COMPLETED')}>completed</FooterButtons>
                </ButtonGroup>
                <FooterButtons onClick={props.onClearCompleted}>clear completed</FooterButtons>
    </TodoFooter>);
        
}
export default Footer;