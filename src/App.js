import logo from './logo.svg';
import shashi from './images/shashi-sagar.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <>
   <div className="shashi-sagar mt-0 pt-0 row mx-0">
      <div className="col-6 d-flex justify-content-center align-items-center">
        <img src={shashi} className="App-logo" alt="logo" />
      </div>
    </div>
 
    </>
   
  );
}

export default App;
