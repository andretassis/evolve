import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aulas from './componentes/aulas/aulas';
import Horario from './componentes/horario/horario';
import Nav from './componentes/nav/nav';
import Precos from './componentes/precos/precos';
import Login from './componentes/login/login'



function App() {
  return (
    <>
      <Router>
        <Switch>
          <Nav></Nav>
          <Aulas></Aulas>
          <Precos></Precos>
          <Horario></Horario>
          <Login />
        </Switch>
      </Router>
    </>
  );
}

export default App;