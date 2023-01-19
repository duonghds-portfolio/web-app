import './Background.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout/Layout';
import Home from './pages/home/Home';
import Blogs from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import NoPage from './pages/not-found/NotFound';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
