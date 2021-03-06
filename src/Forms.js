//Form.js
import React, { Component } from 'react';
import allForms from './allForms.js';

import Form from './Form.js';

class Forms extends Component {
    render() {
        return (
            <section className="forms wrapper">
                {allForms.map((form) => {
                    return (
                        <fragment>
                            <Form form={form} label={form.label} cathegory={form.cathegory} id={form.id} name={form.name} changeScore={this.props.changeScore} />
                        </fragment>
                    )
                })}
            </section>
        );
    }
}

export default Forms;