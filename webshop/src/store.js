import { createStore,applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from './reducers/productListReducer';
import { productDetailsReducer,productReviewCreateReducer, productTopRatedReducer } from './reducers/productDetails';
import { cartReducer } from "./reducers/cartReducers";
import { userDetailsReducer, userLoginReducer,userRegisterReducer, userUpdateProfileReducer } from './reducers/userReducer';
import { orderCreateReducer, orderDetailsReducer, orderPayReducer } from './reducers/orderReducers';



const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    productReviewCreate : productReviewCreateReducer,
    productTopRated : productTopRatedReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer
})

const cartitemsfromstorage=localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[]

const userInfoFromStorage=localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')):null

const shippingAddressfromlocalstorage=localStorage.getItem('shippingAddress')? JSON.parse(localStorage.getItem('shippingAddress')):{}

const initialState={
    cart:{cartItems:cartitemsfromstorage,
    shippingAddress:shippingAddressfromlocalstorage},
    userLogin:{userInfo:userInfoFromStorage}
}
const middleware=[thunk]
const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store