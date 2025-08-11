import React from 'react';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import ChartPlaceholder from '../components/ChartPlaceholder';
import BarChartIcon from '../icons/BarChartIcon';
import LineChartIcon from '../icons/LineChartIcon';
import mockData from '../data/mockData';

const DataAnalystDashboard = () => (
  <div className="space-y-6">
    <PageTitle 
      title="Analyst Dashboard" 
      subtitle="Advanced tools for deep-dive analysis and model building." 
    />

    {/* Query Builder */}
    <Card className="p-4 md:p-6">
      <h3 className="text-lg sm:text-xl font-semibold text-textDark dark:text-textLight mb-4">
        Custom Query Builder
      </h3>
      <textarea
        className="
          w-full h-32 p-3 
          bg-gray-100 dark:bg-gray-800 
          border border-borderLight dark:border-borderDark 
          rounded-md 
          focus:outline-none focus:ring-2 focus:ring-primaryAccent 
          font-mono text-sm sm:text-base
          resize-none
        "
        placeholder="e.g., SELECT voter_id FROM voter_file WHERE state = 'Karnataka' AND age BETWEEN 18 AND 25;"
      ></textarea>
      <div className="mt-3 flex flex-wrap gap-3">
        <button
          className="
            bg-primaryAccent text-black 
            px-4 py-2 rounded-lg 
            hover:opacity-90 hover:text-gray-700 
            transition-colors font-medium
          "
        >
          Run Query
        </button>
        <button
          className="
            bg-gray-200 dark:bg-gray-700 text-textDark dark:text-textLight 
            px-4 py-2 rounded-lg 
            hover:bg-gray-300 dark:hover:bg-gray-600 
            transition-colors font-medium
          "
        >
          Clear
        </button>
      </div>
    </Card>

    {/* Charts & Data Sources */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <ChartPlaceholder 
        title="Voter Age Distribution" 
        icon={BarChartIcon} 
        className="min-h-[250px] sm:min-h-[300px]"
      >
        <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-textMuted">
          [Histogram Placeholder]
        </div>
      </ChartPlaceholder>

      <ChartPlaceholder 
        title="Sentiment vs. Income Correlation" 
        icon={LineChartIcon} 
        className="min-h-[250px] sm:min-h-[300px]"
      >
        <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-textMuted">
          [Scatter Plot Placeholder]
        </div>
      </ChartPlaceholder>

      <Card className="p-4 md:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-textDark dark:text-textLight mb-4">
          Data Sources
        </h3>
        <ul className="space-y-3">
          {[
            { name: "Electoral Roll Data", status: "Validated", color: "text-secondaryAccent" },
            { name: "Census Data (2011)", status: "Validated", color: "text-secondaryAccent" },
            { name: "Donor List (Internal)", status: "Validated", color: "text-secondaryAccent" },
            { name: "Social Media API", status: "Connected", color: "text-yellow-500" },
          ].map((source, idx) => (
            <li 
              key={idx} 
              className="flex items-center justify-between border-b border-borderLight dark:border-borderDark pb-2 last:border-0"
            >
              <span className="text-textMuted">{source.name}</span>
              <span className={`text-sm font-medium ${source.color}`}>
                {source.status}
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  </div>
);

export default DataAnalystDashboard;
