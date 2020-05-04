import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const HeaderComponent=styled.div`
  ${tw`lg:flex w-full flex-grow  justify-between mb-5 mx-4 mt-4`}
`;
const DisplayNumberOfProducts=styled.div`
      ${tw`text-base m-4`};
`;
export {HeaderComponent,DisplayNumberOfProducts};