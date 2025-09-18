
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel';
import Index from './pages';
import Header from './components/Header';
import Auth from './pages/Login';
import Contact from './pages/Contact';
import About from './pages/About';
import AdminProtectedRoute from './components/AdminProtectedRoute';
import TutorialForm from './pages/CreateTutorial';
import HelpPage from './pages/HelpPage';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

const isAuthenticated = true; // Replace with your actual auth logic


const App = () => {
  return (
    <Router>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="tutorial" element={<Index />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
          <Route path="/help" element={<HelpPage />} />

        <Route path="/admin" element={<AdminProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route index element={<AdminPanel />} />
          <Route path="create-tutorial" element={<TutorialForm />} />
          {/* Add more nested routes here */}
        </Route>
             {/* 🆕 Blog Routes */}
      <Route path="/blog" element={<Blog />} />
       <Route path="/blog/:id" element={<BlogDetail />} />


      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;