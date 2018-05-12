import React, {Component} from 'react';
import styles from './styles.css'
import {_isEmpty} from "./defaultFields/Const";
import RestClient from "./RestClient";

class AddNewElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: [],
        };
        this.restClient = new RestClient()
    }

    showValues = (e) => {
        const selectBox = e.target;
        let selectedIndex = selectBox.selectedIndex;
        let data = this.restClient.get(selectedIndex);
        console.log(data);
        let elem = this.state.formData[selectedIndex];
        this.props.setFromData(elem, selectBox.selectedIndex)
    };

    render() {
        let formData = this.props.formData;
        if (_isEmpty(formData)) {
            let id = this.props.id;
            if (id !== undefined) this.state.formData[id] = formData;
            else this.state.formData[this.state.formData.length] = formData;
        }
        return (
            <div>
                <select className='my_select' id="selectBox" onChange={this.showValues} multiple>
                    {this.state.formData.map(el => <option>{el["CompanyName"]}</option>)}
                </select>
            </div>
        )
    }
}

export default AddNewElement;
