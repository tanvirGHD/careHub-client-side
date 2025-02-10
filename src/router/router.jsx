import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../components/Home/Home';
import AllCharity from '../components/Page/AlllCharity';
import CharityDetails from '../components/Page/CharityDetails';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
import Map from '../components/Page/Map';
import Payment from '../components/Page/payment/Payment';
import PaymentHistory from '../components/Page/payment/PaymentHistory';
import Dashboard from '../components/Page/Dashboard/Dashboard';
import MyProfile from '../components/Page/Dashboard/MyProfile';
import AboutUs from '../components/Page/AboutUs';

const router = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "allCharity",
          element: <AllCharity></AllCharity>
        },
        {
          path: "profile",
          element: <MyProfile></MyProfile>
        },
        {
          path: "charityDetails/:id",
          element: <CharityDetails></CharityDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/charityDetails/${params.id}`)
        },
        {
          path: "map",
          element: <Map></Map>
        },
        {
          path: "aboutUs",
          element: <AboutUs></AboutUs>
        },
        {
          path: "/payment/:amount/:name",
          element: <Payment></Payment>
        },
        {
          path: "paymentsHistory",
          element: <PaymentHistory></PaymentHistory>
        },
        {
          path: 'dashboard',
          element: <Dashboard></Dashboard>
        },
        {
          path: "register",
          element: <Register></Register>
        },
        {
          path: "login",
          element: <Login></Login>
        },
      ],
    },
  ]);
};

export default router;






