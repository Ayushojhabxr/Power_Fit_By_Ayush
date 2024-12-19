import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Classes } from './components/Classes';
import { Powerlifting } from './components/Powerlifting';
import { Trainers } from './components/Trainers';
import { Pricing } from './components/Pricing';
import { TrainingTracker } from './components/TrainingTracker';
import { TrainingHistory } from './components/TrainingHistory';
import { Footer } from './components/Footer';
import { useAuthStore } from './store/authStore';

function App() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Classes />
      <Powerlifting />
      <Trainers />
      <Pricing />
      {user && (
        <>
          <TrainingTracker />
          <TrainingHistory />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;