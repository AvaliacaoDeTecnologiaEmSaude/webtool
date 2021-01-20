//Form.js
import React, { Component } from 'react';
import allForms from './allForms.js';

import Form from './Form.js';

class Forms extends Component {
   

    render() {
        return (
            <section className="forms wrapper">
                {allForms.map((form) => {
                    const label = form.label;
                    const name = form.name;
                    return (
                        <Form form={form} label={label} name={name}/>
                    )
                })}
            </section>
        );
    }
}

export default Forms;