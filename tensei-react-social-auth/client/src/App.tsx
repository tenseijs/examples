import { BrowserRouter, Route } from 'react-router-dom'
import { MustBeAuthenticated, MustBeNotAuthenticated } from '@tensei/react-auth'

import LoginPage from './components/LoginPage'
import WelcomePage from './components/WelcomePage'
import DashboardPage from './components/DashboardPage'

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={WelcomePage} />
      <Route path='/auth/login' component={MustBeNotAuthenticated(LoginPage)} />
      <Route path='/dashboard' component={MustBeAuthenticated(DashboardPage)} />
    </BrowserRouter>
  );
}

export default App;
