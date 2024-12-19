import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';
import { useAuthStore } from '../store/authStore';

interface Workout {
  date: string;
  exercises: Array<{
    id: string;
    name: string;
    sets: number;
    reps: number;
    weight: number;
  }>;
}

export function TrainingHistory() {
  const user = useAuthStore((state) => state.user);
  const workouts: Workout[] = JSON.parse(localStorage.getItem(`workouts-${user?.username}`) || '[]');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  if (!user) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle>Your Training History</SectionTitle>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto mt-8 space-y-6"
        >
          {workouts.length === 0 ? (
            <p className="text-center text-gray-500">No workouts recorded yet. Start tracking your training!</p>
          ) : (
            workouts.map((workout, index) => (
              <motion.div
                key={workout.date}
                variants={item}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">
                    Workout {workouts.length - index}
                  </h3>
                  <span className="text-gray-500">
                    {new Date(workout.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="space-y-2">
                  {workout.exercises.map((exercise) => (
                    <div key={exercise.id} className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">{exercise.name}</span>
                      <span className="text-gray-600">
                        {exercise.sets} sets × {exercise.reps} reps
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}