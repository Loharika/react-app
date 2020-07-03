import React from 'react';
import { observer } from "mobx-react";

@observer
class Header extends React.Component {
    onChangeTheme = () => {
        this.props.onChangeTheme()
    }

    render() {
        return <div className={this.props.selectedTheme==="Light Mode"?"flex justify-between bg-white h-20 shadow-sm":"flex justify-between bg-gray-800 text-white h-20 shadow-sm"}>
            <button>Where in the world?</button>
            <button onClick={this.onChangeTheme} >{this.props.selectedTheme}</button>
        </div>
    }
}
export { Header }