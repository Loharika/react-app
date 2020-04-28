import React from 'react';
import {observer} from 'mobx-react';
import {ProductSizeButton,SizeFilterButtonDisplay,SizesTitle,SizeFilterStyledComponent} from './styledComponents';

@observer
class SizeFilter extends React.Component{
    renderSizeButton=()=>{
        let sizeButtons=['S','XS','M','L','XL','XXL'];
        
        const {sizeFilter}=this.props;
        const {onSelectSize}=this;
        
        return (sizeButtons.map(size=>{
            let isSelected=false;
            isSelected=sizeFilter.includes(size)?true:false;
            return (<ProductSizeButton key={size} isSelected={isSelected} onClick={()=>onSelectSize(size)}>{size}</ProductSizeButton>);
        }));
        
    }
    onSelectSize=(selectedSize)=>{
        const {onSelectSize}=this.props;
        onSelectSize(selectedSize);
        
    }
    render(){
        
        const {renderSizeButton}=this;
        
        return (
            <SizeFilterStyledComponent>
                <SizesTitle>Sizes:</SizesTitle>
                <SizeFilterButtonDisplay>{renderSizeButton()}</SizeFilterButtonDisplay>
            </SizeFilterStyledComponent>
       );
    }
    
}
export default SizeFilter;