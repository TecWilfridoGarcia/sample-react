import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const Suma = (props) => <h1>Suma 1... {props.count} </h1>
const Suma2 = (props) => <h1>Suma 2... {props.count} </h1>
const App = (props) =><div><Suma count = {props.count}/><Suma2 count = {props.count} /></div> 

ReactDOM.render(<App count="2" />, document.getElementById('root'));


const reducer = (state, action) => {
    if(action.type === 'PROD'){
        return state * action.count;
    }
    return state;
};
const store = createStore(reducer,2);

store.subscribe(()=>{
console.log('New dispatch', store.getState());
ReactDOM.render(<App count={store.getState()} />, document.getElementById('root'));
});
setInterval(() => {
    store.dispatch({type:'PROD', count: 2});

}, 1000)