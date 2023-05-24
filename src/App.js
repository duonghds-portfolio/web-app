import './Background.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout/Layout';
import Home from './pages/home/Home';
import NoPage from './pages/not-found/NotFound';
import Wall from './pages/wall/Wall';
import Projects from './pages/projects/Projects';
import CardVisit from './pages/card-visit/CardVisit';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="wall" element={<Wall />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="card-visit" element={<CardVisit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
