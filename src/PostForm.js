import React from 'react';

import axios from 'axios';

export default class PostForm extends React.Component {

    get() {
        axios.get('http://localhost:8090/api/mainForms/1')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    post() {
        axios.post('http://localhost:8090/api/mainForms', {
            name: 'Anton'
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
}