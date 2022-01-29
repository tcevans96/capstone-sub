import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';
import Dashboard from './pages/Dashboard/Dashboard';
import DiscoverPage from './pages/DiscoverPage/DiscoverPage';
import SubsPage from './pages/SubsPage/SubsPage';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LoginPage}/>
          <Route path="/login" exact component={LoginForm}/>
          <Route path="/signup" exact component={SignupForm}/>
          <Route path="/dashboard" exact component={Dashboard}/>
          <Route path="/discover" exact component={DiscoverPage}/>
          <Route path="/subscriptions" exact component={SubsPage}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
