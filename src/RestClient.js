import React from 'react';

import axios from 'axios';

export default class RestClient extends React.Component {

    get(id) {
        axios.get('http://localhost:8090/api/mainForms/' + id)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    post(newForm) {
        axios({
            method: 'post',
            url: 'http://localhost:8090/api/mainForms',
            data: newForm,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
}