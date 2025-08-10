import { useState } from 'react'
import  Nbox  from "./component/Nbox";
import './App.css'
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState()
  const [camount, setCAmount] = useState()
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  
  const convert = () => {
    setCAmount(amount * currencyInfo[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    // setAmount(camount)
    // setCAmount(amount)
  }
  return (
    <>
     <div className="text-red-600 bg-amber-300">HELLO  hello </div>
     <form className='bg-amber-200' >
      <Nbox
      label="From"
      amount={amount}
      onAmountChange={(amount) => setAmount(amount)    }  
      onCurrencyChange={(x)=> setFrom(x)}
      currencyOptions={options}
      selectCurrency={from}

      />

      <Nbox
      label='To'
      amount={camount}
      onAmountChange={(amount)=>setCAmount(amount)}
      onCurrencyChange={(currency)=>setTo(currency)}
      selectCurrency={to}
      currencyOptions={options}
      //disabled={true}

      />

      <button
        type="button"
        onClick={convert}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button> 
      <br />
      <button
        type="button"
        onClick={swap}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        Swap
      </button>
     </form>
    </>
  )
}

export default App
