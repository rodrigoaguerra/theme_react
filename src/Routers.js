import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home, About, Users, Single, Dashboard, SignIn, SignUp, Checkout, ForgotPassword, Product } from './views';
import Header from './views/Commun/Header';

const sections = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Users', url: '/users' },
  { title: 'Single', url: '/single' },
  { title: 'Product', url: '/product' },
  { title: 'Checkout', url: '/checkout' },
  { title: 'Sing In', url: '/sign-in' },
  { title: 'Sign Up', url: '/sign-up' },
  { title: 'Dashboard', url: '/dashboard' },
];

export default function App() {
  return (
    <Router>
      <Header title="Blog" sections={sections} />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/single" element={<Single />} />
          <Route path="/product" element={<Product />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-Up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}