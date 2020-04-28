import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ProductSizeButton=styled.button`
    ${tw` py-2 px-2 w-10 h-10  m-1 flex justify-center items-center`};
    border-radius:50%;
    background-color:${props=>props.isSelected?'#2d3748':'#edf2f7'};
    color:${props=>props.isSelected?'white':'#2d3748'};
`;
const SizeFilterButtonDisplay=styled.div`
    ${tw`flex flex-wrap`};
`;
const SizesTitle=styled.div`
     ${tw`text-black font-semibold self-start m-2`}
    `;
const SizeFilterStyledComponent=styled.div`
    ${tw`flex flex-col ml-8 w-auto`}
    `;
export {ProductSizeButton,SizeFilterButtonDisplay,SizesTitle,SizeFilterStyledComponent};