import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Dumbbell, Weight, Trophy } from 'lucide-react';

const features = [
  {
    icon: <Dumbbell className="w-12 h-12 text-red-500" />,
    title: "Professional Equipment",
    description: "State-of-the-art powerlifting equipment including competition-grade bars, plates, and racks."
  },
  {
    icon: <Weight className="w-12 h-12 text-red-500" />,
    title: "Expert Coaching",
    description: "Learn proper form and technique from certified powerlifting coaches with competition experience."
  },
  {
    icon: <Trophy className="w-12 h-12 text-red-500" />,
    title: "Competition Prep",
    description: "Specialized programs for athletes preparing for powerlifting competitions."
  }
];

export function Powerlifting() {
  return (
    <section id="powerlifting" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle>Powerlifting Program</SectionTitle>
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-xl text-gray-300">Master the big three: Squat, Bench Press, and Deadlift. Join our elite powerlifting program and push your strength to new limits.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Strong?</h3>
            <p className="mb-6">Join our powerlifting community and achieve your strength goals</p>
          <a href="https://docs.google.com/spreadsheets/d/1fNBr5YqTPdRJaBa9eflUwyUYfNoh2-N7/edit?gid=2025543808#gid=2025543808"> <button className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Start Training
            </button></a>
          </div>
        </div>
      </div>
    </section>
  );
}