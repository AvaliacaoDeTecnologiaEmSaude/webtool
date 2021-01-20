//Form.js
import allForms from './allForms.js';

const Form = () => {
    return (
        <section className="forms wrapper">
            {allForms.map((form) => {
                return (
                    <form>
                        <p><label for={form.label} className="formLabel">{form.name}</label>
                        </p>
                        {form.options.map((option) => {
                            return (
                                <fragment>
                                    <input type="radio" name="" value={option.value} />
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

export default Form;