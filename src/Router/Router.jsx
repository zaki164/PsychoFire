import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CompLoader } from '../components';

const Home = React.lazy(() => import("../components/Home/Home"));
const Gallery = React.lazy(() => import("../Sections/Gallery/Gallery"));
const Features = React.lazy(() => import("../Sections/Features/Features"));
const Testimonials = React.lazy(() => import("../Sections/Testimonials/Testimonials"));
const Articles = React.lazy(() => import("../Sections/Articles/Articles"));
const Skills = React.lazy(() => import("../Sections/Skills/Skills"));
const Pricing = React.lazy(() => import("../Sections/Pricing/Pricing"));
const HowItWorks = React.lazy(() => import("../Sections/HowItWorks/HowItWorks"));
const TeamMembers = React.lazy(() => import("../Sections/TeamMembers/TeamMembers"));
const Services = React.lazy(() => import("../Sections/Services/Services"));
const TopVideos = React.lazy(() => import("../Sections/TopVideos/TopVideos"));

const Router = () => {
  return (
    <Suspense fallback={<CompLoader />}>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/Features' element={<Features />} />
        <Route path='/Testimonials' element={<Testimonials />} />
        <Route path='/Articles' element={<Articles />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Pricing' element={<Pricing />} />
        <Route path='/HowItWorks' element={<HowItWorks />} />
        <Route path='/TeamMembers' element={<TeamMembers />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/TopVideos' element={<TopVideos />} />
      </Routes>
    </Suspense>
  )
}

export default Router