
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const CheckMark=styled.span`
    color:green;
    `;
const ToasterDisplay=styled.div`
    ${tw`flex justify-center items-center  `};
    background-color: '#d69e2e';
    color:'white';
    
`;
const ToasterInfo=styled.div`
    ${tw``};
`;
export {CheckMark,ToasterDisplay,ToasterInfo};