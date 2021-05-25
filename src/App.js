import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import CheckoutPage from "pages/Checkout";
import Example from "pages/Example";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/example" component={Example}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route exact path="/checkout" component={CheckoutPage}></Route>
        <Route exact path="/" component={LandingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
