import './App.css';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component'
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/sign-in' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
