import React from 'react';
import {withRouter} from "react-router-dom";
import Greetings from './greetings.js'
import FavouriteDessert from './favouriteDessert.js'
import VisitedCities from './visitedCities.js'
import YourState from './states.js'
import DisableButton from './disabledButton.js'
class Components extends React.Component {
    constructor(props) {
    super(props);
    this.state = {link:''};
  }
  componentDidMount() {
      let linkName=this.props.match.params;
      this.setState(()=>({
        link:linkName.formName
      }));
  }
    render() {
    const link=this.state.link;
    const components = {
          ':greetings': <Greetings history={this.props.history}/>,
          ':favouriteDessert': <FavouriteDessert history={this.props.history} />,
          ':visitedCities':<VisitedCities history={this.props.history} />,
          ':yourState':<YourState history={this.props.history}/>,
          ':disableButton':<DisableButton history={this.props.history}/>
      };
    return (  
        <div>
            {components[link]}
        </div>
      );
  }
}
export default withRouter(Components);