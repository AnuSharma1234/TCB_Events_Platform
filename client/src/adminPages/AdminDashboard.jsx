import React, { useState } from 'react';
import { 
  BarChart3, 
  Calendar, 
  Users, 
  Clock,
  MapPin,
  TrendingUp,
  Search,
  MoreHorizontal,
  Star
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeNav, setActiveNav] = useState('Dashboard');

  const dashboardData = {
    stats: [
      {
        title: 'Live Event',
        value: 'Hacksphere 3.0',
        icon: Calendar,
        iconBg: 'bg-blue-500/10',
        iconColor: 'text-blue-500'
      },
      {
        title: 'Total Registrations',
        value: '434 Registrations',
        icon: Users,
        iconBg: 'bg-cyan-500/10',
        iconColor: 'text-cyan-500'
      },
      {
        title: 'Total Teams',
        value: '84 Teams',
        icon: TrendingUp,
        iconBg: 'bg-emerald-500/10',
        iconColor: 'text-emerald-500'
      },
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
   ],
   registrationData: {
    stats: {
      total: 4,
      approved: 2,
      pending: 1,
      rejected: 1
    },
    teams: [
      {
        id: 'CD',
        name: 'Code Crushers',
        leader: {
          name: 'Alex Johnson',
          email: 'alex.johnson@university.edu'
        },
        category: 'Web Development',
        members: {
          count: 3,
          list: 'Sarah Wilson, Mike Chen...'
        },
        date: '15/1/2024',
        status: 'Approved'
      },
      {
        id: 'DE',
        name: 'Debug Dynasty',
        leader: {
          name: 'Jessica Brown',
          email: 'jessica.brown@university.edu'
        },
        category: 'Mobile App',
        members: {
          count: 3,
          list: 'Tom Wilson, Lisa Garcia...'
        },
        date: '16/1/2024',
        status: 'Pending'
      },
      {
        id: 'BI',
        name: 'Binary Builders',
        leader: {
          name: 'David Martinez',
          email: 'david.martinez@university.edu'
        },
        category: 'AI/ML',
        members: {
          count: 3,
          list: 'Anna Taylor, Chris Anderson...'
        },
        date: '17/1/2024',
        status: 'Rejected'
      },
      {
        id: 'PI',
        name: 'Pixel Pirates',
        leader: {
          name: 'Sophie Turner',
          email: 'sophie.turner@university.edu'
        },
        category: 'Game Development',
        members: {
          count: 3,
          list: 'Jake Miller, Zoe Clark...'
        },
        date: '18/1/2024',
        status: 'Approved'
      }
    ]
  },
  pastEvents: [
    {
      id: 1,
      title: 'Tech Conference 2024',
      description: 'Annual technology conference featuring the latest innovations in AI, blockchain, and web development.',
      date: 'March 15, 2024',
      time: '9:00 AM - 6:00 PM',
      venue: 'Convention Center',
      attendance: {
        attended: 1250,
        capacity: 1500,
        rate: 83
      },
      isFeatured: true,
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Design Workshop',
      description: 'Interactive workshop on modern UI/UX design principles and best practices for digital products.',
      date: 'March 8, 2024',
      time: '2:00 PM - 5:00 PM',
      venue: 'Design Studio',
      attendance: {
        attended: 85,
        capacity: 100,
        rate: 85
      },
      isFeatured: false,
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Startup Pitch Night',
      description: 'Local entrepreneurs present their innovative ideas to investors and the community.',
      date: 'February 28, 2024',
      time: '7:00 PM - 10:00 PM',
      venue: 'Innovation Hub',
      attendance: {
        attended: 320,
        capacity: 350,
        rate: 91
      },
      isFeatured: true,
      status: 'Completed'
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

  const LiveEventCard = () => {
    return (
      <div className="bg-[#0B1121] rounded-2xl overflow-hidden border border-gray-800">
        <div className="relative border border-zinc-600">
          {/* Event Banner */}
          <div className="relative h-[400px] bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="absolute top-4 left-4">
              <span className="bg-red-500/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                LIVE NOW
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 border-4 border-gray-400/30 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-400/10 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="p-6 border bg-[#0B1121]">
            <h2 className="text-2xl font-bold text-white mb-3">
              Hacksphere 3.0
            </h2>
            <p className="text-gray-400 mb-6">
              A 8 hour hackathon, hosted by thecodebreakers
            </p>

            {/* Event Meta Information */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">December 18, 2024</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">2:00 PM - 8:00 PM EST</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">San Francisco Convention Center</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">2,847 attendees</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex justify-between'>
            <div className="flex gap-3">
              <button className="bg-cyan-500 hover:bg-cyan-600 border border-white text-white px-4 py-2 rounded-lg cursor-crosshair text-sm font-medium">
                Edit Event
              </button>
              <button className="border border-white text-white bg-red-500 cursor-pointer px-4 py-2 rounded-lg text-sm font-medium">
                Stop Registrations
              </button>
            </div>
              <button className="border border-white text-white bg-red-500 cursor-pointer px-4 py-2 rounded-lg text-sm font-medium">
                Close Event
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeNav) {
      case 'Live Events':
        return (
          <div className="flex-1 p-8">
            <header className="mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">Live Events</h1>
              <p className="text-gray-400">Currently ongoing events</p>
            </header>
            <div className="max-w-4xl">
              <LiveEventCard />
            </div>
          </div>
        );
      case 'Dashboard':
        return (
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
        );
      case 'Registrations':
        return (
          <div className="flex-1 p-8">
            <header className="mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">Registration Management</h1>
              <p className="text-gray-400">Manage event registrations for teams</p>
            </header>

            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              <div className="bg-[#0B1121] rounded-xl p-6 border border-gray-800">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Users className="w-4 h-4" />
                  <span>Total Teams</span>
                </div>
                <div className="text-3xl font-bold text-white">{dashboardData.registrationData.stats.total}</div>
              </div>
           </div>

            {/* Teams Table Section */}
            <div className="bg-[#0B1121] rounded-xl border border-gray-800 p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Hacksphere 3.0 Registrations</h2>
              <p className="text-gray-400 mb-6">Manage and review team registrations for the event</p>

              {/* Search and Filters */}
              <div className="flex justify-between items-center mb-6">
                <div className="relative flex-1 max-w-2xl">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search teams, leaders, or categories..."
                    className="w-full bg-[#1A2234] text-gray-300 pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-lg cursor-pointer text-gray-400 hover:bg-[#1A2234] text-sm">1st Year</button>
                  <button className="px-4 py-2 rounded-lg text-gray-400 cursor-pointer hover:bg-[#1A2234] text-sm">2nd Year</button>
                </div>
              </div>

              {/* Table */}
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400 text-sm border-b border-gray-800">
                    <th className="text-left pb-4">Team</th>
                    <th className="text-left pb-4">Leader</th>
                    <th className="text-left pb-4">Category</th>
                    <th className="text-left pb-4">Members</th>
                    <th className="text-left pb-4">Registration Date</th>
                    <th className="text-left pb-4">Status</th>
                    <th className="text-left pb-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardData.registrationData.teams.map((team) => (
                    <tr key={team.id} className="border-b border-gray-800">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-cyan-500">
                            {team.id}
                          </div>
                          <span className="text-white">{team.name}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <div>
                          <div className="text-white">{team.leader.name}</div>
                          <div className="text-gray-400 text-sm">{team.leader.email}</div>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm">
                          {team.category}
                        </span>
                      </td>
                      <td className="py-4">
                        <div>
                          <div className="text-white">{team.members.count} members</div>
                          <div className="text-gray-400 text-sm">{team.members.list}</div>
                        </div>
                      </td>
                      <td className="py-4 text-gray-400">{team.date}</td>
                      <td className="py-4">
                        <span className={`px-3 py-1 rounded-full text-sm
                          ${team.status === 'Approved' ? 'bg-cyan-500/20 text-cyan-500' : 
                            team.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-500' : 
                            'bg-red-500/20 text-red-500'}`}>
                          {team.status}
                        </span>
                      </td>
                      <td className="py-4">
                        <button className="text-gray-400 hover:text-white">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'Past Events':
        return (
          <div className="flex-1 p-8">
            <header className="mb-8">
              <h1 className="text-2xl font-bold text-cyan-400 mb-2">Past Events</h1>
              <p className="text-gray-400">Browse through our previously hosted events and their highlights</p>
            </header>

            <div className="grid grid-cols-3 gap-6">
              {dashboardData.pastEvents.map(event => (
                <div key={event.id} className="bg-[#0B1121] rounded-xl overflow-hidden border border-gray-800">
                  {/* Event Image Placeholder */}
                  <div className="relative h-48 bg-gray-800">
                    <div className="absolute top-3 left-3 flex gap-2">
                      {event.isFeatured && (
                        <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <Star className="w-3 h-3" /> Featured
                        </span>
                      )}
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                        {event.status}
                      </span>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-400 text-sm mb-6">{event.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Clock className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm">{event.venue}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                      <div className="text-cyan-400">{event.attendance.attended} attended</div>
                      <div className="text-gray-500">{event.attendance.capacity} capacity</div>
                    </div>
                    <div className="mt-2 bg-gray-800 rounded-full h-1.5">
                      <div 
                        className="bg-cyan-400 h-full rounded-full" 
                        style={{ width: `${event.attendance.rate}%` }}
                      ></div>
                    </div>
                    <div className="mt-1 text-xs text-gray-400">
                      {event.attendance.rate}% attendance rate
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
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
            {['Dashboard', 'Live Events', 'Registrations', 'Past Events', 'Create New Event'].map((item) => (
              <button
                key={item}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-white cursor-pointer text-sm mb-1 ${
                  activeNav === item 
                    ? 'bg-cyan-950 border border-zinc-500 text-white' 
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

      {renderContent()}
    </div>
  );
};

export default AdminDashboard;