import React ,{useId} from 'react'

function Nbox({
    label,
    amount,
    onAmountChange,
    selectCurrency,
    onCurrencyChange,
    currencyOptions,
   // disabled=false //yaha par jo obj banaya h yaha direct false /true likh sakte h 
                  // par jab waha (app.jsx) se pass karte h argument tab {true} likhna padta h 


    

}) {

    const amountInputId = useId()
  return (
    <div className="currency-field">
      <label htmlFor={amountInputId}>{label}</label>
      <div className="currency-input-row">
        <input
          id={amountInputId}
          type="number"
          placeholder="0.00"
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
      //disabled={disabled}
        />
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          aria-label={`${label} currency`}
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>{currency.toUpperCase()}</option>
          ))}
        </select>
      </div>

    </div>
  )
}

export default Nbox
