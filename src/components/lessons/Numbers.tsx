import React, { useState } from 'react';
import { ArrowLeft, Volume2 } from 'lucide-react';

export default function NumbersLesson() {
  const [currentSection, setCurrentSection] = useState(1);

  const sections = [
    {
      title: 'Zahlen 1-10',
      numbers: [
        { number: '1', text: 'eins' },
        { number: '2', text: 'zwei' },
        { number: '3', text: 'drei' },
        { number: '4', text: 'vier' },
        { number: '5', text: 'fünf' },
        { number: '6', text: 'sechs' },
        { number: '7', text: 'sieben' },
        { number: '8', text: 'acht' },
        { number: '9', text: 'neun' },
        { number: '10', text: 'zehn' },
      ]
    },
    {
      title: 'Zahlen 11-20',
      numbers: [
        { number: '11', text: 'elf' },
        { number: '12', text: 'zwölf' },
        { number: '13', text: 'dreizehn' },
        { number: '14', text: 'vierzehn' },
        { number: '15', text: 'fünfzehn' },
        { number: '16', text: 'sechzehn' },
        { number: '17', text: 'siebzehn' },
        { number: '18', text: 'achtzehn' },
        { number: '19', text: 'neunzehn' },
        { number: '20', text: 'zwanzig' },
      ]
    }
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <button onClick={() => window.history.back()} className="flex items-center gap-2 text-blue-900 mb-8">
        <ArrowLeft className="w-5 h-5" />
        Zurück
      </button>

      <h1 className="text-3xl font-bold text-red-600 mb-6">Zahlen und Zählen</h1>

      <div className="flex gap-4 mb-8">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentSection === index + 1
                ? 'bg-blue-900 text-white'
                : 'bg-white text-blue-900 border border-blue-900/10 hover:bg-blue-100'
            }`}
          >
            Teil {index + 1}
          </button>
        ))}
      </div>

      <section className="bg-white p-6 rounded-xl shadow-sm border border-blue-900/10">
        <h2 className="text-xl font-semibold mb-6 text-blue-900">{sections[currentSection - 1].title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {sections[currentSection - 1].numbers.map((item) => (
            <div key={item.number} className="flex items-center justify-between p-4 bg-blue-100 rounded-lg border border-blue-900/10">
              <div>
                <p className="text-2xl font-bold text-blue-900">{item.number}</p>
                <p className="font-medium text-blue-900">{item.text}</p>
              </div>
              <button className="p-2 hover:bg-blue-200 rounded-full">
                <Volume2 className="w-5 h-5 text-red-600" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-between mt-8">
        <button
          onClick={() => setCurrentSection(prev => Math.max(prev - 1, 1))}
          className={`px-6 py-3 rounded-lg font-medium ${
            currentSection === 1
              ? 'bg-white text-blue-400 cursor-not-allowed'
              : 'bg-white text-blue-900 border border-blue-900/10 hover:bg-blue-100'
          }`}
          disabled={currentSection === 1}
        >
          Vorheriger Teil
        </button>
        <button
          onClick={() => setCurrentSection(prev => Math.min(prev + 1, sections.length))}
          className={`px-6 py-3 rounded-lg font-medium ${
            currentSection === sections.length
              ? 'bg-red-600 text-white hover:bg-red-700'
              : 'bg-blue-900 text-white hover:bg-blue-800'
          }`}
        >
          {currentSection === sections.length ? 'Übung starten' : 'Nächster Teil'}
        </button>
      </div>
    </div>
  );
}
