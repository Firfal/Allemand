import React from 'react';
import { ArrowLeft } from 'lucide-react';

const verbs = [
  {
    infinitive: "sein",
    conjugation: {
      ich: "bin",
      du: "bist",
      er: "ist",
      wir: "sind",
      ihr: "seid",
      sie: "sind",
    },
  },
  {
    infinitive: "haben",
    conjugation: {
      ich: "habe",
      du: "hast",
      er: "hat",
      wir: "haben",
      ihr: "habt",
      sie: "haben",
    },
  },
  {
    infinitive: "gehen",
    conjugation: {
      ich: "gehe",
      du: "gehst",
      er: "geht",
      wir: "gehen",
      ihr: "geht",
      sie: "gehen",
    },
  },
  {
    infinitive: "machen",
    conjugation: {
      ich: "mache",
      du: "machst",
      er: "macht",
      wir: "machen",
      ihr: "macht",
      sie: "machen",
    },
  },
];

export default function VerbsLesson() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 text-blue-900 mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        Zurück
      </button>
      
      <h1 className="text-3xl font-bold text-red-600 mb-6">Verben im Präsens</h1>
      <p className="mb-6 text-blue-900">
        Lernen Sie, wie häufige deutsche Verben im Präsens konjugiert werden.
      </p>
      
      {verbs.map((verb, index) => (
        <div
          key={index}
          className="mb-6 bg-white p-6 rounded-xl shadow-sm border border-blue-900/10"
        >
          <h2 className="text-xl font-semibold text-blue-900 mb-4">{verb.infinitive}</h2>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(verb.conjugation).map(([person, form]) => (
              <div key={person} className="flex justify-between">
                <span className="text-blue-900 capitalize">{person}</span>
                <span className="font-medium text-blue-900">{form}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
