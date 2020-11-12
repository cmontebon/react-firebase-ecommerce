import './App.css';
import HomePage from './pages/homepage.component'
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom'

const AboutPage = () => (
  <div><h1>About Us</h1></div>
)

const BlogPage = (props) => (
  <div>
    <h1>Blog Page</h1>
    <Link to={`${props.match.url}/1`} >Blog 1</Link>,
    <Link to={`${props.match.url}/2`} >Blog 2</Link>,
    <Link to={`${props.match.url}/3`} >Blog 3</Link>
  </div>
)

const BlogDetails = (props) => {
  console.log(props.match)
  console.log(props.match.params)
  return <div><h1>Blog Category - {props.match.params.category}</h1></div>
}

function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/about' component={AboutPage} />
      </Switch>
      <Route path='/shop' component={BlogPage}/>
      <Route exact path='/shop/:category' component={BlogDetails} />
    </div>
    </BrowserRouter>
  );
}

export default App;
