import {  Routes, Route, } from 'react-router-dom';
import { Navbar } from './Component/Navbar/navbar';
import { Shop_Context } from './Component/ShopContent/shop-context';
import { Registered } from './Pages/Admin/RegisteredCus/RegCus';
import { HomePage } from './Pages/User/Home';
import { Login } from './Pages/Authetication/SignIn/Login';
import { Orders } from './Pages/Admin/Orders/orders';
import { Cart } from './Pages/User/Cart/cart';
import { Register } from './Pages/Authetication/SignUp/signUp';
import { Profile } from './Pages/User/profile/profile';
import { AdminLogin } from './Pages/Admin/SignIn/Login';
function App() {


  const auth = localStorage.getItem("User");
  const Admin = localStorage.getItem("Admin");


    return( 
      <div className="App">

         <Shop_Context>
          
        <Navbar /> 
       
       {
        auth?
       <Routes>
         <Route path='/rest' element= {<Registered />} />
         <Route path='/' element={<HomePage />} />
         <Route path='/orders' element={<Orders/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/profile' element={<Profile/>} />
       </Routes>
       :
       Admin?
       <Routes>
        <Route path='/rest' element= {<Registered />} />
        <Route path='/' element={<HomePage />} />
       </Routes>
       :
       <Routes>
        <Route path='/orders' element={<Orders/>}/>
         <Route path='/cart' element={<Cart/>}/>
       <Route path='/admin' element={<AdminLogin/>}/> 
       <Route path='/login' element={<Login/>}/>
       <Route path='/' element={<HomePage />} />
       <Route path='/register' element={<Register/>}/> 
       </Routes>
       }

       </Shop_Context>

      </div>
    
    )
}
export default App;
