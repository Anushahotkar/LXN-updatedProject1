import React from 'react';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';

const DataManagementPage = () => (
  <div className="px-4 sm:px-6 lg:px-8 py-6">
    {/* Page Header */}
    <PageTitle
      title="Data Management"
      subtitle="Tools for model building and data validation."
    />

    {/* Responsive Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      
      {/* Model Builder Card */}
      <Card className="p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 rounded-xl bg-white">
        <div>
          <h3 className="text-xl font-semibold mb-3">Custom Model Builder</h3>
          <p className="text-gray-600 mb-6">
            Use our visual editor to build and train custom prediction models with ease.
          </p>
        </div>
        <button
          className="w-full bg-primaryAccent text-black hover:bg-primaryAccent/80 font-semibold py-3 px-4 rounded-lg transition-all duration-200"
        >
          🚀 Launch Model Builder
        </button>
      </Card>

      {/* Data Validation Card */}
      <Card className="p-6 hover:shadow-lg transition-shadow duration-300 rounded-xl bg-white">
        <h3 className="text-xl font-semibold mb-4">Data Validation Log</h3>
        <ul className="space-y-3">
          {[
            { name: "Electoral Roll Q3 2024", status: "Validated", color: "text-secondaryAccent" },
            { name: "Social Media Stream", status: "Validated (0.1% error)", color: "text-secondaryAccent" },
            { name: "New Donor List", status: "Failed (Schema Mismatch)", color: "text-pinkAccent" },
          ].map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-gray-800 font-medium">{item.name}</span>
              <span className={`${item.color} text-sm font-semibold`}>{item.status}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  </div>
);

export default DataManagementPage;
