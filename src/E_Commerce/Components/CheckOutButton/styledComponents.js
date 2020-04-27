import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const CheckOutButtonStyle=styled.button`
  ${tw`bg-black text-white py-2 px-4 rounded mx-3 `};
  margin-bottom:30px;
  opacity:${props=>props.noOfProductsInCart>0?'1':'0.5'}
  `;
export {CheckOutButtonStyle};