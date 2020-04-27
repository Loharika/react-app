import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ProductsDashboard=styled.div`
    ${tw`flex w-screen px-10 bg-white `};
    margin-right:60px;
`;
const AvailableSizes_SignOutButton=styled.div`
    ${tw`w-1/5  h-auto flex-wrap bg-white pt-5`}`;
const SignOutButton=styled.button`  
    ${tw`bg-white hover:bg-gray-100 text-gray-800  py-1 px-1 m-2 border border-gray-400 rounded `};
    font-size:16px;
`;
const ProductListDisplay_Header=styled.div`
    ${tw`w-4/5 bg-white pt-12`};
`;
const ProductsPageStyle=styled.div`
    ${tw`flex relative `};
`;
export {AvailableSizes_SignOutButton,ProductsDashboard,SignOutButton,ProductListDisplay_Header,ProductsPageStyle};