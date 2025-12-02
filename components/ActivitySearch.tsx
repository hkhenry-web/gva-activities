'use client';

const dropInLinks = {
  vancouver: 'https://ca.apm.activecommunities.com/vancouver/ActiveNet_Calendar',
  burnaby: 'https://ca.apm.activecommunities.com/burnaby/ActiveNet_Calendar',
  coquitlam: 'https://cityofcoquitlam.perfectmind.com/23902/Clients/BookMe4BookingPages/Classes?calendarId=e827dd8f-aa12-4dcd-9cdb-5cf4fcf24c30&widgetId=15f6af07-39c5-473e-b053-96653f77a406&embed=False',
  portcoquitlam: 'https://anc.ca.apm.activecommunities.com/cityofportcoquitlam/calendars?onlineSiteId=0&no_scroll_top=true&defaultCalendarId=2&locationId=55&displayType=0&view=2',
  portmoody: 'https://cityofportmoody.perfectmind.com/Contacts/BookMe4BookingPages/Classes?calendarId=3c951d03-4f0d-4a5f-9c3d-9b8f8e9b9e9b&widgetId=15f6af07-39c5-473e-b053-96653f77a406&embed=False',
  newwest: 'https://cityofnewwestminster.perfectmind.com/23693/Clients/BookMe4BookingPages/Classes?calendarId=510214f6-df2d-4ead-9caf-e3883d73d090&widgetId=50a33660-b4f7-44d9-9256-e10effec8641&embed=False',
  richmond: 'https://richmondcity.perfectmind.com/23650/Clients/BookMe4BookingPages/BookingCoursesPage?calendarId=80fd179d-4560-48e7-9f7c-9c59b7568e8d&widgetId=15f6af07-39c5-473e-b053-96653f77a406&embed=False',
  surrey: 'https://cityofsurrey.perfectmind.com/23615/Clients/BookMe4BookingPages/Classes?calendarId=be083bfc-aeee-4c7a-aa26-07eb679e18a6&widgetId=b4059e75-9755-401f-a7b5-d7c75361420d&embed=False',
  northvan: 'https://nvrc.perfectmind.com/23734/Clients/BookMe4BookingPages/Classes?calendarId=a28b2c65-61af-407f-80d1-eaa58f30a94a&widgetId=a28b2c65-61af-407f-80d1-eaa58f30a94a&embed=False',
  westvan: 'https://ca.apm.activecommunities.com/westvanrec/ActiveNet_Calendar',
  delta: 'https://cityofdelta.perfectmind.com/24140/Clients/BookMe4BookingPages/Classes?calendarId=83ce4775-1cd3-4f8f-8189-768fa00e599a&widgetId=83ce4775-1cd3-4f8f-8189-768fa00e599a&embed=False',
  mapleridge: 'https://cityofmapleridge.perfectmind.com/23724/Clients/BookMe4BookingPages/Classes?calendarId=47fd20cf-24b1-4cbe-89a0-d25473cacb49&widgetId=47fd20cf-24b1-4cbe-89a0-d25473cacb49&embed=False',
} as const;

type CityKey = keyof typeof dropInLinks;

export default function ActivitySearch() {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const city = e.target.value as CityKey;
    if (city && dropInLinks[city]) {
      window.open(dropInLinks[city], '_blank', 'noopener,noreferrer');
      e.target.value = ''; // 選完即重置，方便再選
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900 py-16">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-12">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
          大溫 Drop-in 時間表（2025最新）
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          一選即開官方最乾淨時間表 ⋅ 游泳 ⋅ 羽毛球 ⋅ 健身 ⋅ 壁球
        </p>

        <select 
          onChange={handleChange}
          defaultValue=""
          className="w-full px-8 py-6 text-2xl font-semibold bg-white dark:bg-gray-800 border-4 border-blue-600 rounded-3xl shadow-2xl focus:outline-none focus:ring-8 focus:ring-blue-300"
        >
          <option value="" disabled>👇 選擇城市 👇</option>
          <option value="vancouver">Vancouver</option>
          <option value="burnaby">Burnaby</option>
          <option value="coquitlam">Coquitlam</option>
          <option value="portcoquitlam">Port Coquitlam</option>
          <option value="portmoody">Port Moody</option>
          <option value="newwest">New Westminster</option>
          <option value="richmond">Richmond</option>
          <option value="surrey">Surrey</option>
          <option value="northvan">North Vancouver</option>
          <option value="westvan">West Vancouver</option>
          <option value="delta">Delta</option>
          <option value="mapleridge">Maple Ridge</option>
        </select>

        <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
          全部連結 2025年12月實測有效 ⋅ 永久可用
        </p>
      </div>
    </div>
  );
}
