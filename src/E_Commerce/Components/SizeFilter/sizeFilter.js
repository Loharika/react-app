import React from 'react';
import {observer} from 'mobx-react';
import {ProductSizeButton,SizeFilterButtonDisplay,SizesTitle,SizeFilterStyledComponent} from './styledComponents';

@observer
class SizeFilter extends React.Component{
    render(){
        const sizeButtons=['S','XS','M','L','XL','XXL'];
        const {sizeFilter,onSelectSize}=this.props;
        return (
            <SizeFilterStyledComponent>
                <SizesTitle>Sizes:</SizesTitle>
                <SizeFilterButtonDisplay>
                    {sizeButtons.map(size=>{
                        let isSelected=false;
                        isSelected=sizeFilter.includes(size)?true:false;
                        return (
                        <ProductSizeButton key={size} isSelected={isSelected} onClick={()=>onSelectSize(size)}>{size}</ProductSizeButton>);
                    })}
                </SizeFilterButtonDisplay>
            </SizeFilterStyledComponent>
       );
    }
    
}
export default SizeFilter;