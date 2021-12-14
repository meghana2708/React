import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/navbar.css'
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';
import {composeWithDevTools} from 'redux-devtools-extension'

import { BrowserRouter } from 'react-router-dom';


const products = [
  {
    id : 1,
    text: 'iPhone11',
    description:'This is iPhone 11'
  },
  {
    id: 2,
    text:'iPhone12',
    description:'This is iPhone 12' 
  },
 { 
   id: 3,
  text :'iPhone13',
  description:'this is iPhone 13'
}
]

const store = createStore(reducer,products,composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter >
    <App />
    </BrowserRouter>
    
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

