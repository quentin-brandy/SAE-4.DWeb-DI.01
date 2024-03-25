import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routes/root.jsx';
import Search , {loader as searchLoader} from './routes/search.jsx';
import Home , {loader as homeLoader} from './routes/home.jsx';
import Show , {loader as ShowLoader} from './routes/show.jsx';
import './index.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
     loader: homeLoader,
  },
  {
    path: "/show",
    element: <Show />,
    loader: ShowLoader,
  },
  {
    path: "/search",
    element: <Search />,
    loader: searchLoader,
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