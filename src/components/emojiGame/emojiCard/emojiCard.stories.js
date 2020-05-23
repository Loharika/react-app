import React from 'react';

import EmojiCard from './emojiCard.js';


export default {
    title:'Cards/EmojiCard',
    component:EmojiCard
};

const card={id:1,isClicked:false, name:'Thinking Face', image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png'}

export const emojiCard = () => <EmojiCard emojiData={card}/>
