import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch} from 'react-router-dom';
import './App.css';


const HatsPage=()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
//voordeel van switch is dat je niet per ongeluk gewoon meerdere routes zal renderen
function App() {
  return (
    <div className="App">

      <Switch>
     <Route exact path='/' component={HomePage} />
     <Route path='/hats' component={HatsPage} />
     </Switch>
      
    </div>
  );
}

export default App;
