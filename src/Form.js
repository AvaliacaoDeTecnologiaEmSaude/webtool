//Form.js
import React, { Component } from 'react';
import allForms from './allForms.js';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            formLabel: "",
        };
    }
    render() {
        
        return (
            <section className="forms wrapper">
                {allForms.map((form) => {
                    this.state.formLabel = form.label;
                    return (
                        <form>
                            <p><label for={form.label} className="formLabel">{form.name}</label>
                            </p>
                            {form.options.map((option) => {
                                return (
                                    <fragment>
                                        <input type="radio" name={this.state.formLabel} value={option.value} />
                                        <label for={option.value}>{option.name}</label><br></br>
                                    </fragment>
                                )
                            })
                            }
                        </form>
                    )
                })}
            </section>
        );
    }
}

export default Form;