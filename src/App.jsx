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
    <main className="page-shell">
      <header className="topbar">
        <span className="brand">Currency Converter</span>
      </header>

      <section className="converter-layout">
        <form className="converter-panel" onSubmit={(event) => event.preventDefault()}>
          <div className="panel-heading">
            <h1>Convert currency</h1>
          </div>

          <div className="currency-fields">
            <Nbox
              label="From"
              amount={amount}
              onAmountChange={(value) => setAmount(value)}
              onCurrencyChange={(currency) => setFrom(currency)}
              currencyOptions={options}
              selectCurrency={from}
            />

            <div className="swap-row">
              <span className="field-divider" />
              <button className="swap-button" type="button" onClick={swap} aria-label="Swap currencies" title="Swap currencies">
                ↕
              </button>
            </div>

            <Nbox
              label="To"
              amount={camount}
              onAmountChange={(value) => setCAmount(value)}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              currencyOptions={options}
            />
          </div>

          <button className="convert-button" type="button" onClick={convert}>
            Convert
          </button>
        </form>
      </section>
    </main>
  )
}

export default App
