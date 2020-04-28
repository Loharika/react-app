import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const SignInFormPage=styled.div`
    ${tw`w-screen h-screen flex flex-col justify-center items-center `};
`;
const SignInFormStyle=styled.form`
    ${tw`bg-white  py-5 px-3 mb-4 flex flex-col items-center `}`;
const UserName=styled.input`
    ${tw`my-4  appearance-none border rounded w-3/4 py-2 text-gray-700  `}
`;
const Password=styled.input`
    ${tw`my-4  appearance-none border rounded w-3/4 py-2 text-gray-700 `}
`;
const ErrorStyle=styled.span`
    ${tw`text-red-500 text-xs italic`}
`;

const SignInButton=styled.button`
    ${tw`self-center bg-gray-800 hover:bg-grey-700 text-white py-2 px-16 rounded relative`};
    
`;
const SignFormTitle=styled.div`
    ${tw`text-black font-semibold self-start ml-8`}
`;
export {SignInFormStyle,SignFormTitle,UserName,Password,ErrorStyle,SignInButton,SignInFormPage};