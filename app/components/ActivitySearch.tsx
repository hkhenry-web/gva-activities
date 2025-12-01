'use client';

import { useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';

const cities = {
  vancouver: { name: 'Vancouver', url: 'https://ca.apm.activecommunities.com/vancouver/activity/search?activitySearchText=' },
  burnaby: { name: 'Burnaby', url: 'https://ca.apm.activecommunities.com/burnaby/activity/search?activitySearchText=' },
  coquitlam: { name: 'Coquitlam', url: 'https://ca.apm.activecommunities.com/coquitlam/activity/search?activitySearchText=' },
  portcoquitlam: { name: 'Port Coquitlam', url: 'https://ca.apm.activecommunities.com/portcoquitlam/activity/search?activitySearchText=' },
  portmoody: { name: 'Port Moody', url: 'https://ca.apm.activecommunities.com/portmoody/activity/search?activitySearchText=' },
  newwest: { name: 'New Westminster', url: 'https://ca.apm.activecommunities.com/newwestparksrecreation/activity/search?activitySearchText=' },
  richmond: { name: 'Richmond', url: 'https://ca.apm.activecommunities.com/richmond/activity/search?activitySearchText=' },
  surrey: { name: 'Surrey', url: 'https://ca.apm.activecommunities.com/surrey/activity/search?activitySearchText=' },
  northvan_city: { name: 'North Van (City)', url: 'https://ca.apm.activecommunities.com/nvrc/activity/search?activitySearchText=' },
  northvan_district: { name: 'North Van (District)', url: 'https://ca.apm.activecommunities.com/dnv/activity/search?activitySearchText=' },
  westvan: { name: 'West Vancouver', url: 'https://ca.apm.activecommunities.com/westvancouverrec/activity/search?activitySearchText=' },
  delta: { name: 'Delta', url: 'https://ca.apm.activecommunities.com/delta/activity/search?activitySearchText=' },
  mapleridge: { name: 'Maple Ridge', url: 'https://ca.apm.activecommunities.com/mapleridge/activity/search?activitySearchText=' },
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
