import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const CartItems=styled.div`
    ${tw`flex flex-col z-10 absolute fixed  h-screen`};
    top:0px;
    right:0px;
    width:${props=>props.shouldDisplayCart?'420px':'auto'};
    background-color:${props=>props.shouldDisplayCart?'#2d3748':'white'};
    color:${props=>props.shouldDisplayCart?'white':'black'};
    
`;

const CartHideButton=styled.button`
    ${tw`justify-center items-center`};
    background-color:#2d3748;
    width:40px;
    height:40px;
    color:white;
    margin-left:-40px;
    display:${props=>props.shouldDisplayCart?'flex':'none'};
`;

const Cart=styled.div`
${tw`flex-col relative h-full  `}
    width:400px;
    align-items:center;
    display:${props=>props.shouldDisplayCart?'flex':'none'};
`;

const SubTotalWithCheckOutButton=styled.div`
  ${tw`w-full flex-col justify-end`};
  display:${props=>props.shouldDisplayCart?'flex':'none'};
`;
const AddCartOpen=styled.div`
    ${tw`w-12 h-12 text-white flex justify-center items-center  relative `};
    background-color:#2d3748;
    font-size:40px;
    width:60px;
    height:70px;
    display:${props=>props.shouldDisplayCart?'none':'flex'}
    `;
const AddCartClose=styled.div`
    ${tw`w-12 h-12 text-white flex justify-center items-center  relative `};
    background-color:#2d3748;
    font-size:40px;
    width:60px;
    height:70px;
    align-self:center;
    margin-top:-30px;
    display:${props=>!props.shouldDisplayCart?'none':'flex'}
    
    `;
const NumberOfCartItems=styled.span`
    ${tw`absolute`};
    color:#cc7a00;
    font-size:16px;
    margin-top:-2px;
`;
const CartTitle=styled.span`
    ${tw`text-2xl font-semibold text-white flex justify-center items-center`};
     margin-top:-40px;
    `;
const AddCartCloseWithTitle=styled.div`
    ${tw`flex`};
    
   
    `;
export {Cart,CartHideButton,CartItems,SubTotalWithCheckOutButton,AddCartOpen,NumberOfCartItems,AddCartClose,CartTitle,AddCartCloseWithTitle};