import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Allitem from "./Pages/Allitem/Allitem";
import Hotitem from "./Pages/Hotitem/Hotitem";
import Saleitem from "./Pages/Saleitem/Saleitem";
import Newitem from "./Pages/Newitem/Newitem";
import Cart from "./Pages/Cart/Cart";
import Category from "./Pages/Category/Category";
import Details from "./Pages/Details/Details";
import Location from "./Pages/Location/Location";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Terms from "./Pages/Terms/Terms";




class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/all" component={Allitem} />
          <Route exact path="/hot" component={Hotitem} />
          <Route exact path="/sale" component={Saleitem} />
          <Route exact path="/new" component={Newitem} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/terms" component={Terms} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;