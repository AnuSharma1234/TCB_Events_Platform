import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-cyan-500 mb-6">One</h2>
          <ul className="space-y-4 text-sm">
            <li className="font-semibold text-cyan-500">Dashboard</li>
            <li>Tables</li>
            <li>Forms</li>
            <li>UI</li>
            <li>Responsive</li>
            <li>Styles</li>
            <li>Profile</li>
            <li>Login</li>
            <li>Error</li>
            <li>Dropdown</li>
            <li>GitHub</li>
            <li>Vue version</li>
          </ul>
        </div>
        <button className="bg-cyan-500 hover:bg-cyan-600 mt-6 p-2 rounded">Logout</button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 text-white p-2 rounded placeholder:text-gray-400"
          />
          <div className="flex gap-4 items-center text-sm">
            <span>Sample menu ▼</span>
            <span>👤 John Doe ▼</span>
            <span>🔔 ⚙️</span>
          </div>
        </div>

        {/* Trends overview */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">📊 Trends overview</h3>
          <div className="bg-gray-900 rounded-lg p-4">
            {/* Chart Placeholder */}
            <div className="h-64 bg-cyan-500 bg-opacity-20 rounded-lg flex items-center justify-center text-cyan-500">
              Chart Placeholder
            </div>
          </div>
        </section>

        {/* Clients Table */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">👥 Clients</h3>
            <button className="bg-cyan-500 text-sm px-3 py-1 rounded">Responsive table</button>
          </div>
          <div className="overflow-auto">
            <table className="min-w-full bg-gray-900 rounded-lg text-sm">
              <thead>
                <tr className="text-left border-b border-gray-700">
                  <th className="p-3">Name</th>
                  <th className="p-3">Company</th>
                  <th className="p-3">City</th>
                  <th className="p-3">Progress</th>
                  <th className="p-3">Created</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Howell Hand',
                    company: 'Kiehn-Green',
                    city: 'Emelyside',
                    progress: '70%',
                    created: 'Mar 3, 2025',
                  },
                  {
                    name: 'Hope Howe',
                    company: 'Nolan Inc',
                    city: 'Paristown',
                    progress: '45%',
                    created: 'Dec 1, 2025',
                  },
                ].map((client, index) => (
                  <tr key={index} className="border-t border-gray-800">
                    <td className="p-3">{client.name}</td>
                    <td className="p-3">{client.company}</td>
                    <td className="p-3">{client.city}</td>
                    <td className="p-3">
                      <div className="w-full bg-gray-700 h-2 rounded">
                        <div
                          className="bg-cyan-500 h-2 rounded"
                          style={{ width: client.progress }}
                        ></div>
                      </div>
                    </td>
                    <td className="p-3">{client.created}</td>
                    <td className="p-3 space-x-2">
                      <button className="bg-cyan-500 px-2 py-1 rounded">👁️</button>
                      <button className="bg-red-600 px-2 py-1 rounded">🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
