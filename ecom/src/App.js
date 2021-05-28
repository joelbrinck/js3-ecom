import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './views/Home'
import ProductDetails from './views/ProductDetails'
import Cart from './views/Cart'
import Login from './views/Login'
import Register from './views/Register'
import Profile from './views/Profile'
import Shipping from './views/Shipping'
import Payment from './views/Payment'
import PlaceOrder from './views/PlaceOrder'
import Order from './views/Order'
import UserList from './views/UserList'
import UserEdit from './views/UserEdit'
import OrderList from './views/OrderList'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/order/:id" component={Order} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/payment" component={Payment} />
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/admin/orderlist" component={OrderList} />
          <Route path="/admin/userlist" component={UserList} />
          <Route path="/admin/user/:id/edit" component={UserEdit} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
