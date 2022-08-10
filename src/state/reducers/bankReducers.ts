import { Action } from "../actions"
import { ActionTypes } from "../action-types"

const initialState = 0
const { DEPOSIT, WITHDRAW, BANKRUPT} = ActionTypes
const bankReducer = (state = initialState, action:Action) => {
  switch(action.type){
    case DEPOSIT:
      return state + action.payload

    case WITHDRAW:
      return state - action.payload

    case BANKRUPT:
      return 0

    default: 
      return state
    }
}

export default bankReducer

