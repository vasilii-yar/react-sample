import React from "react";
import GridFilter from "./widgets/GridFilter";
import GridPanel from "./widgets/GridPanel";
import GridRecordsCount from "./widgets/GridRecordsCount";
import BaseGrid from "./widgets/BaseGrid";
import CardEditDialog from "./widgets/CardEditDialog";
import {doDelete, doGet, doPost, doPut} from "./api/rest-api";
import CardDeleteDialog from "./widgets/CardDeleteDialog";

export default class CardsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            changeCardDialogData: {},
            showCardDialog: false,
            showDeleteDialog: false,
            rowOnPage: 10,
            selectedCard: null,
            editDialogHeader: ""
        };
        this.toggleCardDialog = this.toggleCardDialog.bind(this);
        this.toggleDeleteDialog = this.toggleDeleteDialog.bind(this);
        this.updateGrid = this.updateGrid.bind(this);
        this.setTableRowCount = this.setTableRowCount.bind(this);
        this.filterTableDate = this.filterTableDate.bind(this);
        this.setSelectedCard = this.setSelectedCard.bind(this);
        this.addCard = this.addCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
        this.updateCard = this.updateCard.bind(this);
    }

    componentDidMount() {
        this.getCardContent();
    }

    getCardContent() {
        doGet('/api/cards')
            .then((data) => {
                this.setState({
                    cards: data._embedded.cards
                });
            });
    }

    toggleCardDialog(header) {
        if (header === "Edit card") {
            if (!this.state.selectedCard) {
                window.alert("You should choose one record!");
                return;
            }
            doGet(this.state.selectedCard).then((response) => {
                this.setState({
                    changeCardDialogData: response
                })
            });
        }
        this.setState({
            showCardDialog: !this.state.showCardDialog,
            editDialogHeader: header
        });
    }

    toggleDeleteDialog() {
        if (this.state.selectedCard) {
            this.setState({
                showDeleteDialog: !this.state.showDeleteDialog
            });
        } else {
            window.alert("You should choose one record!");
        }
    }

    updateGrid() {
        this.getCardContent();
    }

    setTableRowCount(num) {
        this.setState({
            rowOnPage: num
        });
    }

    setSelectedCard(cardId) {
        this.setState({
            selectedCard: cardId
        })
    }

    filterTableDate(filter) {
        const serialNum = filter.serialNumber;
        const status = filter.status;
        const authDate = filter.authorization;
        const phone = filter.phoneNumber;

        doGet('/api/cards')
            .then((data) => {
                const allCards = data._embedded.cards.filter((value) => {
                    let matchSn = (serialNum === "") ? true : value.serialNum == serialNum;
                    let matchStatus = (status === "") ? true : value.status === status;
                    let matchAuthDate = (authDate === "") ? true : value.authorization.indexOf(authDate) !== -1;
                    let matchPhone = (phone === "") ? true : value.phoneNumber.indexOf(phone) !== -1;

                    return matchSn && matchStatus && matchAuthDate && matchPhone;
                });
                this.setState({
                    cards: allCards
                });
            });
    }

    addCard(card) {
        doPost("/api/cards", card, this.updateGrid)
            .then((responseJson) => {
                console.log(responseJson);
            });
        this.toggleCardDialog();
    }

    deleteCard() {
        let cardId = this.state.selectedCard;
        if (cardId) {
            doDelete(cardId, this.updateGrid);
            this.setState({
                selectedCard: null
            })
        } else {
            window.alert("You should choose one record!");
        }
        dropSelectedItems();
    }

    updateCard(changedCard) {
        let cardId = this.state.selectedCard;
        if (cardId) {
            doPut(cardId, changedCard, this.updateGrid);
        } else {
            window.alert("You should choose one record!");
        }
    }

    render() {
        return (
            <div>
                <div className="element">
                    <GridFilter applyFilter={this.filterTableDate}/>
                </div>
                <div className="element">
                    <GridPanel pager={<GridRecordsCount setTableRowCount={this.setTableRowCount}/>}
                               table={<BaseGrid data={this.state.cards} rowOnPage={this.state.rowOnPage}
                                                setCard={this.setSelectedCard}/>}
                               showDialog={this.toggleCardDialog}
                               showDeleteDialog={this.toggleDeleteDialog}/>
                </div>
                <CardEditDialog isOpen={this.state.showCardDialog} header={this.state.editDialogHeader}
                                toggle={this.toggleCardDialog} dialogData={this.state.changeCardDialogData} saveChangedCard={this.updateCard} addCard={this.addCard}/>
                <CardDeleteDialog isOpen={this.state.showDeleteDialog} toggle={this.toggleDeleteDialog}
                                  deleteCard={this.deleteCard}/>
            </div>
        );
    }
}

function dropSelectedItems() {
    let element = document.getElementById("selecting-row");
    element.id = "";
}