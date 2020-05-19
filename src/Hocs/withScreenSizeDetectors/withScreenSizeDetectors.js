
import React from 'react';
import {observable,computed} from 'mobx';

function withScreenSizeDetectors(WrappedComponent){
    return class extends React.Component {
        state = { width: 0, height: 0 };

        componentDidMount() {
            this.updateWindowDimensions();
            window.addEventListener("resize", this.updateWindowDimensions);
        }

        componentWillUnmount() {
            window.removeEventListener("resize", this.updateWindowDimensions);
        }

        updateWindowDimensions = () => {
            this.setState({ width: window.innerWidth, height: window.innerHeight });
        };

        render() {
            
            return (
                <WrappedComponent
                    windowWidth={this.state.width}
                    windowHeight={this.state.height}
                />
            );
        }
    };
}
export default withScreenSizeDetectors;