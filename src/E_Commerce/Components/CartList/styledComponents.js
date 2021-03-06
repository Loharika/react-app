import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const DisplayCartList=styled.div`
  ${tw`flex w-full  items-center flex-col flex-1 overflow-y-auto`};
  border-top:${props=>props.cartItemsNumber>0?'1px solid white':'none'};
  justify-content:${props=>props.cartItemsNumber>0?'flex-start':'center'};
  margin-left:15px;
  
`;
const DisplayAddItemsText=styled.div`
  ${tw``};
`;
export {DisplayCartList,DisplayAddItemsText};