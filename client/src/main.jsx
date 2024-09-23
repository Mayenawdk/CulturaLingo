import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import User from './pages/User.jsx';
import HomePage from './homePage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },

      {
        index: true,
        element: <User />
      }
    ]    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
);
