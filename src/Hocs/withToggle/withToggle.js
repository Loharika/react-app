
import React from 'react';

function withToggle(WrappedComponent){
    return class extends React.Component {
    constructor(props) {
        super(props);

        this.state={toggleStatus:true};
    }
    
    onToggle=()=>{
        this.setState({toggleStatus:!this.state.toggleStatus});
    }
    render(){
        const {list,listTitle}=this.props;
        return (
        <WrappedComponent toggleStatus={this.state.toggleStatus} onToggle={this.onToggle} listTitle={listTitle} list={list}/>
            );
    }
    };
}
export default withToggle;