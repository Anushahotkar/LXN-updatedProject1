import React from 'react';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';
import { TrendingUp, Users, Target, Briefcase } from 'lucide-react';
import mockData from '../data/mockData';

const iconMap = {
  sentimentScore: TrendingUp,
  predictedTurnout: Users,
  fundraisingProgress: Target,
  keyIssueFocus: Briefcase
};

const DailyBriefing = () => {
  const { kpis, positiveMentions, negativeMentions, schedule } = mockData;

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <PageTitle title="Daily Briefing" />

      {/* KPIs Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Metrics</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(kpis).map(([key, data], index) => {
            const value = typeof data === 'object' ? data.value : data;
            const trend = typeof data === 'object' ? data.trend : null;
            const Icon = iconMap[key] || TrendingUp;

            return (
              <Card
                key={index}
                className="p-4 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-sm font-medium text-gray-500 capitalize">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </h3>
                </div>
                <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
                {trend !== null && (
                  <span
                    className={`mt-1 text-sm font-medium ${
                      trend > 0 ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {trend > 0 ? `+${trend}` : trend}%
                  </span>
                )}
              </Card>
            );
          })}
        </div>
      </section>

      {/* Positive Mentions */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Positive Mentions</h2>
        <div className="space-y-3">
          {positiveMentions.map((mention, idx) => (
            <Card key={idx} className="p-4 hover:bg-green-50 transition-colors duration-200">
              <p className="text-sm text-gray-700">{mention}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Negative Mentions */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Negative Mentions</h2>
        <div className="space-y-3">
          {negativeMentions.map((mention, idx) => (
            <Card key={idx} className="p-4 hover:bg-red-50 transition-colors duration-200">
              <p className="text-sm text-gray-700">{mention}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Today's Schedule</h2>
        <div className="space-y-3">
          {schedule.map((event, idx) => (
            <Card
              key={idx}
              className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.details}</p>
              </div>
              <span className="mt-2 sm:mt-0 text-sm text-gray-500">{event.time}</span>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DailyBriefing;
