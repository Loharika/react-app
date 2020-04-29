import React from 'react';
import {withRouter} from 'react-router-dom';
import {inject,observer} from 'mobx-react';

import {EmojiCardsList,EmojiGameComponent} from '../../styleComponents/styleComponents.js';
import NavBar from '../navBar/navBar.js';
import Footer from '../footer/footer.js';
import EmojiCard from '../emojiCard/emojiCard.js';
import WinOrLose from '../winOrLose/winOrLose.js';

const url='https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/';
let emojis=[];
const emojisNames=['Exploding Head','Grinning Face with Sweat','Smiling Face with Heart Eyes','Smirking Face','Thinking Face','Winking Face','Grinning Face',
'Crying Face','Astonished Face','Face with Tears of Joy','Star Stuck','Winking Face with Tongue'];
emojisNames.forEach((emoji,index)=>{
    emojis.push({id:index,isClicked:false, name:emoji, image:url+`memoji-${index+1}.png`});
});

@inject('themeStore')
@observer
class EmojiGame extends React.Component{
    constructor(props){
        super(props);
        this.state={
            score:0,
		    topScore:0,
		    emojis:emojis,
		    gameState:'PLAYING'//PLAYING WIN Lose
        };
         
    }
    onEmojiClick=(id)=>{
        let indexValue;
        this.state.emojis.forEach((each,index) =>{
            if(this.state.emojis[index].id===id){
                indexValue=index;
            }
        }
        );
        if(!this.state.emojis[indexValue].isClicked){
            this.state.emojis[indexValue].isClicked=true;
            
            this.setState({gameState:'PLAYING'});
            this.incrementScore();
            this.shuffleEmojis();
        }
        else{
            this.setState({
                gameState:this.state.score===12?'Win':'Lose'
            });
        }
    }
    shuffleEmojis=()=>{
        let emojisCardsArray=this.state.emojis;
        let emojisArrayLength = emojisCardsArray.length, temp, index;
        while (emojisArrayLength > 0) {
            index = Math.floor(Math.random() * emojisArrayLength);
            emojisArrayLength--;
            temp = emojisCardsArray[emojisArrayLength];
            emojisCardsArray[emojisArrayLength] = emojisCardsArray[index];
            emojisCardsArray[index] = temp;
        }
        
    }
    incrementScore=()=>{
            this.setState({
                score:this.state.score+1,
            });
            if((this.state.score===11)){
                this.setState({
                    gameState:'Win',
            });
            }
                
    }
    onPlayAgainClick=()=>{
        this.setTopScore();
        this.setState({score:0,
            gameState:'PLAYING'
        });
    }
    resetGame=()=>{
        let cards=this.state.emojis;
        let resetedEmojiCards=cards.map(emoji=>{
            emoji.isClicked=false;
            return emoji;
        });
        this.setState({emojis:resetedEmojiCards});
    }
    setTopScore=()=>{
        this.state.topScore=this.state.score>this.state.topScore?this.state.score:this.state.topScore;
        this.resetGame();
    }
    displayEmojis=()=>{
    const allEmojiCards=this.state.emojis.map(emoji=>{
      return (
        <EmojiCard emojiData={emoji} key={emoji.id} onEmojiClick={this.onEmojiClick} selectedTheme={this.props.themeStore.selectedTheme}/>
        );
        });
    return allEmojiCards;
    }
    render(){
        return (
            <EmojiGameComponent gameState={this.state.gameState}>
                <NavBar selectedTheme={this.props.themeStore.selectedTheme} score={this.state.score} topScore={this.state.topScore} onChangeTheme={this.props.themeStore.updateCurrentTheme}/>
                {(this.state.gameState==='PLAYING')?
                    <EmojiCardsList theme={this.props.themeStore.selectedTheme} gameState={this.state.gameState}>
                        {this.displayEmojis()}
                    </EmojiCardsList>:
                    <WinOrLose gameState={this.state.gameState} score={this.state.score} selectedTheme={this.props.themeStore.selectedTheme} onPlayAgainClick={this.onPlayAgainClick}/>
                }
                <Footer selectedTheme={this.props.themeStore.selectedTheme} />
            </EmojiGameComponent>
            );
    }
}
export default withRouter(EmojiGame);