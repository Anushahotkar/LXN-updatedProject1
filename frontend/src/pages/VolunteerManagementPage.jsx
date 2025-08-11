import React from 'react';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import mockData from '../data/mockData';

const VolunteerManagementPage = () => (
  <div className="px-4 sm:px-6 lg:px-8 py-6">
    {/* Page Header */}
    <PageTitle
      title="Volunteer Management"
      subtitle="Onboard, manage, and communicate with your team."
    />

    {/* Responsive Table */}
    <Card className="overflow-x-auto mt-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <table className="w-full text-left min-w-[700px]">
        <thead className="sticky top-0 z-10 border-b bg-gray-50">
          <tr>
            <th className="p-4 text-sm font-semibold text-gray-600">ID</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Name</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Assigned Area</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Hours Logged</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {mockData.volunteers.map((vol, index) => (
            <tr
              key={vol.id}
              className={`border-b hover:bg-gray-50 transition-colors ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
              }`}
            >
              <td className="p-4 font-mono text-xs sm:text-sm">{vol.id}</td>
              <td className="p-4 font-semibold text-gray-800">{vol.name}</td>
              <td className="p-4 text-gray-700">{vol.area}</td>
              <td className="p-4 text-gray-700">{vol.hours}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium ${
                    vol.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {vol.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  </div>
);

export default VolunteerManagementPage;
