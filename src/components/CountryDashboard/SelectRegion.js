import React from 'react';
class SelectRegion extends React.Component {
    onChange = (event) => {
        this.props.onChangeSelectedRegion(event.target.value);
    }
    render() {
        return <select onChange = { this.onChange }>
            <option>All</option>
            <option>Africa</option>
            <option>Americas</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
        </select>
    }
}
export { SelectRegion }