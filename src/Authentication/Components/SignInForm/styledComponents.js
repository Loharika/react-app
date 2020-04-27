import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const SignInFormPage=styled.div`
    ${tw`w-screen h-screen flex flex-col justify-center items-center`};
`;
const SignInFormStyle=styled.form`
    ${tw`bg-white shadow-md rounded p-3  mb-4 flex flex-col items-center`}`;
const UserName=styled.input`
    ${tw`my-4 shadow appearance-none border rounded w-3/4 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
`;
const Password=styled.input`
    ${tw`my-4 shadow appearance-none border rounded w-3/4 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
`;
const ErrorStyle=styled.span`
    ${tw`text-red-500 text-xs italic`}
`;
const SignInButtonDiv=styled.div`
    ${tw`flex items-center justify-center w-3/4`}
`;

const SignInButton=styled.button`
    ${tw`self-center bg-gray-800 hover:bg-grey-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
`;
export {SignInFormStyle,UserName,Password,ErrorStyle,SignInButtonDiv,SignInButton,SignInFormPage};