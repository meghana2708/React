import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/navbar.css'
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';
import {composeWithDevTools} from 'redux-devtools-extension'
import List from './components/List';
import AddItem from './components/AddItem';
<AddItem />
const chores = [
  {
    id : 1,
    text: 'Go to Gym'
  },
  {
    id: 2,
    text:'Eat food'},
 { 
   id: 3,
  text :'Sleep'}
]

const store = createStore(reducer,chores,composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    
    <App />
    <List />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

