import React from 'react';
import {observer} from 'mobx-react';

import {ResetButton} from './styledComponents';

@observer
class ResetGame extends React.Component{
    render(){
        const {resetGame,theme}=this.props;
        return(
            <div><ResetButton onClick={resetGame} theme={theme}>Reset Game</ResetButton></div>
            );
    }
        
}
export default ResetGame;