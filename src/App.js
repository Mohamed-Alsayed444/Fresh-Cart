import logo from './logo.svg';
import './App.css';
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from "./Component/Home/Home"
import Layout from "./Component/Layout/Layout"
import Brands from "./Component/Brands/Brands"
import Categories from "./Component/Categories/Categories"
import Cart from "./Component/Cart/Cart"
import Login from "./Component/Login/Login"
import Register from "./Component/Register/Register"
import Products from "./Component/Products/Products"
import NotFound from "./Component/NotFound/NotFound"
import  { Toaster } from 'react-hot-toast';
import  { userContext } from './Context/UserContext';
import { useContext, useEffect } from 'react';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import CartContextProvider from './Context/CartContext';
import Address from './Component/Address/Address';






let routers = createBrowserRouter([
  {path:"/", element:  <Layout/>  ,children:[
    {index:true , element: <ProtectedRoute><Home/></ProtectedRoute> },
    {path:"brands" ,element: <ProtectedRoute><Brands/></ProtectedRoute> },
    {path:"categories" ,element: <ProtectedRoute><Categories/></ProtectedRoute> },
    {path:"cart" ,element:<ProtectedRoute><Cart/></ProtectedRoute>  },
    {path:"login" , element: <Login/>},
    {path:"register" , element:<Register/>},
    {path:"products" , element: <ProtectedRoute> <Products/></ProtectedRoute>},
    {path:"address" , element: <ProtectedRoute> <Address/></ProtectedRoute>},
    {path:"productdetails/:id" , element: <ProtectedRoute> <ProductDetails/></ProtectedRoute>},
    {path:"*" , element:<NotFound/>},
  ]},
])


function App() {

  let {setUserToken} = useContext(userContext)


  useEffect(()=>{
    if(localStorage.getItem("userToken") !== null){
      setUserToken(localStorage.getItem("userToken"))
    }
  } , []);

  

  

  return <CartContextProvider>
<RouterProvider router={routers}></RouterProvider>
<Toaster />
</CartContextProvider>

}

export default App;
