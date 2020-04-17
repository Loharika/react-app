import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const GridCell=styled.button`
    ${tw`flex w-full h-full justify-center items-center`};
    background-color:#586d8d;
`;
const WrongCell=styled.div`
    ${tw`flex h-full w-full`};
    background-color:red;
    transition:all .2s;
    transform:scale(1);
`;
const DisplayHidden=styled.div`
    ${tw`flex h-full w-full`};
    background-color:${props=>props.theme!=='LIGHT'?'#38a169':'#90cdf4'};
    width:${props=>props.animate?'100%':'0%'};
    height:${props=>props.animate?'100%':'0%'};
    transition:all 0.4s;
    tranform:${props=>props.animate?'scale(1)':'scale(0)'}
    `;
const GridGameField=styled.div`
    display:grid;
    grid-template-columns: repeat(${props=>props.gridColumns},minmax(0, 1fr));
    width:${props=>props.width}px;
    height:${props=>props.width}px;
    gap: 7px;
    padding:20px;
`;
const GameResultStyle=styled.span`
    ${tw`my-2 `};
    color:green;
`;
const GameResultPage=styled.span`
    ${tw`flex flex-col justify-around items-center p-4 border-2 border-500-blue`};
    width:${props=>props.width}px;
    height:350px;
`;
const GameDashboard=styled.div`
    ${tw`flex flex-col`}
    align-self:center;
    width:${props=>props.width}px;
    width:${props=>props.isGameCompleted?props.widthByTopLevel:props.widthByLevel}px
`;
const Game=styled.div`

    ${tw`w-screen h-screen flex justify-center items-center`}
    width:${props=>props.width}px;
    background-color:${props=>
    props.theme!=='LIGHT'?'':'#313d4e'};
    color:${props=>
    props.theme!=='LIGHT'?'black':'white'};
`;
const GridGameHeader=styled.div`
    ${tw`flex flex-col justify-between items-center px-2 py-3 font-bold`};
    background-color:${props=>
    props.theme!=='LIGHT'?'':'#313d4e'};
    color:${props=>
    props.theme!=='LIGHT'?'black':'white'};
`;
const ScoreAndThemeStyle=styled.div`
        ${tw`flex w-full justify-between items-center px-3 py-4 font-bold`};
`;
const ThemeChangeButtonStyle=styled.div`
     ${tw`flex font-bold mx-4 my-2 p-2 rounded`};
    border:${props=>
    props.theme!=='LIGHT'?'1px solid black':'1px solid white'};
`;
export {GridCell,WrongCell,DisplayHidden,GridGameField,GameResultStyle,GameResultPage,GameDashboard,Game,
    GridGameHeader,ScoreAndThemeStyle,ThemeChangeButtonStyle
};