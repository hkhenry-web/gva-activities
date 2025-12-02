'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

const cities = {
  all: { name: 'All Cities', url: '' }, // 只是用來做選單
  vancouver: { 
    name: 'Vancouver', 
    url: 'https://anc.ca.apm.activecommunities.com/vancouver/activity/search?activitySearchText=',
    supportsKeyword: true 
  },
  burnaby: { 
    name: 'Burnaby', 
    url: 'https://ca.apm.activecommunities.com/burnaby/activity/search?activitySearchText=',
    supportsKeyword: true 
  },
  coquitlam: { 
    name: 'Coquitlam', 
    url: 'https://cityofcoquitlam.perfectmind.com/23902/Clients/BookMe4?widgetId=15f6af07-39c5-473e-b053-96653f77a406&embed=False',
    supportsKeyword: false 
  },
  portcoquitlam: { 
    name: 'Port Coquitlam', 
    url: 'https://ca.apm.activecommunities.com/cityofportcoquitlam/activity/search?activitySearchText=',
    supportsKeyword: true 
  },
  portmoody: { 
    name: 'Port Moody', 
    url: 'https://cityofportmoody.perfectmind.com/Contacts/BookMe4?widgetId=15f6af07-39c5-473e-b053-96653f77a406&embed=False',
    supportsKeyword: false 
  },
  newwest: { 
    name: 'New Westminster', 
    url: 'https://cityofnewwestminster.perfectmind.com/23693/Clients/BookMe4?widgetId=50a33660-b4f7-44d9-9256-e10effec8641',
    supportsKeyword: false 
  },
  richmond: { 
    name: 'Richmond', 
    url: 'https://richmondcity.perfectmind.com/23650/Clients/BookMe4?widgetId=15f6af07-39c5-473e-b053-96653f77a406',
    supportsKeyword: false 
  },
  surrey: { 
    name: 'Surrey', 
    url: 'https://cityofsurrey.perfectmind.com/23615/Clients/BookMe4?widgetId=b4059e75-9755-401f-a7b5-d7c75361420d',
    supportsKeyword: false 
  },
  northvan: { 
    name: 'North Vancouver (City + District)', 
    url: 'https://nvrc.perfectmind.com/23734/Clients/BookMe4?widgetId=a28b2c65-61af-407f-80d1-eaa58f30a94a',
    supportsKeyword: false 
  },
  westvan: { 
    name: 'West Vancouver', 
    url: 'https://ca.apm.activecommunities.com/westvanrec/activity_search?activitySearchText=',
    supportsKeyword: true 
  },
  delta: { 
    name: 'Delta', 
    url: 'https://cityofdelta.perfectmind.com/24140/Clients/BookMe4?widgetId=83ce4775-1cd3-4f8f-8189-768fa00e599a',
    supportsKeyword: false 
  },
  mapleridge: { 
    name: 'Maple Ridge', 
    url: 'https://cityofmapleridge.perfectmind.com/23724/Reports/BookMe4?widgetId=47fd20cf-24b1-4cbe-89a0-d25473cacb49',
    supportsKeyword: false 
  },
} as const;

type CityKey = keyof typeof cities;

export default function ActivitySearch() {
  const [keyword, setKeyword] = useState('');
  const [selectedCity, setSelectedCity] = useState<CityKey>('all');

  const handleSearch = () => {
    const term = keyword.trim();
    if (!term) return;

    const encoded = encodeURIComponent(term);

    // 決定要開哪些城市
    const citiesToOpen = selectedCity === 'all' 
      ? (Object.keys(cities).filter(k => k !== 'all') as CityKey[])
      : [selectedCity];

    citiesToOpen.forEach((key) => {
      const city = cities[key];
      const finalUrl = city.supportsKeyword ? city.url + encoded : city.url;
      window.open(finalUrl, '_blank', 'noopener,noreferrer');
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center">GVA Activities Quick Search</h2>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <select 
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value as CityKey)}
          className="px-4 py-3 border rounded-lg bg-white dark:bg-gray-800"
        >
          {Object.entries(cities).map(([key, city]) => (
            <option key={key} value={key}>{city.name}</option>
          ))}
        </select>

        <div className="relative flex-1">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="e.g. Swimming, Badminton, Piano, Pottery..."
            className="w-full px-4 py-3 pl-12 border rounded-lg bg-white dark:bg-gray-800"
          />
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>

        <button
          onClick={handleSearch}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      <p className="text-center text-sm text-gray-500">
        {selectedCity === 'all' ? 'Will open all 12 cities in new tabs' : 'Will open only selected city'}
        <br />
        Vancouver, Burnaby, Port Coquitlam, West Vancouver will auto-search keyword.
      </p>
    </div>
  );
}
