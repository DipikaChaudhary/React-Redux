import { BUY_FRUIT } from "./fruitTypes"

const initialState = {
    numOfFruits: 20
}

const fruitReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_FRUIT: return {
            ...state,
            numOfFruits: state.numOfFruits - 1
        }
        default: return state
    }
}
export default fruitReducer