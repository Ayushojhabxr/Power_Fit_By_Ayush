import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: 29,
    features: [
      "Access to gym facilities",
      "Basic equipment usage",
      "Locker room access",
      "Free WiFi"
    ]
  },
  {
    name: "Premium",
    price: 49,
    features: [
      "All Basic features",
      "Group classes included",
      "Personal trainer consultation",
      "Nutrition guidance",
      "Access to spa facilities"
    ]
  },
  {
    name: "Elite",
    price: 99,
    features: [
      "All Premium features",
      "Unlimited personal training",
      "Custom workout plans",
      "Priority class booking",
      "Massage therapy sessions"
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle>Membership Plans</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan) => (
            <div key={plan.name} className="border rounded-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">
                ${plan.price}
                <span className="text-lg text-gray-500 font-normal">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}