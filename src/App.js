import React from 'react';
import AboutDescription from './components/AboutDescription/AboutDescription';
import Analysis from './components/Analysis/Analysis';
import ClientReview from './components/ClientReview/ClientReview';
import ContactSection from './components/ContactSection/ContactSection';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import PageTop from './components/PageTop/PageTop';
import RecentProjects from './components/RecentProjects/RecentProjects';
import Services from './components/Services/Services';
import Summary from './components/Summary/Summary';
import TopBanner from './components/TopBanner/TopBanner';
import TopNavigation from './components/TopNavigation/TopNavigation';
import Video from './components/Video/Video';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CoursesPage from './pages/CoursesPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ServicePage from './pages/ServicePage';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRoute from './router/AppRoute';


function App() {
    return (
      <Router>
        <AppRoute/>
      </Router>
    );
}

export default App;
