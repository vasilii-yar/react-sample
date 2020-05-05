import React from "react";

export default class GridRecordsCount extends React.Component {
    constructor(props) {
        super(props);
        this.setRowCount = this.setRowCount.bind(this);
    }

    setRowCount(event) {
        const target = event.target;
        const value = target.selectedOptions[0].text;
        this.props.setTableRowCount(value);
    }
    render() {
        return (
            <div className="row">
                <select className="browser-default custom-select" id="countSelect" onChange={this.setRowCount}>
                    <option value="1">10</option>
                    <option value="2">20</option>
                    <option value="3">50</option>
                    <option value="4">100</option>
                </select>
            </div>
        );
    }
}