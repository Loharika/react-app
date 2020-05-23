import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ProductsDashboard=styled.div`
    ${tw`flex w-screen pl-10 bg-white  `};
    margin-right:60px;
    
`;
const AvailableSizes_SignOutButton=styled.div`
    ${tw`w-1/5  h-auto flex-wrap bg-white pt-5  w-auto`};
    border:2px solid white;
    
    `;
    
const SignOutButton=styled.button`  
    ${tw`text-gray-800 py-1 px-2 m-2 ml-3 border border-gray-800 rounded `};
    font-size:14px;
   
`;
const ProductListDisplay_Header=styled.div`
    ${tw`w-4/5 h-auto bg-white pt-10 mr-4 pl-2 ml-3 `};
    border:2px solid white;
`;

const ProductsPageStyle=styled.div`
    ${tw`flex relative `};
`;
export {AvailableSizes_SignOutButton,ProductsDashboard,SignOutButton,ProductListDisplay_Header,ProductsPageStyle};