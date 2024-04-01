import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routes/root.jsx';
import Search , {loader as searchLoader} from './routes/search.jsx';
import Home , {loader as homeLoader} from './routes/home.jsx';
import Show , {loader as ShowLoader} from './routes/show.jsx';
import Serie , {loader as SerieLoader} from './routes/serie.jsx'
import Category , {loader as CategoryLoader} from './routes/category.jsx';
import Login from './component/Log/Login.jsx';
import './index.css';
import SignIn from './component/Form/SignIn.jsx';
import SignUp from './component/Form/SignUp.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
     children:[
      {
        index: true,
        element: <Home/>,
        loader: homeLoader,
      },
  {
    path: "/search",
    element: <Search />,
    loader: searchLoader,
  },
  {
    path: "/:Moviename",
    element:<Serie/>,
    loader: SerieLoader,
  },
  {
    path: "/show",
    element: <Show />,
    loader: ShowLoader,
    children:[
      {
        path: "/show/:Categoryname",
        element: <Category />,
        loader: CategoryLoader,
      },
    ]
  },
]
  },
  {
    path: "/account",
    element: <Login/>,
    children:[
      {
        path:"/account/signin",
        element: <SignIn/>,
      },
      {
        path:"/account/signup",
        element: <SignUp/>,
      },
    ]
  },
]);


const rootElement = document.querySelector('#root');

if (rootElement) {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
} else {
  console.error('No root element found');
}






//
//ReactDOM.createRoot(document.getElementById('root')).render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//)
//