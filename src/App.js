import React, {Component} from 'react';
import '@blueprintjs/core/dist/blueprint.css';
import './fixup.css';
import {Form} from './subschema';
import loader from './loader';

const schema = {
    schema: {
        "username": {
            type: "Text",
            template: {
                template: 'Icon',
                icon: 'pt-icon-person'
            }
        },
        "password": {
            "template": {
                "template": "Icon",
                "icon": "pt-icon-lock"
            }
        }
    },
    fieldsets: [
        {
            fields: 'username,password',
            className: 'pt-control-group pt-vertical',
            buttons: [{
                label: "Login",
                buttonsClass: " ",
                className: "pt-button pt-large pt-intent-primary"
            }]
        }
    ]
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <div style={{width: 600}}>
                    <Form loader={loader} schema={schema}/>
                </div>
            </div>
        );
    }
}

export default App;
