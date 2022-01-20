import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact />
      
        </Switch>
      </BrowserRouter>
  );
}

export default App;
