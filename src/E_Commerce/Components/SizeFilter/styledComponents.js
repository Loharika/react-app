import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ProductSizeButton=styled.button`
    ${tw` font-semibold py-2 px-2 w-10 h-10  border border-gray-400 m-1 flex justify-center items-center`};
    border-radius:50%;
    background-color:${props=>props.isSelected?'#2d3748':'white'};
    color:${props=>props.isSelected?'white':'#2d3748'};
`;
const SizeFilterButtonDisplay=styled.div`
    ${tw`flex flex-wrap`};
`;
export {ProductSizeButton,SizeFilterButtonDisplay};