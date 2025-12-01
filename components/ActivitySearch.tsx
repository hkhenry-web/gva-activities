'use client';

import { useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';

const cities = {
  vancouver: {
    name: 'Vancouver',
    url: 'https://anc.ca.apm.activecommunities.com/vancouver/activity/search?activitySearchText='
  },
  burnaby: {
    name: 'Burnaby',
    url: 'https://ca.apm.activecommunities.com/burnaby/activity/search?activitySearchText='
  },
  coquitlam: {
    name: 'Coquitlam',
    url: 'https://cityofcoquitlam.perfectmind.com/23902/Clients/BookMe4?widgetId=15f6af07-39c5-473e-b053-96653f77a406&embed=False'
  },
  portcoquitlam: {
    name: 'Port Coquitlam',
    url: 'https://ca.apm.activecommunities.com/cityofportcoquitlam/activity/search?activitySearchText='
  },
  portmoody: {
    name: 'Port Moody',
    url: 'https://cityofportmoody.perfectmind.com/Contacts/BookMe4?widgetId=15f6af07-39c5-473e-b053-96653f77a406&embed=False'
  },
  newwest: {
    name: 'New Westminster',
    url: 'https://cityofnewwestminster.perfectmind.com/23693/Clients/BookMe4?widgetId=50a33660-b4f7-44d9-9256-e10effec8641'
  },
  richmond: {
    name: 'Richmond',
    url: 'https://richmondcity.perfectmind.com/23650/Clients/BookMe4?widgetId=15f6af07-39c5-473e-b053-96653f77a406'
  },
  surrey: {
    name: 'Surrey',
    url: 'https://cityofsurrey.perfectmind.com/23615/Clients/BookMe4?widgetId=b4059e75-9755-401f-a7b5-d7c75361420d'
  },
  northvan: {  // 包晒 City + District (NVRC 同 DNV 都用同一個系統)
    name: 'North Vancouver',
    url: 'https://nvrc.perfectmind.com/23734/Clients/BookMe4?widgetId=a28b2c65-61af-407f-80d1-eaa58f30a94a'
  },
  westvan: {
    name: 'West Vancouver',
    url: 'https://ca.apm.activecommunities.com/westvanrec/activity_search?activitySearchText='
  },
  delta: {
    name: 'Delta',
    url: 'https://cityofdelta.perfectmind.com/24140/Clients/BookMe4?widgetId=83ce4775-1cd3-4f8f-8189-768fa00e599a'
  },
  mapleridge: {
    name: 'Maple Ridge',
    url: 'https://cityofmapleridge.perfectmind.com/23724/Reports/BookMe4?widgetId=47fd20cf-24b1-4cbe-89a0-d25473cacb49'
  }
};

export function ActivitySearch() {
  const [keyword, setKeyword] = useState('');

  const handleSearch = (cityKey?: string) => {
    const searchText = encodeURIComponent(keyword || ' ');
    
    if (cityKey) {
      window.open(cities[cityKey as keyof typeof cities].url + searchText, '_blank');
    } else {
      Object.entries(cities).forEach(([key, city]) => {
        window.open(city.url + searchText, '_blank');
      });
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12">
      <div className="max-w-2xl mx-auto">
        <div className="flex gap-3 mb-8">
          <input
            type="text"
            placeholder="輸入活動關鍵字（e.g. yoga, badminton, 鋼琴, 游泳...）"
            className="flex-1 px-6 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button
            onClick={() => handleSearch()}
            className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition flex items-center gap-2 font-medium"
          >
            <Search size={24} />
            全部城市搜尋
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.entries(cities).map(([key, city]) => (
            <button
              key={key}
              onClick={() => handleSearch(key)}
              className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition flex items-center justify-between group"
            >
              <span className="font-medium">{city.name}</span>
              <ExternalLink size={18} className="text-gray-400 group-hover:text-blue-600" />
            </button>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-8 text-sm">
          提示：非居民通常只係貴10-25%，而且可以報名 · Drop-in活動完全無限制
        </p>
      </div>
    </div>
  );
}
