import { Route,Switch ,BrowserRouter} from "react-router-dom";
import About from "./pages/page_about";
import Home from "./pages/page_home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/page/home" exact>
            <Home />
          </Route>
          <Route path="/page/about" exact>
            <About />
          </Route>
      </Switch>
    </BrowserRouter>   
  );
}

export default App;
