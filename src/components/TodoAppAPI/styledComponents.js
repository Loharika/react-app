import styled from '@emotion/styled';
import tw from 'tailwind.macro';
const AddTodoField=styled.div`
${tw`w-1/2 flex`}

`;
const AddTodoInputField=styled.input`
${tw`flex-grow w-full p-2 rounded border-2 border-grey-100`}
`;
const TodoListItem=styled.div`
${tw`flex items-center`}
    border: none;
    border-bottom: 3px solid #f5f5f5;
    border-radius: 2px;
    height: 30px;
    background-color: white;
    font-size: 10px;
    color: grey;
    padding:0px;
    margin:0px;
    min-width:50%;
`;
const StyledCheckBox=styled.input`
    ${tw``}
    background-color:lightgrey;
    width:20px;
    height:20px;
    border-radius:20px;
`;
const TodoInputField=styled.input`
    border: none;
    border-radius: 2px;
    font-size: 15px;
    flex-grow: 1;
    focus:border: 1px solid #e1e1e1;
    text-decoration:${props=>props.isCompleted?'line-through':'none'};
    text-align:center;
`;
const RemoveButton=styled.button`
    color:rgba(154, 154, 228,0.6);
    font-size:25px;
    width:30px;
    border:none;
`;
const TodoFooter=styled.div`
    ${tw`flex justify-between items-center`}
    min-width:50%;
`;
const FooterButtons=styled.button`
    border: none;
    background-color: white;
    color: #777777;
    font-size: 14px;
    padding-right: 30px;
    padding:5px 10px;
    hover:border:2px solid rgba(175, 47, 47, 0.5);
    hover:border-radius:10px;
`;
const DisplayActiveTodos=styled.span`

`;
const ButtonGroup=styled.div`
    display:flex;
    justify-content:center;
`;
const TodoAppStyle=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    background: #fff;
    box-shadow:
    0 1px 1px rgba(0,0,0,0.15),
    0 10px 0 -5px #eee,
    0 10px 1px -4px rgba(0,0,0,0.15),
    0 20px 0 -10px #eee,
    0 20px 1px -9px rgba(0,0,0,0.15);
    padding: 30px;
    width:75vw;
    margin-left:12%;
`;
const TodoTitle=styled.div`
    color: rgba(154, 154, 228,0.6); 
    font-size: 100px;
    text-align: center;
    font-weight: normal;
    margin-bottom: 2px;
`;
const TodoList=styled.div`
    width:50%;

`;
export {AddTodoField,AddTodoInputField,TodoListItem,StyledCheckBox,TodoInputField,RemoveButton,TodoFooter,FooterButtons,DisplayActiveTodos,
    ButtonGroup,TodoAppStyle,TodoTitle,TodoList
};