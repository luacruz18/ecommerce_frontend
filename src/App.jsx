import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Category from './components/Category';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';


function App() {
  return (
    <Router>
     
      <div className="container mx-auto p-4">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products/:id" component={Products} />
          <Route path="/category/:id" component={Category} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
