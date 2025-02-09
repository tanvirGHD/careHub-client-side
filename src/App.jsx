
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Contact from './components/Page/Contact';
import Home from './components/Home/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* MainLayout is the parent, and Banner is its child */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home></Home>} /> {/* Banner as child of MainLayout */}
          <Route path="contact" element={<Contact></Contact>} /> {/* Banner as child of MainLayout */}
          <Route path="register" element={<Register></Register>}/> {/* Banner as child of MainLayout */}
          <Route path="login" element={<Login></Login>}/> {/* Banner as child of MainLayout */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
