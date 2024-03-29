import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routes/root.jsx';
import Search from './routes/search.jsx';
import Home , {loader as homeLoader} from './routes/home.jsx';
import Show from './routes/show.jsx';
import './index.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
     loader: homeLoader,
    children:[
    {
      path: "/show",
      element: <Show />,
    },]
  },
  {
    path: "/search",
    element: <Search />,
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