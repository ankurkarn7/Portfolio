import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Socials from './components/Socials';
import Footer from './components/Footer';
import About from './components/About';
import ReachTop from './components/ReachTop';
import Contact from './components/Contact';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><ReachTop/><Navbar/><Hero /><Skills/><Projects/><Socials/><Footer/> </>
    },
    {
      path:"/about",
      element:<><ReachTop/><Navbar/><About/><Footer/></>
    },
    {
      path:"/contact",
      element:<Contact />
    },
    {
      path:"/project",
      element:<><Navbar/><Projects /><Socials /><Footer/></>
    }
  ])
  return (
    <>
      <RouterProvider router = {router} />
    </>
  );
}

export default App;
