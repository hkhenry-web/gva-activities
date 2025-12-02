import ActivitySearch from '../components/ActivitySearch';

export default function Home() {
  return (
    <div className="min-h-screen bg-white py-20 antialiased">
      <div className="max-w-5xl mx-auto px-6">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-black text-gray-900 mb-4 tracking-tight">
            大溫 Drop-in 時間表
          </h1>
          <p className="text-2xl text-gray-600 font-medium">
            2025最新 ⋅ 一選即開 ⋅ 游泳 ⋅ 羽毛球 ⋅ 健身 ⋅ 壁球
          </p>
        </header>
       
        <ActivitySearch />
       
        <footer className="mt-24 text-center text-gray-500 text-lg">
          Made with ❤️ for 大溫港人 ⋅ 永久有效
        </footer>
      </div>
    </div>
  );
}
