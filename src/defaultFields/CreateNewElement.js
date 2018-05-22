import React, {Component} from "react";
import styles from '../styles.css'
import {jsonSchema, uiSchema} from './Const'
import Form from "react-jsonschema-form";
import SplitPane from 'react-split-pane';
import {builderSchema} from "./Storage";
import RestClient from "../RestClient";

class TestElements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: undefined,
            formData: undefined,
            standardForm: <span/>,
        };
        this.restClient = new RestClient()
    }

    flag = false;

    // TODO I can't throw event.fromData to App.js
    onSubmit(event) {
        let id = this.state.id;
        this.state.id = undefined;
        this.state.formData = undefined;
        this.flag = false;
        if (id === undefined) this.restClient.post(event.formData);
        else this.restClient.postByID(event.formData, id);
        this.props.setFromData(event, id); //TODO удалить setFromData?
    }

    _setSchemaInForm(schema) {
        let form = <span/>;
        if (schema !== undefined) form = (<Form className="standardForm"
                                                schema={schema}
                                                onError={console.log("errors")}/>);
        return (form)
    }

    _check(event) {
        let formData = event.formData;
        let standard = event.formData["standard"];
        let newSchema = builderSchema(standard).getSchema();
        this.setState({
            ...this.state,
            standardForm: this._setSchemaInForm(newSchema),
            formData
        });
    }

    render() {
        if (this.state.formData !== this.props.formData && this.state.id !== this.props.id && this.flag) {
            this.state.id = this.props.id;
            let FM = this.props.formData;
            //TODO в толковом словаре Даля под определение слова костыль картинка этого кода(lodash, возвращать с бека undefined)
            Object.keys(this.props.formData).forEach(key => {
                    if (FM[key] === null) FM[key] = undefined
                }
            );
            this.state.formData = FM;
            this.state.formData = this.props.formData;
        } else this.flag = true;
        return (
            <SplitPane split="vertical" minSize={350}>
                <div><Form className="defaultForm"
                           formData={this.state.formData}
                           schema={jsonSchema}
                           uiSchema={uiSchema}
                           onChange={this._check.bind(this)}
                           onSubmit={this.onSubmit.bind(this)}
                           onError={console.log("errors")}/></div>
                <div>{this.state.standardForm}</div>
            </SplitPane>

        )
    }
}

export default TestElements;
