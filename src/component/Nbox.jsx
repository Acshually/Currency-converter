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
    <div className='text-black'>
      
      <label htmlFor={amountInputId}>{label}</label> 
      <br />
      <input  id={amountInputId} type="number" placeholder='Amount' value={amount} 
      onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
      //disabled={disabled}
      />

      <br />

      <select 
       className="p-2 border rounded bg-white"
      value={selectCurrency}
       onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
      >
        {currencyOptions.map((currency)=>(
          <option value={currency} key={currency}>{currency}</option>
        ))}
      </select>
    

    </div>
  )
}

export default Nbox
