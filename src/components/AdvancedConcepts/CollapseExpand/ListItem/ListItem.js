import React from 'react';



function  SeparateWithComma(props){
    const {price,separateWithCommas}=props;
    return (
            <div>{separateWithCommas(price)}</div>
        );
}
export default SeparateWithComma;