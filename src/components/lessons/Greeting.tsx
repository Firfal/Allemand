import React from 'react';
import { ArrowLeft, Volume2 } from 'lucide-react';

export default function GreetingLesson() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <button onClick={() => window.history.back()} className="flex items-center gap-2 text-blue-900 mb-8">
        <ArrowLeft className="w-5 h-5" />
        Zurück
      </button>
      
      <h1 className="text-3xl font-bold text-red-600 mb-6">Deutsche Begrüßungen</h1>
      
      <div className="space-y-8">
        <section className="bg-white p-6 rounded-xl shadow-sm border border-blue-900/10">
          <h2 className="text-xl font-semibold mb-4 text-blue-900">Formelle Begrüßungen</h2>
          <div className="space-y-4">
            {[
              { text: 'Guten Morgen', translation: 'Good morning' },
              { text: 'Guten Tag', translation: 'Good day' },
              { text: 'Guten Abend', translation: 'Good evening' },
            ].map((greeting) => (
              <div key={greeting.text} className="flex items-center justify-between p-3 bg-blue-100 rounded-lg">
                <div>
                  <p className="font-medium text-lg text-blue-900">{greeting.text}</p>
                  <p className="text-blue-700">{greeting.translation}</p>
                </div>
                <button className="p-2 hover:bg-blue-200 rounded-full">
                  <Volume2 className="w-5 h-5 text-red-600" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-blue-900/10">
          <h2 className="text-xl font-semibold mb-4 text-blue-900">Informelle Begrüßungen</h2>
          <div className="space-y-4">
            {[
              { text: 'Hallo', translation: 'Hello' },
              { text: 'Hi', translation: 'Hi' },
              { text: 'Servus', translation: 'Hi/Bye (Southern Germany/Austria)' },
            ].map((greeting) => (
              <div key={greeting.text} className="flex items-center justify-between p-3 bg-blue-100 rounded-lg">
                <div>
                  <p className="font-medium text-lg text-blue-900">{greeting.text}</p>
                  <p className="text-blue-700">{greeting.translation}</p>
                </div>
                <button className="p-2 hover:bg-blue-200 rounded-full">
                  <Volume2 className="w-5 h-5 text-red-600" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="flex justify-end">
          <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700">
            Übung starten
          </button>
        </div>
      </div>
    </div>
  );
}
