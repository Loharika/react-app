import React from 'react';


class DeviceTypeText extends React.Component{
    getDeviceTypeText=()=>{
        const {windowWidth}=this.props;
        if(windowWidth<576){
            return 'Mobile';
        }
        else if(windowWidth>=567 && windowWidth<992){
            return 'Tablet';
        }
        else{
            return 'Desktop';
        }
    }
    render(){
        return (
            <div className='flex flex-col h-24 w-full items-center justify-center' style={{backgroundColor:'#e2e8f0'}}>
                <h1 className='flex my-1 justify-center font-bold text-lg'>DeviceTypeText</h1>
                <div>Device Type: {this.getDeviceTypeText()}</div>
            </div>
            );
    }
}
export default DeviceTypeText;