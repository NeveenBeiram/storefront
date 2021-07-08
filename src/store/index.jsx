import { createStore, combineReducers } from "redux";
import reducerCategories from "./categories";
import reducerProducts from './products';

// This dependency enables the Redux Dev Tools in your chrome browser
import { composeWithDevTools } from 'redux-devtools-extension';


let reducers = combineReducers({categories: reducerCategories,products: reducerProducts})

const store = () => {
  return createStore(reducers,composeWithDevTools());
}

export default store();
