import React from 'react';
import { SectionTitle } from './ui/SectionTitle';

const trainers = [
  {
    name: "John Smith",
    specialty: "Powerlifting Coach",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "USAPL certified coach with 10+ years of competition experience."
  },
  {
    name: "Sarah Johnson",
    specialty: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Former athlete specializing in sports performance and injury prevention."
  },
  {
    name: "Mike Williams",
    specialty: "HIIT Specialist",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Expert in high-intensity training and metabolic conditioning."
  }
];

export function Trainers() {
  return (
    <section id="trainers" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle>Our Trainers</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={trainer.image} alt={trainer.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{trainer.name}</h3>
                <p className="text-red-500 font-semibold mb-2">{trainer.specialty}</p>
                <p className="text-gray-600">{trainer.description}</p>
                <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition-colors">
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}