import ActivitySearch from '../components/ActivitySearch';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            大溫 Drop-in 活動時間表（2025最新）
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            一選即顯示 ⋅ 游泳 ⋅ 羽毛球 ⋅ 健身 ⋅ 壁球 全有
          </p>
        </header>
       
        <ActivitySearch />
       
        <footer className="mt-20 text-center text-gray-500 text-sm">
          Made with ❤️ for 大溫港人 ⋅ 2025年12月
        </footer>
      </div>
    </div>
  );
}
