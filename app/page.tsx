import ActivitySearch from '../components/ActivitySearch';
import FeeTable from '../components/FeeTable';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            大溫社區中心活動一站式搜尋
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Vancouver ⋅ Burnaby ⋅ Coquitlam ⋅ New West ⋅ Richmond ⋅ Surrey ⋅ 北溫 ⋅ 西溫
          </p>
        </header>
        
        <ActivitySearch />
        <FeeTable />
        
        <footer className="mt-20 text-center text-gray-500 text-sm">
          Made with ❤️ for 大溫港人 ⋅ 2025
        </footer>
      </div>
    </div>
  );
}
