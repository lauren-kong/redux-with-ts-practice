import { ActionTypes } from "../action-types"
import { Dispatch } from "redux"
import { Action } from "../actions"

const {DEPOSIT, WITHDRAW, BANKRUPT} = ActionTypes

export const depositMoney = (amount: number) => {
  return (dispatch:Dispatch<Action>) => {
    dispatch({
      type: DEPOSIT,
      payload: amount
    })
  }
}
export const withdrawMoney = (amount: number) => {
  return (dispatch:Dispatch<Action>) => {
    dispatch({
      type: WITHDRAW,
      payload: amount
    })
  }
}
export const bankrupt = () => {
  return (dispatch:Dispatch<Action>) => {
    dispatch({
      type: BANKRUPT,
      
    })
  }
}