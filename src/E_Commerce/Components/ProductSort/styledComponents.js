import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const DropDownComponent=styled.select`
    ${tw`p-2 bg-white border rounded`}
`;
const SortByStyleComponent=styled.div`
    ${tw``};
`;
const SelectOption=styled.option`
    display:${props=>props.displaySelect?'flex':'none'};
`;
export {DropDownComponent,SortByStyleComponent,SelectOption};