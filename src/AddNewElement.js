import React, {Component} from 'react';
import styles from './styles.css'
import {_isEmpty} from "./defaultFields/Const";
import RestClient from "./RestClient";

class AddNewElement extends Component {
    constructor(props) {
        super(props);
        this.restClient = new RestClient();
        this.state = {
            formData: [],
            newFormData: [],
        };
    }

    showValues = (e) => {
        const selectBox = e.target;
        let selectedIndex = selectBox.selectedIndex;
        this.restClient.getMainFormByID(selectedIndex + 1).then(elem => {
            this.props.setFromData(elem, selectBox.selectedIndex)
        });
    };

    _updateShowingForms() {
        //TODO чувствую из-за этого if не будет работать обновлениеё
        if (this.state.newFormData.length === 0) {
            this.restClient.getMainForms().then(newFormData =>
                this.setState({...this.state, newFormData})
            )
        }
    }

    render() {
        this._updateShowingForms();
        let formData = this.props.formData;
        if (_isEmpty(formData)) {
            let id = this.props.id;
            if (id !== undefined) this.state.formData[id] = formData;
            else this.state.formData[this.state.formData.length] = formData;
        }
        return (
            <div>
                <select className='my_select' id="selectBox" onChange={this.showValues} multiple>
                    {this.state.newFormData.map(el => <option>{el["CompanyName"]}</option>)}
                </select>
            </div>
        )
    }
}

export default AddNewElement;
