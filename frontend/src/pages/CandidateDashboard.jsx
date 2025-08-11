import React from 'react';
import PageTitle from '../components/PageTitle';
import KPI from '../components/KPI';
import ChartPlaceholder from '../components/ChartPlaceholder';
import Card from '../components/Card';
import TrendingUpIcon from '../icons/TrendingUpIcon';
import mockData from '../data/mockData';

const CandidateDashboard = () => (
  <div className="space-y-6">
    {/* Page Heading */}
    <PageTitle 
      title="Candidate Dashboard" 
      subtitle="High-level overview of campaign KPIs and media presence." 
    />

    {/* KPIs Row */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <KPI 
        title="Overall Sentiment Score" 
        value={mockData.kpis.sentimentScore.value} 
        trend={mockData.kpis.sentimentScore.trend} 
      />
      <KPI 
        title="Win Probability" 
        value={`${mockData.electionForecast.slice(-1)[0].winProbability}%`} 
        trend={2.1} 
      />
    </div>

    {/* Chart Section */}
    <ChartPlaceholder 
      title="Sentiment Trend (Last 30 Days)" 
      icon={TrendingUpIcon}
      className="min-h-[250px] sm:min-h-[300px]"
    >
      <div className="w-full h-full bg-gray-100 dark:bg-gray-700 rounded-md flex items-center justify-center text-textMuted">
        [Line Chart Placeholder]
      </div>
    </ChartPlaceholder>

    {/* Highlights & Topics */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Key Media Highlights */}
      <Card className="p-4 md:p-6">
        <h3 className="text-lg font-semibold text-textDark dark:text-textLight mb-4">
          Key Media Highlights
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="w-3 h-3 rounded-full bg-secondaryAccent mt-1 shrink-0"></span>
            <p className="text-textMuted text-sm md:text-base">
              "Positive economic outlook praised in The Times of India."
            </p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-3 h-3 rounded-full bg-pinkAccent mt-1 shrink-0"></span>
            <p className="text-textMuted text-sm md:text-base">
              "Agricultural policy questioned by opposition on India Today."
            </p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-3 h-3 rounded-full bg-gray-400 mt-1 shrink-0"></span>
            <p className="text-textMuted text-sm md:text-base">
              "Neutral coverage on infrastructure from All India Radio."
            </p>
          </li>
        </ul>
      </Card>

      {/* Top Discussion Topics */}
      <Card className="p-4 md:p-6">
        <h3 className="text-lg font-semibold text-textDark dark:text-textLight mb-4">
          Top Discussion Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          {mockData.sentimentAnalysis.topics.map(topic => (
            <span 
              key={topic} 
              className="bg-primaryAccent bg-opacity-20 text-primaryAccent text-xs sm:text-sm font-medium px-3 py-1 rounded-full hover:bg-opacity-30 transition"
            >
              {topic}
            </span>
          ))}
        </div>
      </Card>
    </div>
  </div>
);

export default CandidateDashboard;
