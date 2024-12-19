import React from 'react';
import { Dumbbell, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Link } from './ui/Link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="w-6 h-6 text-red-500" />
              <span className="text-xl font-bold">PowerFit</span>
            </div>
            <p className="text-gray-400">Transform your body and mind with our state-of-the-art facilities and expert trainers.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#classes">Classes</Link></li>
              <li><Link href="#powerlifting">Powerlifting</Link></li>
              <li><Link href="#trainers">Trainers</Link></li>
              <li><Link href="#pricing">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Station Road Buxar</li>
              <li>Buxar, Bihar</li>
              <li>Phone: +91********</li>
              <li>Email: ayushojhacse@gmail.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/ayush-ojha-977945253/" className="hover:text-red-500 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/ayush.__.ojha/" className="hover:text-red-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://x.com/Ayush___ojha" className="hover:text-red-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          
          <p>Created with ❤️ by Ayush Ojha</p>
          <br />
          <p>&copy; {currentYear} PowerFit. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}