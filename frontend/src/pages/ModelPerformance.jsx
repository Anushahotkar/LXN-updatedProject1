import React from "react";
import Card from "../components/Card";
import PageTitle from "../components/PageTitle";
import {
  Target,
  Activity,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import mockData from "../data/mockData";

const ModelPerformance = () => {
  // For demo, we'll define the modelPerformance data here since it's not in your mockData.js.
  // You can move this data to mockData.js if you want.
  const modelPerformance = [
    {
      name: "Voter Turnout Predictor",
      precision: "0.89",
      recall: "0.85",
      f1Score: "0.87",
      driftStatus: "Low Drift",
    },
    {
      name: "Election Outcome Forecaster",
      precision: "0.92",
      recall: "0.88",
      f1Score: "0.90",
      driftStatus: "High Drift",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-8">
      <PageTitle
        title="Model Performance"
        subtitle="Monitor accuracy, recall, and drift for machine learning models powering campaign insights."
      />

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {modelPerformance.map((model, idx) => {
          const driftHigh = model.driftStatus === "High Drift";
          const DriftIcon = driftHigh ? AlertTriangle : CheckCircle;
          const driftColor = driftHigh
            ? "text-red-600 dark:text-red-400"
            : "text-green-600 dark:text-green-400";
          const driftBg = driftHigh
            ? "bg-red-100 dark:bg-red-900"
            : "bg-green-100 dark:bg-green-900";

          return (
            <Card
              key={idx}
              className="p-6 flex flex-col justify-between border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow rounded-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {model.name}
                </h3>
                <div
                  className={`p-2 rounded-full ${driftBg} flex items-center justify-center`}
                  title={model.driftStatus}
                >
                  <DriftIcon className={`w-5 h-5 ${driftColor}`} />
                </div>
              </div>

              <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  <span>
                    Precision: <strong>{model.precision}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-purple-500" />
                  <span>
                    Recall: <strong>{model.recall}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span>
                    F1 Score: <strong>{model.f1Score}</strong>
                  </span>
                </div>
              </div>

              <div
                className={`mt-5 inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                  driftHigh
                    ? "bg-red-200 text-red-700 dark:bg-red-900 dark:text-red-400"
                    : "bg-green-200 text-green-700 dark:bg-green-900 dark:text-green-400"
                }`}
              >
                {model.driftStatus}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ModelPerformance;
