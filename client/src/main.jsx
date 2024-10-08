import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Users from './pages/User.jsx';
import HomePage from './homePage.jsx';
import Login from './components/login/login.jsx';
import Signup from './components/signup/signup.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
    ]    
  },
  {
    path: '/user',
    element: <Users />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/Login',
    element: <Login />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
);
