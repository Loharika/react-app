
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ProductsPageNumberStyle=styled.span`
   ${tw`flex w-full justify-end`}
    `;
    
const PreviousPageButton=styled.div`
    ${tw`flex justify-center items-center px-4 py-2 m-1`};
    background-color:black;
    color:white;
   
    cursor: ${props=>props.pageNumber===1?'not-allowed':'auto'};
    pointer-events:${props=>props.pageNumber===1?'none':'auto'};
`;
const NextPageButton=styled.div`
    ${tw`flex justify-center items-center px-4 py-2 m-1`};
    background-color:black;
    color:white;
    
    cursor: ${props=>props.pageNumber===props.totalPages?'not-allowed':'auto'};
    pointer-events:${props=>props.pageNumber===props.totalPages?'none':'auto'};
`;
const PageNumber=styled.button`
    ${tw`m-1 p-1`};
    border:1px solid #2d3748;
`;
export {ProductsPageNumberStyle,PreviousPageButton,NextPageButton,PageNumber}


//pointer-events:${props=>props.pageNumber===1?'none':'auto'};

////pointer-events:${props=>props.pageNumber===props.totalPages?'none':'auto'};

//#2d3748;