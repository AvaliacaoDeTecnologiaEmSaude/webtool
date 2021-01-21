//Form.js
import React, { Component } from 'react';
import allForms from './allForms.js';

import Form from './Form.js';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <section className="forms wrapper">
                {allForms.map((form) => {
                    const label = form.label;
                    const name = form.name;
                    return (
                        <Form form={form} label={label} name={name} changeScore={this.props.changeScore}/>
                    )
                })}
            </section>
        );
    }
}

export default Forms;