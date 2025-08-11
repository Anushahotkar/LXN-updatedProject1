import React from "react";
import Card from "../components/Card";
import PageTitle from "../components/PageTitle";
import { Users, AlertCircle, CheckCircle } from "lucide-react";
import mockData from "../data/mockData";

const GOTVDashboard = () => {
  // Example real-time turnout data by booth (mocked here)
  const realTimeTurnout = [
    { booth: "Booth 101", constituency: "Bangalore South", turnoutPercent: 55 },
    { booth: "Booth 102", constituency: "Bangalore South", turnoutPercent: 72 },
    { booth: "Booth 201", constituency: "Mumbai North", turnoutPercent: 60 },
    { booth: "Booth 202", constituency: "Mumbai North", turnoutPercent: 48 },
    { booth: "Booth 301", constituency: "Lucknow Central", turnoutPercent: 50 },
  ];

  // Get predicted turnout for constituencies from mockData
  const turnoutPredictionMap = {};
  mockData.geospatial.forEach((geo) => {
    turnoutPredictionMap[geo.name] = mockData.kpis.predictedTurnout.value;
  });

  // Helper to parse predicted turnout percentage string "71%" => 71 number
  const parsePercent = (str) => parseFloat(str.replace("%", ""));

  // Identify booths lagging behind predicted turnout by >10%
  const boothsLagging = realTimeTurnout.filter((booth) => {
    const predicted = parsePercent(
      turnoutPredictionMap[booth.constituency] || "70%"
    );
    return booth.turnoutPercent < predicted - 10;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-8">
      <PageTitle
        title="Get-Out-The-Vote Dashboard"
        subtitle="Live voter turnout monitoring to maximize election day impact."
      />

      <Card className="mb-6">
        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
          Real-Time Turnout by Booth
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                <th className="p-3">Booth</th>
                <th className="p-3">Constituency</th>
                <th className="p-3">Turnout (%)</th>
                <th className="p-3">Predicted Turnout (%)</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {realTimeTurnout.map((booth) => {
                const predicted = parsePercent(
                  turnoutPredictionMap[booth.constituency] || "70%"
                );
                const isLagging = booth.turnoutPercent < predicted - 10;
                return (
                  <tr
                    key={booth.booth}
                    className={`border-t border-gray-300 dark:border-gray-700 ${
                      isLagging ? "bg-red-100 dark:bg-red-900" : ""
                    }`}
                  >
                    <td className="p-3">{booth.booth}</td>
                    <td className="p-3">{booth.constituency}</td>
                    <td className="p-3">{booth.turnoutPercent}%</td>
                    <td className="p-3">{predicted}%</td>
                    <td className="p-3">
                      {isLagging ? (
                        <span className="flex items-center gap-1 text-red-600 dark:text-red-400 font-semibold">
                          <AlertCircle size={18} />
                          Lagging
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-green-600 dark:text-green-400 font-semibold">
                          <CheckCircle size={18} />
                          On Track
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      {boothsLagging.length > 0 && (
        <Card className="bg-yellow-50 dark:bg-yellow-900 p-5">
          <h3 className="text-lg font-semibold mb-2 text-yellow-900 dark:text-yellow-300">
            Action Needed: Redeploy Volunteers
          </h3>
          <p className="mb-3 text-yellow-800 dark:text-yellow-200">
            The following booths are falling behind turnout expectations. Consider
            dispatching additional volunteers for calls or door-to-door efforts.
          </p>
          <ul className="list-disc list-inside text-yellow-900 dark:text-yellow-300 font-medium">
            {boothsLagging.map((booth) => (
              <li key={booth.booth}>
                {booth.booth} - {booth.constituency} ({booth.turnoutPercent}% turnout)
              </li>
            ))}
          </ul>
        </Card>
      )}

      <Card className="mt-6 p-4 flex items-center gap-3 text-gray-800 dark:text-gray-200 bg-blue-100 dark:bg-blue-900 rounded-lg">
        <Users size={24} className="text-blue-600 dark:text-blue-400" />
        <div>
          <p className="font-semibold text-lg">Total Volunteers Active Today</p>
          <p className="text-sm">
            {mockData.volunteers.filter((v) => v.status === "Active").length}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default GOTVDashboard;
