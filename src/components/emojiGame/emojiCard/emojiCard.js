import React from 'react';
import {EmojiCardComponent,Image} from '../../styleComponents/styleComponents.js';
function EmojiCard(props){
        return (
            <EmojiCardComponent onClick={()=>props.onEmojiClick(props.emojiData.id)}  theme={props.selectedTheme} >
                <Image  src={props.emojiData.image} alt={props.emojiData.name}/>
                <span theme={props.selectedTheme}>{props.emojiData.name}</span>
            </EmojiCardComponent>
            );
}
export default EmojiCard;