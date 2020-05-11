import React from 'react';
import {observer} from 'mobx-react';

import {NameSearchComponent,SearchFieldComponent,SearchFieldLabel} from './styledComponent.js';


@observer
class SearchByName extends React.Component{
    
    render(){
        const {onChange,onKeyDown,searchInput}=this.props;
        return (
            <SearchFieldComponent>
                <SearchFieldLabel htmlFor='searchInput'>Search Name: </SearchFieldLabel>
                <NameSearchComponent type='text' data-testid="searchInput" defaultValue={searchInput} placeholder='Search Name' onChange={onChange} onKeyDown={onKeyDown}/>
            </SearchFieldComponent>
            );
    }
}
export default SearchByName;