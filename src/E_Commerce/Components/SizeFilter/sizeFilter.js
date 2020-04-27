import React from 'react';
import {observable} from 'mobx';
import {ProductSizeButton,SizeFilterButtonDisplay} from './styledComponents';
import {observer} from 'mobx-react';
@observer
class SizeFilter extends React.Component{
    renderSizeButton=()=>{
        let sizeButtons=['S','XS','M','L','XL','XXL'];
        const {sizeFilter}=this.props;
        return (sizeButtons.map(size=>{
            let isSelected=false;
            isSelected=sizeFilter.includes(size)?true:false;
            //alert(isSelected);
            return (<ProductSizeButton key={Math.random()} isSelected={isSelected} onClick={()=>this.onSelectSize(size)}>{size}</ProductSizeButton>);
        }));
        
    }
    onSelectSize=(selectedSize)=>{
        const {onSelectSize}=this.props;
        onSelectSize(selectedSize);
        
    }
    render(){
        //alert(this.props.sizeFilter);
        return (
        <SizeFilterButtonDisplay>{this.renderSizeButton()}</SizeFilterButtonDisplay>
       );
    }
    
}
export default SizeFilter;