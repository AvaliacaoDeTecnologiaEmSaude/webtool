//Form.js

const Form = (props) => {

    function changeScoreLocal(e) {
        console.log(e.currentTarget);
        props.changeScore(e.currentTarget.value);
    }
    
    return (
        <form>
            <p><label htmlFor={props.label} className="formLabel">{props.name}</label>
            </p>
            {props.form.options.map((option) => {
                return (
                    <fragment>
                        <input type="radio"
                            name={props.label}
                            value={[props.cathegory,props.id,option.value]}
                            onChange={changeScoreLocal}
                            />
                        <label htmlFor={option.value}>{option.name}</label><br></br>
                    </fragment>
                )
            })
            }
        </form>
    )
}

export default Form;