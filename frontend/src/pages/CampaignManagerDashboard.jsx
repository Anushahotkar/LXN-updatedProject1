import React from 'react';
import PageTitle from '../components/PageTitle';
import KPI from '../components/KPI';
import ChartPlaceholder from '../components/ChartPlaceholder';
import Card from '../components/Card';
import MapIcon from '../icons/MapIcon';
import TrendingUpIcon from '../icons/TrendingUpIcon';
import PieChartIcon from '../icons/PieChartIcon';
import mockData from '../data/mockData';

const CampaignManagerDashboard = () => (
  <div className="space-y-8">
    {/* Page Header */}
    <PageTitle
      title="Main Dashboard"
      subtitle="A complete overview of your campaign's performance."
    />

    {/* KPI Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {[
        {
          title: 'Voter Sentiment',
          value: mockData.kpis.sentimentScore.value,
          trend: mockData.kpis.sentimentScore.trend,
        },
        {
          title: 'Predicted Turnout',
          value: mockData.kpis.predictedTurnout.value,
          trend: mockData.kpis.predictedTurnout.trend,
        },
        {
          title: 'Fundraising',
          value: mockData.kpis.fundraisingProgress.value.split(' ')[0],
          trend: mockData.kpis.fundraisingProgress.trend,
        },
        {
          title: 'Key Issue Focus',
          value: mockData.kpis.keyIssueFocus || 'Youth Employment',
          trend: 0, // "0% vs last week"
        },
      ].map((kpi, idx) => (
        <div
          key={idx}
          className="transition-transform transform hover:scale-[1.02]"
        >
          <KPI {...kpi} />
        </div>
      ))}
    </div>

    {/* Charts Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ChartPlaceholder title="Geospatial Sentiment (Indian States)" icon={MapIcon}>
        <div className="w-full h-64 md:h-80 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-textMuted">
          [Interactive Map Placeholder]
        </div>
      </ChartPlaceholder>

      <ChartPlaceholder title="Election Win Probability" icon={TrendingUpIcon}>
        <div className="w-full h-64 md:h-80 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-textMuted">
          [Line Chart Placeholder]
        </div>
      </ChartPlaceholder>
    </div>

    {/* Full Width Voter Segments */}
    <div className="w-full">
      <Card className="p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold text-textDark dark:text-textLight mb-4">
          Voter Segments
        </h3>
        <div className="space-y-4">
          {mockData.voterSegments.map((segment) => (
            <div key={segment.name}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-textDark dark:text-textLight">
                  {segment.name} ({segment.count.toLocaleString('en-IN')})
                </span>
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-full ${
                    segment.priority === 'High'
                      ? 'bg-pinkAccent text-white'
                      : 'bg-gray-200 dark:bg-gray-600 text-textDark dark:text-textLight'
                  }`}
                >
                  {segment.priority} Priority
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-primaryAccent h-2.5 rounded-full transition-all duration-500 ease-in-out"
                  style={{
                    width: `${(segment.count / 2000000) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>

    {/* Full Width Public Sentiment */}
    <div className="w-full">
      <ChartPlaceholder title="Public Sentiment" icon={PieChartIcon}>
        <div className="w-full h-64 md:h-80 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-textMuted">
          [Pie Chart Placeholder]
        </div>
      </ChartPlaceholder>
    </div>
  </div>
);

export default CampaignManagerDashboard;
