import React from 'react';
import {observable,action,computed} from 'mobx';
import {observer} from 'mobx-react';
@observer
class AddTodo extends React.Component{
    @observable todoTitle='';
    @action.bound
    onAddTodo(userInputTodo){
        this.props.onAddTodo(userInputTodo);    
    }
    @action.bound
    onChangeInput(event){
        if(event.keyCode===13){
            if(event.target.value.length!==0){
                this.onAddTodo(event.target.value);
                event.target.value='';
            }
            else{
                alert("Please enter a todo");
            }
        }
    }
    render(){
        return (
            <input onKeyDown={this.onChangeInput} type='text' className="text1" placeholder="what needs to be done?" />
        );

    }
}
export default AddTodo;