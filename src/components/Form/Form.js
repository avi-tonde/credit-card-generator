import React, { useState } from 'react';
import './form.css';
import Toast from '../Toast/Toast';



export default function Form({setCardValues}) {
    const [formValues, setFormValues] = useState({});
    const [inputError, setInputError] = useState({});
    const [toast, displayToast] = useState(false);


    const onChangeForm = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
        console.log(formValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        if (validate(formValues)) {
            setInputError(validate(formValues))
            return;
        }
        setInputError(validate(formValues));

        if (Object.keys(formValues).length >= 5) {
            setCardValues(formValues);
            displayToast(true);
            setTimeout(() => { displayToast(false) }, 1500);
        }
        return formValues;

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
        if (Object.keys(errors).length === 0) {
            return false;
            
          } else {
            return errors;
          }

    }


    return (
        <>

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

            <input type="submit" value="Confirm" className="submitBtn" />

        </form>
                { toast ? <Toast /> : ""}
        </>
    )
}
