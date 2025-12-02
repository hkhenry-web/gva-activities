import ActivitySearch from '../components/ActivitySearch';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-white py-16"> {/* ← 呢行改咗，永久純白 */}
      <div className="max-w-3xl mx-auto px-6 text-center space-y-12">
        <h1 className="text-5xl font-bold text-gray-800">
          大溫 Drop-in 時間表（2025最新）
        </h1>
        <p className="text-xl text-gray-600">
          一選即開官方最乾淨時間表 ⋅ 游泳 ⋅ 羽毛球 ⋅ 健身 ⋅ 壁球
        </p>

        <ActivitySearch />

        <p className="text-lg text-gray-600 font-medium">
          全部連結 2025年12月實測有效 ⋅ 永久可用
        </p>
      </div>
    </div>
  );
}
