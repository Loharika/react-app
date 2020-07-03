import React from 'react';
class SearchCountry extends React.Component {
    onChange = (event) => {
        this.props.onChangeSearchText(event.target.value);
    }
    render() {
        return <input onChange = { this.onChange } className = {this.props.selectedTheme==="Light Mode"?"bg-white border-solid border-black border":"bg-gray-800 border-solid border-white border"} type = "text" placeholder = "Search for a country..." />;
    }
}
export { SearchCountry }