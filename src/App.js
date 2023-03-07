import { Fragment } from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
//引入组件
import Login from "./Componnents/Login";
import Landing from "./Componnents/Landing";

function App() {

  return (
    <Fragment>
        <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='*' element={<Landing/>}></Route>
            <Route path='*/' element={<Landing/>}></Route>
        </Routes>
    </Fragment>
  );
}

export default App;
