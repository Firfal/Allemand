import React, { useState } from 'react';
import { BookOpen, Mic, PenTool, Headphones } from 'lucide-react';

const exercises = [
  {
    id: 1,
    type: 'listening',
    title: 'Hörverstehen: Im Restaurant',
    icon: Headphones,
    difficulty: 'Anfänger',
    duration: '10 Min',
    description: 'Üben Sie das Verstehen von Restaurantgesprächen',
  },
  {
    id: 2,
    type: 'speaking',
    title: 'Aussprache: Tägliche Begrüßungen',
    icon: Mic,
    difficulty: 'Anfänger',
    duration: '5 Min',
    description: 'Üben Sie die Aussprache deutscher Begrüßungen',
  },
  {
    id: 3,
    type: 'writing',
    title: 'Schreiben: Mein Tagesablauf',
    icon: PenTool,
    difficulty: 'Mittelstufe',
    duration: '15 Min',
    description: 'Schreiben Sie einen kurzen Text über Ihren Tagesablauf',
  },
  {
    id: 4,
    type: 'reading',
    title: 'Leseverstehen: Deutsche Nachrichten',
    icon: BookOpen,
    difficulty: 'Fortgeschritten',
    duration: '20 Min',
    description: 'Lesen und verstehen Sie einen aktuellen Nachrichtenartikel',
  },
];

export default function Exercises() {
  const [selectedType, setSelectedType] = useState('all');

  const filteredExercises = selectedType === 'all'
    ? exercises
    : exercises.filter(ex => ex.type === selectedType);

  return (
    <div className="p-8">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-red-600">Übungen</h2>
        <p className="text-white">Wählen Sie eine Übung zur Verbesserung Ihrer Deutschkenntnisse</p>
      </header>

      <div className="flex gap-4 mb-8">
        {['all', 'listening', 'speaking', 'writing', 'reading'].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-lg ${
              selectedType === type
                ? 'bg-blue-900 text-white'
                : 'bg-white text-blue-900 border border-blue-900/10 hover:bg-blue-100'
            }`}
          >
            {type === 'all' ? 'Alle' : 
              type === 'listening' ? 'Hören' : 
              type === 'speaking' ? 'Sprechen' : 
              type === 'writing' ? 'Schreiben' : 'Lesen'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredExercises.map((exercise) => {
          const Icon = exercise.icon;
          return (
            <div
              key={exercise.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-blue-900/10 hover:border-red-200 transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900">{exercise.title}</h3>
                  <p className="text-sm text-blue-700 mt-1">{exercise.description}</p>
                  <div className="flex gap-4 mt-4">
                    <span className="text-sm text-blue-700">{exercise.difficulty}</span>
                    <span className="text-sm text-blue-700">{exercise.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
