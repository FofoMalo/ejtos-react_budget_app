import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';


const CurrencyDropdown = ()=> {
    const {currency} = useContext (AppContext);
    const [newCurrency, setNewCurrency ] = useState (currency);

    const handleCurrencyChange = (event) => {
        setNewCurrency (event.target.value);
    }
    return (
        <div className='alert alert-primary'>
           <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                </div>
                  <select className="custom-select" value={newCurrency} onChange={handleCurrencyChange}>
                   <option value="dollar" name="dollar">$</option>
                   <option value="pounds" name="pounds">£</option>
                   <option value="euros" name="euros">€</option>
                   <option value="ruppee" name="ruppee">₹</option>
                  </select>
            </div>
        </div>
        </div>
    
    );

};

export default CurrencyDropdown;