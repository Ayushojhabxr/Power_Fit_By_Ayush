import React, { useState } from 'react';
import { Dumbbell, Menu, X, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from './ui/Link';
import { LoginModal } from './Auth/LoginModal';
import { useAuthStore } from '../store/authStore';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { user, logout } = useAuthStore();

  return (
    <nav className="bg-black text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Dumbbell className="w-8 h-8 text-red-500" />
          <span className="text-2xl font-bold">PowerFit</span>
        </motion.div>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="hidden md:flex space-x-8">
          <Link href="#home">Home</Link>
          <Link href="#classes">Classes</Link>
          <Link href="#powerlifting">Powerlifting</Link>
          <Link href="#trainers">Trainers</Link>
          <Link href="#pricing">Pricing</Link>
          {user && <Link href="#tracker">Training Tracker</Link>}
        </div>

        {user ? (
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-red-500">Welcome, {user.username}!</span>
            <button
              onClick={logout}
              className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full font-semibold transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full font-semibold transition-colors"
            onClick={() => setIsLoginModalOpen(true)}
          >
            Join Now
          </motion.button>
        )}

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <Link href="#home">Home</Link>
              <Link href="#classes">Classes</Link>
              <Link href="#powerlifting">Powerlifting</Link>
              <Link href="#trainers">Trainers</Link>
              <Link href="#pricing">Pricing</Link>
              {user && <Link href="#tracker">Training Tracker</Link>}
              {user ? (
                <>
                  <span className="text-red-500">Welcome, {user.username}!</span>
                  <button
                    onClick={logout}
                    className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full font-semibold transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <button
                  className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full font-semibold transition-colors"
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  Join Now
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </nav>
  );
}