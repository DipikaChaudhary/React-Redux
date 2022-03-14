import { combineReducers } from "redux";
import blogReducer from "./Blog/blogReducer";
import counterReducer from "./Counter/counterReducer";
import fruitReducer from "./Fruit/fruitReducer";

const rootReducer = combineReducers({
    fruits: fruitReducer,
    counter: counterReducer,
    blog: blogReducer
})
export default rootReducer