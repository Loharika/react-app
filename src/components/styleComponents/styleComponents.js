import styled from '@emotion/styled';
import tw from 'tailwind.macro';
const EmojiCardComponent=styled.div`
    ${tw`px-3 py-4 font-bold flex flex-col justify-around items-center mx-3 my-3 md:w-1/4
    `};
    background-color:${props=>
    props.theme==='Light Mode'?'white':'#2b6cb0'};
    color:${props=>
    props.theme==='Light Mode'?'black':'white'};
    box-shadow:0 3px 6px #999;
    border-radius:2px;
`;
const Image= styled.img`
    width:80%;
    height:80%;
`;
const EmojiCardsList=styled.div`
    ${tw`flex w-full flex-wrap`};
    justify-content:space-evenly;
    background-color:${props=>
    props.theme==='Light Mode'?'#ebf4ff':'#1a202c'};
    color:${props=>
    props.theme==='Light Mode'?'black':'white'}
`;
const EmojiGameComponent=styled.div`
    ${tw`flex flex-col w-full`};
    min-height:100vh;
    flex-grow:1;
    background-color:${props=>
    props.theme==='Light Mode'?'white':'#1a202c'};
    color:${props=>
    props.theme==='Light Mode'?'black':'white'}
`;
const FooterComponent=styled.div`
${tw`px-3 py-4 font-bold`};
    margin-bottom:auto;
    background-color:${props=>
    props.theme==='Light Mode'?'white':'#2d3748'};
    color:${props=>
    props.theme==='Light Mode'?'black':'white'};
`;

const ParagraphComponentPlay=styled.p`
    ${tw`pl-3 text-2xl`};
    color:${props=>
    props.theme==='Light Mode'?'black':'white'}
`;
const ParagraphComponent=styled.p`
    ${tw`pl-5 `};
    color:${props=>
    props.theme==='Light Mode'?'black':'white'}
`;

const HeaderComponent=styled.div`
    ${tw`flex justify-between items-center px-3 py-4 font-bold`};
    background-color:${props=>
    props.theme==='Light Mode'?'white':'#2d3748'};
    color:${props=>
    props.theme==='Light Mode'?'black':'white'};
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
`;
const ThemeChangeButton=styled.button`
    ${tw`flex font-bold mx-4 my-2 py-2 px-4 rounded`};
    color:${props=>
    props.theme==='Light Mode'?'black':'white'};
    border:${props=>
    props.theme==='Light Mode'?'1px solid black':'1px solid white'};
`;
const SpanComponentForTitle=styled.span`
    ${tw`pl-5 text-xl`};
    color:${props=>
    props.theme==='Light Mode'?'black':'white'}
`;
const SpanComponent=styled.span`
    ${tw`mx-4 my-2`};
    color:${props=>
    props.theme==='Light Mode'?'black':'white'}
`;
const WinOrLoseComponent=styled.div`
    ${tw`w-full flex flex-col justify-center items-center px-3 py-4 font-bold`};
    background-color:${props=>
    props.theme==='Light Mode'?'#ebf4ff':'#2b3945'};
    color:${props=>
    props.theme==='Light Mode'?'black':'white'};
    flex-grow:1;
`;
const GameScore=styled.span`
    ${tw`text-3xl my-2`};
`;
const WinOrLoseResult=styled.span`
    ${tw`text-3xl my-2`};
    color:${props=>
    (props.gameState==='Win')?'green':'red'}
`;
const ButtonComponent=styled.button`
    ${tw`bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 border border-blue-700 rounded`};
`;
const ScoreBoardComponent=styled.div`
    ${tw`flex items-center`};
`;
const CountriesList=styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
`;
const EachCountryCard=styled.div`
    height:400px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin:2%;
    padding-bottom:15px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-top-left-radius: 10px 10px;
    border-top-right-radius: 10px 10px;
    width:180px;
`;
const CountryFlagImage=styled.img`
    width:100%;
    height:50%;
    border-top-left-radius: 10px 10px;
    border-top-right-radius: 10px 10px;
    object-fit:cover;
