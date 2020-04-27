import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const SubTotalDisplay=styled.div`
    ${tw`flex justify-between py-4 mx-3`};
`;
const SubTotalTitle=styled.span`
    ${tw``};
    color:#7c828c;
`;
const TotalAmount=styled.span`
    ${tw``};
    color:#cc7a00;
`;
export {SubTotalDisplay,SubTotalTitle,TotalAmount};