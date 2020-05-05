'use strict';

// Компоненту BaseGrid необходимо задать props data
import {MDBDataTable} from 'mdbreact';

const React = require('react');
const ReactDOM = require('react-dom');
const TABLE_HEADERS = [
    {
        label: "Serial number",
        field: "serialNum",
        sort: "asc",
        width: 100
    },
    {
        label: "Currency Logo",
        field: "currencyLogo",
        sort: "asc",
        width: 100
    },
    {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 100
    },
    {
        label: "Authorization date",
        field: "authorization",
        sort: "asc",
        width: 150
    },
    {
        label: "Phone Number",
        field: "phoneNumber",
        sort: "asc",
        width: 150
    },
    {
        label: "Deadline",
        field: "deadline",
        sort: "asc",
        width: 150
    },
    {
        label: "Subject name",
        field: "subjectName",
        sort: "asc",
        width: 200
    },
    {
        label: "Inventory number",
        field: "inventoryNum",
        sort: "asc",
        width: 150
    }
];

const selectedState = {
    selectedItem: null,
    id: null
}

export default class BaseGrid extends React.Component {
    constructor(props) {
        super(props);
        this.rowClickHandler = this.rowClickHandler.bind(this);
    }

    rowClickHandler(event, id) {
        let target = event.currentTarget;
        let selected = selectedState.selectedItem;
        let itemId = selectedState.id;

        if (target === selected) {
            selected.id = "";
            selectedState.selectedItem = null;
            selectedState.id = null;
            this.props.setCard(null);
            return;
        }
        if (selected)
            selected.id = "";

        target.id = "selecting-row";
        selectedState.selectedItem = target;
        selectedState.id = id;
        this.props.setCard(id);
    }

    render() {
        const cards = this.props.data.map((item) => {
            item.clickEvent = (e) => this.rowClickHandler(e, item._links.self.href);
            return item;
        });
        const tableData = {
            columns: TABLE_HEADERS,
            rows: cards
        };

        return (
            <MDBDataTable
                theadTextWhite
                theadColor="primary-color"
                noBottomColumns={true}
                bordered
                small
                data={tableData}
                searching={false}
                displayEntries={true}
                hover
            />
        );
    }
}

