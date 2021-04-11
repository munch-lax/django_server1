import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Container} from 'react-bootstrap'
import HomeScreen from "./screens/HomeScreen";
import { HashRouter} from "react-router-dom";
import {Route} from 'react-router-dom'
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";



function App() {
  return (
    <HashRouter className="App">
     <Header/>
     <main className='py-3'>
       <Container>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/product/:id' exact component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen}/>
          <Route path='/login' component={LoginScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/order/:id' component={OrderScreen} />
       </Container>
     </main>
     <Footer/>
    </HashRouter>
  );
}

export default App;
