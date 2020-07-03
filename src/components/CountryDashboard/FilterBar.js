import React from 'react';
import { SearchCountry } from './SearchCountry'
import { SelectRegion } from './SelectRegion'
class CountriesFilterBar extends React.Component {
    render() {
        return <div className="flex justify-between m-5">
            <SearchCountry onChangeSearchText={this.props.onChangeSearchText} selectedTheme={this.props.selectedTheme}/>
            <SelectRegion onChangeSelectedRegion={this.props.onChangeSelectedRegion}/>
        </div>
    }
}
export { CountriesFilterBar }