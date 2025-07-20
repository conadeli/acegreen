import React from 'react';
import Hero from './components/Hero';
import TrialHighlightSection from './components/TrialHighlightSection';
import TrialVideoSection from './components/TrialVideoSection';
import ProductInfo from './components/ProductInfo';
import InstallationStatus from './components/InstallationStatus';
import InterviewVideoSection from './components/InterviewVideoSection';
import TrialTabs from './components/TrialTabs';
import InstallationGallery from './components/InstallationGallery';
import FinalTrialForm from './components/FinalTrialForm';
import Footer from './components/Footer';
import FloatingTrialButton from './components/FloatingTrialButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TrialHighlightSection />
      <TrialVideoSection />
      <ProductInfo />
      <InstallationStatus />
      <InterviewVideoSection />
      <TrialTabs />
      <InstallationGallery />
      <FinalTrialForm />
      <Footer />
      <FloatingTrialButton />
    </div>
  );
}

export default App;