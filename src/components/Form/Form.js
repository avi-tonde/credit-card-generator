import React, { useState } from 'react';
import './form.css'

export default function Form() {
    const [formValues, setFormValues] = useState({});
    const [inputError, setInputError] = useState({});


    const onChangeForm = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
        console.log(formValues);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputError(validate(formValues));
    }
    const validate = (data) => {
        const errors = {};

        if (!data.cardHolderName || data.cardHolderName.length < 3) {
            errors.name = "Cardholder Name is Required";
        }
        if (!data.cardNumber || data.cardNumber.length !== 16) {
            errors.cardNum = "Enter Valid 16 digit Card Number";
        }
        if (!data.mm || data.mm > 12 || !data.yy) {
            errors.expDate = "Enter Valid Exp. Date";
        }
        if (!data.cvv || data.cvv.length !== 3) {
            errors.cvv = "Enter Valid 3 Digit CVV";
        }
        return errors;

    }


    return (

        <form onSubmit={handleSubmit}>
            <div className="inputBox">
                <span>CardHolder Name</span>
                <input type="text" placeholder="Mr. Ben" onChange={onChangeForm} name="cardHolderName" />
                <p className="error">{inputError.name}</p>
            </div>
            <div className="inputBox">
                <span>Card Number</span>
                <input type="number" placeholder="1234 5678 9123 0000" onChange={onChangeForm} name="cardNumber" />
                <p className="error">{inputError.cardNum}</p>
            </div>
            <div className="flexBox">
                <div className="inputBox">
                    <span>EXP.DATE (MM/YY)</span>
                    <div className="flexBox">
                        <input className="expDate" type="number" name="mm" onChange={onChangeForm} placeholder="MM" />
                        <input className="expDate" type="number" name="yy" onChange={onChangeForm} placeholder="YY" />
                    </div>
                    <p className="error">{inputError.expDate}</p>
                </div>

                <div className="inputBox">
                    <span>CVV</span>
                    <input type="number" placeholder="CVV" onChange={onChangeForm} name="cvv" />
                    <p className="error">{inputError.cvv}</p>
                </div>

            </div>

            <input type="submit" value="submit" className="submitBtn" />

        </form>
    )
}
