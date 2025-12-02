'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

const regularCities = {
  // ... 您原本嘅 cities object（一般搜尋用）
};

const dropInCities = {
  vancouver: { name: 'Vancouver', url: 'https://anc.ca.apm.activecommunities.com/vancouver/activity/search?activitySearchText=drop-in' },
  burnaby: { name: 'Burnaby', url: 'https://ca.apm.activecommunities.com/burnaby/activity/search?activitySearchText=drop-in' },
  coquitlam: { name: 'Coquitlam', url: 'https://cityofcoquitlam.perfectmind.com/23902/Clients/BookMe4BookingPages/Classes?calendarId=e827dd8f-aa12-4dcd-9cdb-5cf4fcf24c30&widgetId=15f6af07-39c5-473e-b053-96653f77a406&embed=False' }, // Adult Drop-in
  portcoquitlam: { name: 'Port Coquitlam', url: 'https://ca.apm.activecommunities.com/cityofportcoquitlam/activity/search?activitySearchText=drop-in' },
  portmoody: { name: 'Port Moody', url: 'https://cityofportmoody.perfectmind.com/Contacts/BookMe4?widgetId=15f6af07-39c5-473e-b053-96653f77a406&embed=False' }, // 主頁最快，用戶可即刻 filter Drop-in
  newwest: { name: 'New Westminster', url: 'https://cityofnewwestminster.perfectmind.com/23693/Clients/BookMe4BookingPages/Classes?calendarId=510214f6-df2d-4ead-9caf-e3883d73d090&widgetId=50a33660-b4f7-44d9-9256-e10effec8641&embed=False' }, // Sports Drop-in（您想要嘅格式）
  richmond: { name: 'Richmond', url: 'https://richmondcity.perfectmind.com/23650/Clients/BookMe4BookingPages/BookingCoursesPage?calendarId=80fd179d-4560-48e7-9f7c-9c59b7568e8d&widgetId=15f6af07-39c5-473e-b053-96653f77a406&embed=False' }, // Sports Drop-in
  surrey: { name: 'Surrey', url: 'https://cityofsurrey.perfectmind.com/23615/Clients/BookMe4BookingPages/Classes?calendarId=be083bfc-aeee-4c7a-aa26-07eb679e18a6&widgetId=b4059e75-9755-401f-a7b5-d7c75361420d&embed=False' }, // Drop-in Sports（超齊！）
  northvan: { name: 'North Vancouver', url: 'https://nvrc.perfectmind.com/23734/Clients/BookMe4?widgetId=a28b2c65-61af-407f-80d1-eaa58f30a94a' }, // 主頁最快
  westvan: { name: 'West Vancouver', url: 'https://ca.apm.activecommunities.com/westvanrec/activity_search?activitySearchText=drop-in' },
  delta: { name: 'Delta', url: 'https://cityofdelta.perfectmind.com/24140/Clients/BookMe4?widgetId=83ce4775-1cd3-4f8f-8189-768fa00e599a' }, // 主頁最快
  mapleridge: { name: 'Maple Ridge', url: 'https://cityofmapleridge.perfectmind.com/23724/Reports/BookMe4?widgetId=47fd20cf-24b1-4cbe-89a0-d25473cacb49' },
};

export default function ActivitySearch() {
  const [keyword, setKeyword] = useState('');
  const [selectedCity, setSelectedCity] = useState<'all' | 'dropin'>('all');

  const handleSearch = () => {
    const term = keyword.trim() || 'drop-in'; // 預設 drop-in

    const citiesToUse = selectedCity === 'dropin' ? dropInCities : regularCities;
    const citiesToOpen = selectedCity === 'all' ? Object.values(citiesToUse) : [citiesToUse[selectedCity] || Object.values(citiesToUse)[0]];

    citiesToOpen.forEach((city) => {
      const finalUrl = city.url.includes('activitySearchText=') ? city.url + encodeURIComponent(term) : city.url;
      window.open(finalUrl, '_blank', 'noopener,noreferrer');
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      {/* 原本搜尋列保持不變 */}

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setSelectedCity('all')}
          className={`px-8 py-4 rounded-lg font-bold transition ${selectedCity === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
        >
          一般活動搜尋
        </button>
        <button
          onClick={() => {
            setSelectedCity('dropin');
            setKeyword(''); // Drop-in mode 唔使關鍵字
            handleSearch();
          }}
          className="px-8 py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition"
        >
          🔥 一鍵只看 Drop-in（最實用！）
        </button>
      </div>

      <p className="text-center text-sm text-gray-500">
        Drop-in Only 模式：ACTIVE Net 城市自動顯示 Drop-in timetable<br />
        PerfectMind 城市開專門 Drop-in 頁面（一開即見，超乾淨）
      </p>
    </div>
  );
}
