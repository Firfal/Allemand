import React from 'react';
import { MapPin } from 'lucide-react';

const culturalContent = [
  {
    id: 1,
    title: 'Oktoberfest Traditionen',
    location: 'München, Bayern',
    image: 'https://images.unsplash.com/photo-1505489435671-80a165c60816?auto=format&fit=crop&w=800',
    description: 'Lernen Sie das größte Volksfest der Welt und seine reichen Traditionen kennen.',
  },
  {
    id: 2,
    title: 'Die Geschichte der Berliner Mauer',
    location: 'Berlin',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800',
    description: 'Erkunden Sie die Geschichte der Berliner Mauer und ihre Auswirkungen auf die deutsche Gesellschaft.',
  },
  {
    id: 3,
    title: 'Schwarzwälder Küche',
    location: 'Baden-Württemberg',
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=800',
    description: 'Entdecken Sie traditionelle Rezepte und kulinarische Bräuche aus der Schwarzwaldregion.',
  },
];

export default function Cultural() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-red-600">Kulturelle Einblicke</h2>
        <p className="text-white">Entdecken Sie die deutsche Kultur, Geschichte und Traditionen</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {culturalContent.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-blue-900/10">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-blue-900 mb-2">{item.title}</h3>
              <div className="flex items-center gap-2 text-blue-700 text-sm mb-3">
                <MapPin className="w-4 h-4" />
                <span>{item.location}</span>
              </div>
              <p className="text-blue-700">{item.description}</p>
              <button className="mt-4 text-red-600 font-medium hover:text-red-700">
                Mehr erfahren →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
