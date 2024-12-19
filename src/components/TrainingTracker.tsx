import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';
import { Plus, Save, Trash2 } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight: number;
}

export function TrainingTracker() {
  const user = useAuthStore((state) => state.user);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [newExercise, setNewExercise] = useState({
    name: '',
    sets: 0,
    reps: 0,
    weight: 0,
  });

  const addExercise = () => {
    if (newExercise.name) {
      setExercises([
        ...exercises,
        {
          id: Date.now().toString(),
          ...newExercise,
        },
      ]);
      setNewExercise({ name: '', sets: 0, reps: 0, weight: 0 });
    }
  };

  const removeExercise = (id: string) => {
    setExercises(exercises.filter((exercise) => exercise.id !== id));
  };

  const saveWorkout = () => {
    if (!user) return;
    
    const workout = {
      date: new Date().toISOString(),
      exercises,
    };
    const savedWorkouts = JSON.parse(localStorage.getItem(`workouts-${user.username}`) || '[]');
    localStorage.setItem(`workouts-${user.username}`, JSON.stringify([workout, ...savedWorkouts]));
    setExercises([]);
  };

  if (!user) {
    return (
      <section id="tracker" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl text-gray-600">Please log in to track your workouts.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="tracker" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle>Training Tracker</SectionTitle>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mt-8"
        >
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-5 gap-4 mb-4">
              <input
                type="text"
                placeholder="Exercise name"
                className="col-span-2 p-2 border rounded"
                value={newExercise.name}
                onChange={(e) => setNewExercise({ ...newExercise, name: e.target.value })}
              />
              <input
                type="number"
                placeholder="Sets"
                className="p-2 border rounded"
                value={newExercise.sets || ''}
                onChange={(e) => setNewExercise({ ...newExercise, sets: parseInt(e.target.value) })}
              />
              <input
                type="number"
                placeholder="Reps"
                className="p-2 border rounded"
                value={newExercise.reps || ''}
                onChange={(e) => setNewExercise({ ...newExercise, reps: parseInt(e.target.value) })}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={addExercise}
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors flex items-center justify-center"
              >
                <Plus className="w-5 h-5" />
              </motion.button>
            </div>

            <motion.div layout className="space-y-2">
              {exercises.map((exercise) => (
                <motion.div
                  key={exercise.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="grid grid-cols-5 gap-4 items-center bg-white p-3 rounded"
                >
                  <div className="col-span-2 font-medium">{exercise.name}</div>
                  <div>{exercise.sets} sets</div>
                  <div>{exercise.reps} reps</div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => removeExercise(exercise.id)}
                    className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition-colors flex items-center justify-center"
                  >
                    <Trash2 className="w-5 h-5 text-gray-600" />
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>

            {exercises.length > 0 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={saveWorkout}
                className="mt-6 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors flex items-center space-x-2 mx-auto"
              >
                <Save className="w-5 h-5" />
                <span>Save Workout</span>
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}