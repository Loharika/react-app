import React from 'react';
import goBackImage from './back-icon.svg';
class NavBar extends React.Component{
    goBack=()=>{
    this.props.history.goBack();
  }
    render(){
        console.log(this.props.history);
        return (
            <div className='go-back-buttom-column'>
            <button type='button' className='go-back-button' onClick={this.goBack}>
                <img src={goBackImage} alt='goBackImage' className='back-arrow-image'/>
                
            </button><div>{this.props.nameOnNavBar}</div>
            </div>
            );
    }
}
export default NavBar;