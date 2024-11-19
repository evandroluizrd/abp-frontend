import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Home from './Telas/Home'
import Camisas from './Telas/Camisas'
import Calças from './Telas/Calças'
function app(){

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
                    <Route path="/Calças"><Calças/></Route>
                    <Route path="/Camisas"><Camisas/></Route>
            </Switch>
    </Router>
)
}
export default app