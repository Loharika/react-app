import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ProductTitle=styled.div`
    ${tw`flex-grow text-center my-2`}
`
const ProductCard=styled.div`
    ${tw`w-48 h-auto m-1 p-2 flex flex-col items-center justify-around bg-white hover:border`};
    `;
const ProductImage=styled.img`
    ${tw`w-9/12 border-3 `}
    `;
const InstallmentsCount=styled.div`
    ${tw`text-gray-500`}
`;
const ProductPrice=styled.div`
    ${tw``}
`;
const AddCartToButton=styled.button`
    ${tw`bg-gray-800 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow my-5 `}
`;
const Product=styled.div`
    ${tw``}
`
export {ProductTitle,ProductCard,ProductImage,InstallmentsCount,ProductPrice,AddCartToButton};