import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Home from './Telas/Home'
import Camisas from './Telas/Camisas'
import Calcas from './Telas/Calcas'
function App(){

return(
    <Router>
            <ul>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/"> Calças</Link>
                </li>
                <li>
                    <Link to="/">Camisas</Link>
                </li>
            </ul>
            <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/calcas"><Calcas/></Route>
                    <Route path="/camisas"><Camisas/></Route>
            </Switch>
    </Router>
)
}
export default App()
