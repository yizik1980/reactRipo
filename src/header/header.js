import { userContext } from '../context/userContext';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import './header.css'
function Header() {
const [user, setUser] = userContext({})

return (
  <div className="App">
    <header className="App-header">
      <nav>
        <Router>
        <Link path="/">
          <div className="logo"></div>
          </Link>
        </Router>
    
       
      </nav>
    </header>
  </div>
);
}

export default Header;
