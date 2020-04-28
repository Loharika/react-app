
import React,{Component} from 'react';
import {IoMdCheckmarkCircleOutline} from 'react-icons/io';

import {CheckMark,ToasterDisplay,ToasterInfo} from './styledComponents.js';


 class Toaster extends Component {
    
    render(){
      return (<ToasterDisplay>
              <CheckMark>
                  <IoMdCheckmarkCircleOutline />
              </CheckMark>
              <ToasterInfo>
                &nbsp; Product added to your cart
              </ToasterInfo>
            </ToasterDisplay>);
    }
  }
  export default  Toaster;
  