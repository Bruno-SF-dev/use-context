import { Route, Switch } from "react-router";
import Pag1 from "../components/Pag1";
import Pag2 from "../components/Pag2";
import Pag3 from "../components/Pag3";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Pag1 />
      </Route>
      <Route path="/last-name" exact>
        <Pag2 />
      </Route>
      <Route path="/age" exact>
        <Pag3 />
      </Route>
    </Switch>
  );
};

export default Routes;
