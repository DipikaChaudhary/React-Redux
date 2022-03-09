import { DECREMENT, INCREMENT } from "./counterTypes"
export const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}
export const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}