import React, {Component} from 'react';
import {_isEmpty, companyName} from "./defaultFields/Const";
import RestClient from "./RestClient";

//TODO УДАЛИТЬ ДОБАВЛЕНИЕ PROPS В ЭТОТ КЛАСС
class AddNewElement extends Component {
    constructor(props) {
        super(props);
        this.restClient = new RestClient();
        this.state = {
            formData: [],
            newFormData: [],
        };
        this._updateShowingForms();
    }

    showValues = (e) => {
        this._updateShowingForms();
        const selectBox = e.target;
        let selectedIndex = selectBox.selectedIndex;
        this.restClient.getMainFormByID(selectedIndex + 1).then(elem => {
            this.props.setFromData(elem, selectBox.selectedIndex)
        });
    };

    _updateShowingForms() {
        this.restClient.getMainForms().then((newFormData) => {
            this.setState({...this.state, newFormData})
        });
    }

    render() {
        let newFormData = this.state.newFormData;
        this.state.newFormData = [];
        return (
            <div>
                <select className='my_select' id="selectBox" onChange={this.showValues} multiple>
                    {newFormData.map(el => <option>{el[companyName]}</option>)}
                </select>
            </div>
        )
    }
}

export default AddNewElement;
