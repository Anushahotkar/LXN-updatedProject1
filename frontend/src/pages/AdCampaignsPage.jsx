import React from 'react';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import mockData from '../data/mockData';

const platformColors = {
  Google: 'bg-yellow-100 text-yellow-800',
  Facebook: 'bg-blue-100 text-blue-800',
  Instagram: 'bg-pink-100 text-pink-800',
  LinkedIn: 'bg-blue-50 text-blue-900',
};

const AdCampaignsPage = () => (
  <div className="space-y-6">
    <PageTitle 
      title="Ad Campaign Performance" 
      subtitle="Monitor the performance of your digital and print ad campaigns." 
    />

    <Card>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-sm font-semibold text-gray-700">Campaign Name</th>
              <th className="p-4 text-sm font-semibold text-gray-700">Platform</th>
              <th className="p-4 text-sm font-semibold text-gray-700 text-right">Impressions</th>
              <th className="p-4 text-sm font-semibold text-gray-700 text-right hidden sm:table-cell">Clicks</th>
              <th className="p-4 text-sm font-semibold text-gray-700 text-right hidden md:table-cell">CTR</th>
              <th className="p-4 text-sm font-semibold text-gray-700 text-right">Spend (INR)</th>
            </tr>
          </thead>
          <tbody>
            {mockData.adCampaigns.map(ad => (
              <tr 
                key={ad.id} 
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="p-4 font-medium text-gray-900">{ad.name}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${platformColors[ad.platform] || 'bg-gray-100 text-gray-800'}`}>
                    {ad.platform}
                  </span>
                </td>
                <td className="p-4 text-right">{ad.impressions.toLocaleString('en-IN')}</td>
                <td className="p-4 text-right hidden sm:table-cell">{ad.clicks ? ad.clicks.toLocaleString('en-IN') : 'N/A'}</td>
                <td className="p-4 text-right hidden md:table-cell">{ad.ctr}</td>
                <td className="p-4 text-right font-semibold">{ad.spend.toLocaleString('en-IN')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  </div>
);

export default AdCampaignsPage;
