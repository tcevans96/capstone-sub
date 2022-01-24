import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LoginPage}/>
          <Route path="/login" exact component={LoginForm}/>
          <Route path="/signup" exact component={SignupForm}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
