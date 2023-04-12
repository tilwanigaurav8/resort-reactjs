import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes, Switch} from "react-router-dom";
import Home from "./pages/home";
import Singleroom from "./pages/Singleroom";
import Rooms from "./pages/rooms";
import Error from "./pages/Error";
import Navbar from './components/Navbar';
/* for react-router-dom versions above 5 Switch is replaced by Routes
<Route exact path="" element={<... />} />
or
<Route exact path="" component={...} />
for above 5 we use 
*/
function App() {
  return (
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/rooms/:id">
                <Singleroom />
            </Route>
            <Route exact path="/rooms">
                <Rooms />
            </Route>
            <Route exact path="*">
                <Error />
            </Route>
          </Switch>
        </Router>
  );
}

export default App;
