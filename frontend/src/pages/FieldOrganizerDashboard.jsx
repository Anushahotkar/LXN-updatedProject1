import React from 'react';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import ChartPlaceholder from '../components/ChartPlaceholder';
import MapIcon from '../icons/MapIcon';
import mockData from '../data/mockData';

const FieldOrganizerDashboard = () => (
  <div className="px-4 sm:px-6 lg:px-8 py-6">
    {/* Page Header */}
    <PageTitle
      title="Field Organizer Dashboard"
      subtitle="Tools for Get-Out-The-Vote (GOTV) efforts."
    />

    {/* Main Dashboard Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      
      {/* Map / Chart Section */}
      <div className="lg:col-span-2">
        <ChartPlaceholder title="Optimized Canvassing Routes" icon={MapIcon}>
          <div className="w-full h-64 sm:h-80 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-textMuted">
            [Interactive Map with Routes Placeholder]
          </div>
        </ChartPlaceholder>
      </div>

      {/* Route Progress */}
      <div>
        <Card className="p-4 sm:p-6 h-full hover:shadow-lg transition-shadow duration-300 rounded-xl">
          <h3 className="text-lg font-semibold text-textDark dark:text-textLight mb-4">
            Route Progress
          </h3>
          <div className="space-y-5">
            {mockData.canvassingRoutes.map(route => (
              <div key={route.id}>
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span className="text-textDark dark:text-textLight">{route.area}</span>
                  <span className="text-primaryAccent">{route.completion}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-primaryAccent h-2.5 transition-all duration-500"
                    style={{ width: `${route.completion}%` }}
                  ></div>
                </div>
                <p className="text-xs text-textMuted mt-1">
                  {route.volunteers} volunteers assigned
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>

    {/* Volunteer Interaction Form */}
    <Card className="mt-6 p-4 sm:p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-textDark dark:text-textLight mb-4">
        Log Volunteer Interaction
      </h3>
      <form className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Voter ID"
          className="px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-borderLight dark:border-borderDark rounded-md focus:outline-none focus:ring-2 focus:ring-primaryAccent transition-all"
        />
        <select
          className="px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-borderLight dark:border-borderDark rounded-md focus:outline-none focus:ring-2 focus:ring-primaryAccent transition-all"
        >
          <option>Contacted</option>
          <option>Not Home</option>
          <option>Refused</option>
        </select>
        <button
          type="submit"
          className="bg-secondaryAccent text-black font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-all duration-200"
        >
           Log Interaction
        </button>
      </form>
    </Card>
  </div>
);

export default FieldOrganizerDashboard;