`;
const ShowDetails=styled.div`
padding-top:10px;
padding-bottom:10px;
background-color:${props=>
props.theme==='Light Mode'?'white':'#2b3945'};
color:${props=>
props.theme==='Light Mode'?'black':'white'}
`;
const ButtonElement=styled.button`
    border:none;
    border-radius:2px;
  text-align: center;
  text-decoration: none;
  padding:10px 15px;
  font-size: 13px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.05), 0 6px 20px 0 rgba(0,0,0,0.19);
  margin:0.5%;
  background-color:${props=>
props.theme==='Light Mode'?'white':'#2b3945'};
color:${props=>
props.theme==='Light Mode'?'black':'white'}
`
const ImageElement=styled.img`
width:100%;
height:100%;
`;
const ButtonElementDiv=styled.div`
    ${tw`p-3 self-start`};
`;
const TotalCountryData=styled.div`
    ${tw`w-full flex ml-5 justify-around`};
`;
const FlagImage=styled.div`
    ${tw`w-1/5 flex justify-center items-center flex-col`};
`;
const CountryDetails=styled.div`
    ${tw`w-3/5`};
`;
const CountryDetailsWithoutBorderDetails=styled.div`
    ${tw`flex flex-col`};    
`;
const CountryName=styled.div`
    ${tw`text-2xl m-3 font-bold`};    
`;
const EachDetailAboutCountry=styled.div`
    ${tw`flex justify-between`};    
`;
const EachDetail=styled.div`
    ${tw`flex mb-3`};    
`;
const BorderCountries=styled.div`
    ${tw`px-2`};    
`;
const CountryDetailsHeading=styled.div`  
    ${tw`font-bold`};
`;
const CountryBorderButtons=styled.div`
    ${tw`flex flex-wrap`};
`;
const CovidGraphTitle=styled.h1`
    ${tw`text-3xl font-bold`};
`;
const CountryCardDetails=styled.div`
    margin-left:5%;
    margin-right:10%;
`;
const CountryCardTitle=styled.div`
    ${tw`py-5`}
    font-weight:bold;
`;
const SearchBarContinentList=styled.div`
    margin-top:10px;
    margin-bottom:10px;
    padding-right:10px;
    padding-left:10px;
    display: flex;
    justify-content:space-between;
    align-items:center;
`;
const CountryHeaderComponent=styled.div`
    ${tw`flex justify-between items-center px-5 py-6 font-bold`}
    background-color:${props=>
    props.theme==='Light Mode'?'white':'#2b3945'};
    color:${props=>
    props.theme==='Light Mode'?'black':'white'};
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
`;
const ThemeIcon=styled.img`
    filter:${props=>
    props.theme==='Light Mode'?'invert(0%)':'invert(100%)'}
`;
const HeaderTitle=styled.div`
    font-size:20px;
`;
const CountryThemeChangeButton=styled.button`
    ${tw`flex font-bold`};
    color:${props=>
    props.theme==='Light Mode'?'black':'white'}
`;
const SearchCountryComponent=styled.div`
    width:40%;
    display:flex;
    justify-content:center;
    align-items:center;
    border:none;
    border-radius:0px;
    margin-top:10px;
    margin-bottom:10px;
    background-color: white;
    box-shadow: 0 6px 16px 0 rgba(0,0,0,0.05), 0 6px 20px 0 rgba(0,0,0,0.19);
`;
const SearchIconComponent=styled.img`
    width:40px;
    height:40px;
`;
const SearchCountryInput=styled.input`
    overflow: hidden;
    flex-grow:1;
`;

export {EmojiCardComponent,Image,EmojiCardsList,EmojiGameComponent,FooterComponent,ParagraphComponentPlay,ParagraphComponent,HeaderComponent,ThemeChangeButton
    ,SpanComponent,SpanComponentForTitle,WinOrLoseComponent,WinOrLoseResult,GameScore,ButtonComponent,ScoreBoardComponent,CountriesList,EachCountryCard,CountryFlagImage,
    ShowDetails,ButtonElement,ImageElement,ButtonElementDiv,TotalCountryData,FlagImage,CountryDetails,CountryDetailsWithoutBorderDetails
    ,CountryName,EachDetailAboutCountry,EachDetail,BorderCountries,CountryDetailsHeading,CountryBorderButtons,CovidGraphTitle,CountryCardDetails,CountryCardTitle,SearchBarContinentList,
    CountryHeaderComponent,ThemeIcon,HeaderTitle,CountryThemeChangeButton,SearchCountryComponent,SearchIconComponent,SearchCountryInput
};