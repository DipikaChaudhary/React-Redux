import { combineReducers } from "redux";
import counterReducer from "./Counter/counterReducer";
import fruitReducer from "./Fruit/fruitReducer";

const rootReducer = combineReducers({
    fruits: fruitReducer,
    counter: counterReducer
})
export default rootReducer