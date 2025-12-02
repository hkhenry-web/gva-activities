export default function FeeTable() {
  return (
    <div className="mt-12 bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-amber-800 dark:text-amber-200">
        2025大溫非居民加價一覽（越平越值得跨區！）
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-amber-200 dark:bg-amber-800">
              <th className="p-3">城市</th>
              <th className="p-3">非居民加價</th>
              <th className="p-3">港人推介</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-gray-700">
              <td className="p-3">Surrey</td>
              <td className="p-3 font-bold text-green-600">無加價 ⭐⭐⭐⭐⭐</td>
              <td className="p-3">最抵！課多位多</td>
            </tr>
            <tr className="border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <td className="p-3">New Westminster</td>
              <td className="p-3 font-bold text-green-600">無加價 ⭐⭐⭐⭐</td>
              <td className="p-3">Century House長者課超多</td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="p-3">Burnaby</td>
              <td className="p-3 font-bold text-green-600">+10% ⭐⭐⭐⭐</td>
              <td className="p-3">性價比之王</td>
            </tr>
            <tr className="border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <td className="p-3">North Vancouver</td>
              <td className="p-3 font-bold text-green-600">無加價 ⭐⭐⭐⭐</td>
              <td className="p-3">Delbrook/Karen Magnussen 超靚</td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="p-3">Coquitlam</td>
              <td className="p-3">+20-25%</td>
              <td className="p-3">Poirier 羽毛球超多場</td>
            </tr>
            <tr className="border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <td className="p-3">Vancouver</td>
              <td className="p-3">+25%</td>
              <td className="p-3">課質最好，但最貴</td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="p-3">Richmond</td>
              <td className="p-3">+25%</td>
              <td className="p-3">Watermania 玩水一流</td>
            </tr>
            <tr className="border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <td className="p-3">West Vancouver</td>
              <td className="p-3">+30%</td>
              <td className="p-3">最豪，但設施頂級</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-center text-sm text-gray-600 mt-4">
        資料來源：各市官方ActiveNet系統（2025年11月確認）<br />
        Drop-in 活動（badminton、swim、gym）99%無加價限制！
      </p>
    </div>
  );
}
