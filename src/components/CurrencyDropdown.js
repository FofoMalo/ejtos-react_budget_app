import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';


const CurrencyDropdown = (props)=> {
    const {currency} = useContext (AppContext);
    const [newCurrency, setNewCurrency ] = useState (currency);
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        setNewCurrency (event.target.value);
        dispatch({
            type:'CHG_CURRENCY',
            paylod: props.id
            
        });
    };

    return (
    <div className='alert alert-info'>
        <div className= 'row'>
            <div className= "input-group mb-3" style={{ marginLeft: '2rem'}}>
            <div className= "input-group-prepend"> <label className="input-group-text" htmlFor= "inputGroupSelect01">Currency</label>
            
            </div>
            <select className= "custom-select" value= {newCurrency} onChange= {handleCurrencyChange}>
            <option value= "$" name= "dollar">$</option>
            <option value= "£" name= "pounds">£</option>
            <option value= "€" name= "euro">€</option>
            <option value= "₹" name= "ruppee">₹</option>
            </select>
            </div>
        </div>
    </div>

    )

   
};

export default CurrencyDropdown;