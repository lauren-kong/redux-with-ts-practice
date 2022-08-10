import React, { useEffect, useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from './state'
function App() {
  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch)
  const amount = useSelector((state: State) => state.bank)
  const [updateAmount, setUpdateAmount] = useState<string | number>('')

  return (
    <div className="App">
      <h1>
        <span>Current Amount: </span>
        {amount}
      </h1>
      <div className="change-amount">
        <input value={updateAmount} onChange={(e) => setUpdateAmount(e.target.value)} autoFocus />
        <button
          className="deposit"
          onClick={(e) => {
            depositMoney(Number(updateAmount))
            setUpdateAmount('')
          }}
        >
          Deposit
        </button>
        <button
          className="withdraw"
          onClick={() => {
            withdrawMoney(Number(updateAmount))
            setUpdateAmount('')
          }}
        >
          Withdraw
        </button>
        <button
          className="bankrupt"
          onClick={() => {
            bankrupt()
            setUpdateAmount('')
          }}
        >
          Bankrupt
        </button>
      </div>
    </div>
  )
}

export default App
