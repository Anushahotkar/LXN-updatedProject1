import React from 'react';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import ChartPlaceholder from '../components/ChartPlaceholder';
import LineChartIcon from '../icons/LineChartIcon';
import PieChartIcon from '../icons/PieChartIcon';
import mockData from '../data/mockData';

const CommunicationsDirectorDashboard = () => (
  <div className="px-4 sm:px-6 lg:px-8 py-6">
    {/* Page Header */}
    <PageTitle
      title="Communications Dashboard"
      subtitle="Monitor media, track sentiment, and manage messaging."
    />

    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
      {/* Sentiment Over Time */}
      <div className="lg:col-span-3">
        <ChartPlaceholder title="Sentiment Over Time" icon={LineChartIcon}>
          <div className="w-full h-64 sm:h-80 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-textMuted">
            [Line Chart Placeholder]
          </div>
        </ChartPlaceholder>
      </div>

      {/* Sentiment Breakdown */}
      <div className="lg:col-span-2">
        <ChartPlaceholder title="Sentiment Breakdown" icon={PieChartIcon}>
          <div className="w-full h-64 sm:h-80 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-textMuted">
            [Pie Chart Placeholder]
          </div>
        </ChartPlaceholder>
      </div>

      {/* Media Monitoring Feed */}
      <div className="lg:col-span-3">
        <Card className="p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-textDark dark:text-textLight mb-4">
            Media Monitoring Feed
          </h3>
          <ul className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
            <li className="border-l-4 border-secondaryAccent pl-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors">
              <p className="font-bold">News Article: Hindustan Times</p>
              <p className="text-sm text-textMuted">
                "Candidate's 'Digital India' push gets praise from tech industry leaders..."
              </p>
            </li>
            <li className="border-l-4 border-pinkAccent pl-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors">
              <p className="font-bold">Social Media: @IndianPoliticsWatch</p>
              <p className="text-sm text-textMuted">
                "The latest GST policy changes are causing a stir among small business owners. #GST"
              </p>
            </li>
            <li className="border-l-4 border-gray-400 pl-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors">
              <p className="font-bold">Forum: r/IndiaSpeaks</p>
              <p className="text-sm text-textMuted">
                "Discussion thread on the agricultural reforms shows a deeply divided opinion."
              </p>
            </li>
          </ul>
        </Card>
      </div>

      {/* Key Influencers & A/B Testing */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        <Card className="p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-textDark dark:text-textLight mb-4">
            Key Influencers
          </h3>
          <ul className="space-y-3">
            {mockData.sentimentAnalysis.influencers.map((inf) => (
              <li
                key={inf}
                className="flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-md transition-colors"
              >
                <img
                  src={`https://i.pravatar.cc/150?u=${inf}`}
                  alt={inf}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-textMuted font-medium">{inf}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-textDark dark:text-textLight mb-4">
            A/B Testing Framework
          </h3>
          <p className="text-sm text-textMuted mb-4">
            Test Message A vs. Message B on 'First-time Voters' segment.
          </p>
          <button className="w-full bg-primaryAccent text-black font-semibold py-3 px-4 rounded-lg hover:bg-primaryAccent/80 transition-colors">
            🚀 Launch New Test
          </button>
        </Card>
      </div>
    </div>
  </div>
);

export default CommunicationsDirectorDashboard;
