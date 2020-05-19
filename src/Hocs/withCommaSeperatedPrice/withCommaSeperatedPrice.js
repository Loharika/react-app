import React from 'react';

function withCommaSeperatedPrice(WrappedComponent){
    return class extends React.Component{
            separateWithCommas(num)
              {
                let num_parts = num.toString().split(".");
                num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return num_parts.join(".");
              }
        render(){
            const {price}=this.props;
            return (
                <WrappedComponent separateWithCommas={this.separateWithCommas} price={price}/>
                );
        }
    };
}
export default withCommaSeperatedPrice;