import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
import Landing from "./Pages/Landing";
import Products from "./Pages/Products";
import Buynow from "./Pages/Buynow";
import Services from "./Pages/Services";
import Aboutus from "./Pages/Aboutus";
import Contactus from "./Pages/Contactus";

 
const router = createBrowserRouter([
  {
    path: '/', 
    element:<div><Login/></div>
  },
  {
    path: '/register', 
    element:<div><Register/></div>
  },
  {
    path: '/landing', 
    element:<div><Landing/></div>
  },
  {
    path: '/products',
    element:<div><Products/></div>
  },
  {
    path: '/buynow', 
    element: <div><Buynow/></div>
  },
  {
    path: '/services', 
    element: <div><Services/></div>
  },
  {
    path: '/aboutus', 
    element: <div><Aboutus/></div>
  },
  {
    path: '/contact', 
    element: <div><Contactus/></div>
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
