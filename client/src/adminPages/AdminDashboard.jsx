import React, { useState } from 'react';
import { 
  BarChart3, 
  Calendar, 
  Users, 
  TrendingUp, 
  DollarSign,
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeNav, setActiveNav] = useState('Dashboard');

  const dashboardData = {
    stats: [
      {
        title: 'Live Events',
        value: '2',
        change: '+1 from last month',
        icon: Calendar,
        iconBg: 'bg-blue-500/10',
        iconColor: 'text-blue-500'
      },
      {
        title: 'Total Registrations',
        value: '434',
        change: '+12% from last month',
        icon: Users,
        iconBg: 'bg-cyan-500/10',
        iconColor: 'text-cyan-500'
      },
      {
        title: 'Attendance Rate',
        value: '84%',
        change: '+2% from last month',
        icon: TrendingUp,
        iconBg: 'bg-emerald-500/10',
        iconColor: 'text-emerald-500'
      },
      {
        title: 'Revenue',
        value: '$12,450',
        change: '+8% from last month',
        icon: DollarSign,
        iconBg: 'bg-green-500/10',
        iconColor: 'text-green-500'
      }
    ],
    recentRegistrations: [
      {
        name: 'John Doe',
        event: 'Tech Conference 2024',
        status: 'confirmed',
        statusColor: 'bg-cyan-500'
      },
      {
        name: 'Jane Smith',
        event: 'Tech Conference 2024',
        status: 'pending',
        statusColor: 'bg-yellow-500'
      },
      {
        name: 'Mike Johnson',
        event: 'Product Launch',
        status: 'confirmed',
        statusColor: 'bg-cyan-500'
      }
    ],
    upcomingEvents: [
      {
        name: 'John Doe',
        event: 'Tech Conference 2024',
        status: 'confirmed',
        statusColor: 'bg-cyan-500'
      },
      {
        name: 'Jane Smith',
        event: 'Tech Conference 2024',
        status: 'pending',
        statusColor: 'bg-yellow-500'
      },
   ]
  };

  const StatCard = ({ stat }) => {
    const IconComponent = stat.icon;
    return (
      <div className="bg-[#0B1121] rounded-xl p-6 border border-zinc-500">
        <div className="flex items-center gap-4 mb-4">
          <div className={`p-2 rounded-lg ${stat.iconBg}`}>
            <IconComponent className={`w-5 h-5 ${stat.iconColor}`} />
          </div>
          <h3 className="text-gray-300 text-md">{stat.title}</h3>
        </div>
        <div>
          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-sm text-gray-400">{stat.change}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black flex">
      <div className="w-64 border-r border-gray-800">
        <div className="p-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white font-bold">Event<span className='text-cyan-500'>Breakers</span></div>
              <div className="text-sm text-gray-400">Dashboard</div>
            </div>
          </div>

          <div className="mb-4">
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
              Navigation
            </div>
            {['Dashboard', 'Live Events', 'Registrations', 'Past Events', 'Admin Settings'].map((item) => (
              <button
                key={item}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-white text-sm mb-1 ${
                  activeNav === item 
                    ? 'bg-[#0B1121] text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-[#0B1121]'
                }`}
                onClick={() => setActiveNav(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-64 p-4 border-t border-gray-800">
          <div className="flex items-center gap-2 text-white font-bold border border-zinc-900 bg-cyan-500 rounded-md justify-center py-2 px-1 cursor-pointer hover:bg-cyan-700">
            Logout
          </div>
        </div>
      </div>

      <div className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-1">Live Event Overview</h1>
          <p className="text-gray-400">Monitor your events and registrations</p>
        </header>

        <div className="grid grid-cols-4 gap-6 mb-8 ">
          {dashboardData.stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#0B1121] rounded-xl p-6 border border-zinc-500">
            <h2 className="text-xl font-bold text-white mb-6">Registrations : First Year</h2>
            <div className="space-y-4">
              {dashboardData.recentRegistrations.map((reg, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">{reg.name}</div>
                    <div className="text-sm text-gray-400">{reg.event}</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${reg.statusColor}`}>
                    {reg.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0B1121] rounded-xl p-6 border border-zinc-500">
            <h2 className="text-xl font-bold text-white mb-6">Registrations : Second Year</h2>
            <div className="space-y-4">
              {dashboardData.upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">{event.name}</div>
                    <div className="text-sm text-gray-400">{event.event}</div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs ${event.statusColor}`}>{event.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;