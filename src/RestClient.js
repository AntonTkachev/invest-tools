import React from 'react';

import axios from 'axios';

export default class RestClient extends React.Component {

    getMainForms() {
        return axios.get('http://localhost:8090/api/mainForms')
            .then(data => data.data._embedded.mainForms);
    }

    getMainFormByID(id) {
        return axios.get('http://localhost:8090/api/mainForms/' + id)
            .then(data => data.data);
    }

    post(newForm) {
        axios({
            method: 'post',
            url: 'http://localhost:8090/api/mainForms',
            data: newForm,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        }).then(function (response) {
            console.log(response);
        })
    }
}