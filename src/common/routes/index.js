import React from 'react';

import DeviceTypeText from '../../components/AdvancedConcepts/DeviceTypeText';
import ViewEditToggle from '../../components/AdvancedConcepts/ViewEditToggle';
import CollapseExpand from '../../components/AdvancedConcepts/CollapseExpand';
import MouseCoordinates from '../../components/AdvancedConcepts/MouseCoordinates';
import DisplayMouseCoordinates from '../../components/AdvancedConcepts/DisplayMouseCoordinates';

class PracticeAdvancedConceptsRoute extends React.Component{
    constructor(){
        super();
        this.listTitle='Sample Shopping List:';
        this.list=[{name:'Laptop',price:'125000'},{name:'Mobile',price:'12456'}];
    }
    render(){
        const {list,listTitle}=this;
        return (
            <div className='flex flex-col items-center w-screen'>
                <div className='text-3xl my-3'>HOC's Usage</div>
                    <ViewEditToggle />
                    <CollapseExpand listTitle={listTitle} list={list}/>
                    <DeviceTypeText />
                <div className='text-3xl my-3'>Render Props Usage</div>
                    <MouseCoordinates render={(mouseCoordinates,onChangeMousePointer)=>(
                        <DisplayMouseCoordinates coordinates={mouseCoordinates} onChangeMousePointer={onChangeMousePointer}/>
                        )}
                    />
           </div>
            );
    }
}
export default PracticeAdvancedConceptsRoute;