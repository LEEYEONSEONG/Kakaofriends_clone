import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Cart from "./Pages/Cart/Cart";
import Category from "./Pages/Category/Category";
import Details from "./Pages/Details/Details";
import Location from "./Pages/Location/Location";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Terms from "./Pages/Terms/Terms";
import SearchResult from "./Pages/SearchResult/SearchResult";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/search" component={SearchResult} />
          <Route exact Path="/category/toy" component={Category} />
          <Route exact Path="/category/office" component={Category} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
