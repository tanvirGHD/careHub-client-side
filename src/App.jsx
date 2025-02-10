
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MainLayout from './layout/MainLayout';
// import Contact from './components/Page/Contact';
// import Home from './components/Home/Home';
// import Register from './components/Auth/Register';
// import Login from './components/Auth/Login';
// import AlllCharity from './components/Page/AlllCharity';
// import CharityDetails from './components/Page/CharityDetails';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* MainLayout is the parent, and Banner is its child */}
//         <Route path="/" element={<MainLayout />}>
//           <Route path="/" element={<Home></Home>} /> 
//           <Route path="contact" element={<Contact></Contact>} /> 
//           <Route path="allCharity" element={<AlllCharity></AlllCharity>} /> 
//           <Route path="charityDetails:id" element={<CharityDetails></CharityDetails>}
//            loader: ({params}) => fetch(`http://localhost:5000/charityDetails/${params.id}`)
//           /> 
//           <Route path="register" element={<Register></Register>}/> 
//           <Route path="login" element={<Login></Login>}/> 
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import { RouterProvider } from 'react-router-dom';
// import router from './router/router';


// function App() {
//   return <RouterProvider router={router()} />;
// }

// export default App;
