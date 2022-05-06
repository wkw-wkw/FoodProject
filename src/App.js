import logo from './assets/img/logo.svg';
import './assets/style/App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./View/Home";
import Details from "./View/Details";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details/:id' element={<Details/>}/>
          </Routes>
        </BrowserRouter>
      {/*</header>*/}
    </div>
  );
}

export default App;
