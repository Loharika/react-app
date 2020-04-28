import styled from '@emotion/styled';
import tw from 'tailwind.macro';
const CartItemDisplay=styled.div`
  ${tw`flex justify-between w-full items-center `};
  border-bottom:1px solid white;
`;

const CartDetailsWithImage=styled.div`
  ${tw`flex justify-start items-center py-2`};
`;
const CartItemImage=styled.img`
  ${tw`w-12 h-16`}
`;
const CartItemDetails=styled.div`
  ${tw``}
`;
const CartItemStyle=styled.div`
  ${tw``};
  color:#7c828c;
  font-size:13px;
`;
const CartItemTitle=styled.div`
  ${tw``};
`;
const CartItemQuantity=styled.div`
  color:#7c828c;
  font-size:13px;
`;
const RemoveButtonWithPrice=styled.div`
  ${tw`flex h-full justify-between items-end flex-col py-2`};
`;
const RemoveCartItem=styled.button`
  ${tw`text-black p-1`};
  
`;
const CartItemPrice=styled.div`
  ${tw``};
  font-size:14px;
  color:#cc7a00;
`;
export {CartItemDisplay,CartItemStyle,CartItemTitle,CartDetailsWithImage,CartItemImage,CartItemDetails,CartItemQuantity,
  RemoveButtonWithPrice,RemoveCartItem,CartItemPrice
};
