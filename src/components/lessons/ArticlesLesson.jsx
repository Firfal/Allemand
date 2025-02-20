import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function ArticlesLesson() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 text-blue-900 mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        Zurück
      </button>
      
      <h1 className="text-3xl font-bold text-red-600 mb-6">Deutsche Artikel</h1>
      <p className="mb-6 text-blue-900">
        Lernen Sie, welche Artikel im Deutschen verwendet werden und wie sie sich in Genus, Numerus und Kasus ändern.
      </p>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-900/10">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">Bestimmte Artikel</h2>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>
            <strong>Der</strong> – maskulin (z.B. der Mann, der Hund)
          </li>
          <li>
            <strong>Die</strong> – feminin (z.B. die Frau, die Katze)
          </li>
          <li>
            <strong>Das</strong> – neutral (z.B. das Haus, das Auto)
          </li>
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-900/10 mt-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">Unbestimmte Artikel</h2>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>
            <strong>Ein</strong> – maskulin/neutrum (z.B. ein Mann, ein Auto)
          </li>
          <li>
            <strong>Eine</strong> – feminin (z.B. eine Frau, eine Blume)
          </li>
        </ul>
      </div>
    </div>
  );
}
